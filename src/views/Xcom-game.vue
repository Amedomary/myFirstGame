<template>
  <div class="about">
    <h1>This is X-com game</h1>

    <div id="background"></div>
    <canvas id="canvas_bg" width="1100" height="500">Go canvas</canvas>
    <canvas id="canvas_alert" width="1100" height="500">Go canvas</canvas>
    <canvas id="canvas" width="1100" height="500">Go canvas</canvas>

    <nav>
      <router-link to="/">to Home page</router-link>
      <router-link to="/fractus">to Frectus</router-link>
      <router-link to="/myFirstGame/">to 2D game</router-link>
    </nav>

    <div class="text">
      <h2>About the game:</h2>
      <p>Interface, 2nd unit, animation, gameLoop - comming soon</p>
    </div>
  </div>

</template>

<style scoped>
#background {
  background-color: rgb(60, 60, 60);
  position: absolute;
  width: 1100px;
  height: 500px;
  margin: auto;
  right: 0;
  z-index: 1;
  left: 0;
  background-image: url("../assets/test-bg-xcom.jpg");
  background-size: cover;
  background-position: -1px -2px;
  /* filter: grayscale(0.2); */
  opacity: 1;
}
#canvas {
  border: 1px solid #92b6bc;
  position: relative;
  z-index: 6;
}
#canvas_bg,
#canvas_alert {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 2;
  pointer-events: none;
}
#canvas_alert {
  z-index: 4;
}
#thanks {
  color: #c91919;
  font-size: 60px;
}
.text {
  width: 1102px;
  margin: auto;
  text-align: left;
}
p { margin: 10px 0; }
h2 { margin: 30px 0 15px 0; }
a {
  display: inline-block;
  padding: 8px;
}
</style>

<script>
export default {
  name: "xcom",
  mounted() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const canvas_bg = document.getElementById("canvas_bg");
    const ctx_bg = canvas_bg.getContext("2d");
    const canvas_alert = document.getElementById("canvas_alert");
    const ctx_alert = canvas_alert.getContext("2d");

    // game loop
    // let last = performance.now();
    // const FPS = 60;
    // const STEP = 1 / FPS; // update should be called 60 times per second
    // let dt = 0;
    // let now;
    const gridStep = 50;
    const blockCells = [];
    // 1 = blocked cell, 0 - availible cell
    const startBlockMapCells = {
      // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1] <- columns
      0: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // row 1
      1: [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // row 2 ...
      2: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      3: [0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      4: [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      5: [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      6: [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      7: [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      8: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      9: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
    for (let key in startBlockMapCells) {
      startBlockMapCells[key].forEach((e, index) => {
        if (e === 1) {
          blockCells.push([Number(index), Number(key)]);
        }
      });
    }
    let hoverCell = {
      x: null,
      y: null,
    };
    let activeCell = {
      x: null,
      y: null,
    };
    let state = {
      'unitIsSelected': false,
    };
    let unit1 = {
      x: 18,
      y: 7,
      selected: false,
    };
    // let unit2 = {};

    /** RENDERS functions */
    function renderUnit(unit) {
      const startPathPointUnit = {
        x: unit.x * gridStep + gridStep / 2,
        y: unit.y * gridStep + gridStep / 2,
      };

      ctx_bg.fillStyle = '#fff';
      ctx_bg.beginPath(); // Start a new path
      ctx_bg.arc(
        startPathPointUnit.x,
        startPathPointUnit.y,
        gridStep / 5,
        0, 2 * Math.PI
      );
      ctx_bg.fillRect(
        startPathPointUnit.x - gridStep / 3,
        startPathPointUnit.y,
        gridStep * 2 / 3,
        2
      )
      ctx_bg.fill();
    }

    // Отрисовка сетки на фоне
    function renderGrid() {
      let drowOriginX = 0;
      let drowOriginY = 0;
      ctx_bg.strokeStyle = 'rgba(0,0,0,.1)';
      ctx_bg.save();

      ctx_bg.clearRect(0, 0, canvas_bg.width, canvas_bg.height);
      ctx_bg.translate(0, 0);

      while (drowOriginX <= (canvas_bg.width - gridStep)) {
        while (drowOriginY <= (canvas_bg.height - gridStep)) {
          ctx_bg.strokeRect(drowOriginX, drowOriginY, gridStep, gridStep);
          drowOriginY += gridStep;
        }
        ctx_bg.strokeRect(drowOriginX, drowOriginY, gridStep, gridStep);
        drowOriginY = 0;
        drowOriginX += gridStep;
      }
      ctx_bg.restore();
    }

    let setTimeoutAlert;
    function renderAlertZone() {
      ctx_alert.fillStyle = 'rgba(100,0,0,.5)';
      blockCells.forEach((element) => {
        ctx_alert.fillRect(
          element[0] * gridStep,
          element[1] * gridStep,
          gridStep, gridStep
        );
      });
      clearTimeout(setTimeoutAlert);
      setTimeoutAlert = setTimeout(() => {
        ctx_alert.clearRect(0, 0, canvas.width, canvas.height);
      }, 400);
    }

    function renderHoverRect() {
      // if cell is blocked
      if (blockCells.some(checkBlockCells)) {
        ctx.strokeStyle = 'rgba(255, 0, 100, .9)';
      } else {
        ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
      }
      ctx.lineWidth = 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeRect((hoverCell.x * gridStep), (hoverCell.y * gridStep), gridStep, gridStep);
    }

    function renderActiveRect() {
      // if is not under hover and is not null
      if ((activeCell.x !== hoverCell.x || activeCell.y !== hoverCell.y) && activeCell.x !== null) {
        ctx.strokeRect((activeCell.x * gridStep), (activeCell.y * gridStep), gridStep, gridStep);
      }
    }

    function renderPathToNewPosition() {
      if (activeCell.x !== null && (activeCell.x !== hoverCell.x || activeCell.y !== hoverCell.y)) {
        let distanceX = hoverCell.x - activeCell.x;
        let distanceY = hoverCell.y - activeCell.y;
        const startPathPoint = {
          x: activeCell.x * gridStep + gridStep / 2,
          y: activeCell.y * gridStep + gridStep / 2,
        };
        // canvas style
        ctx.lineWidth = 2;
        ctx.beginPath(); // Start a new path
        ctx.moveTo( (startPathPoint.x), (startPathPoint.y) );

        if (Math.abs(distanceX) <= Math.abs(distanceY)) {
          // сначало рисуем горезонтальную
          ctx.lineTo( (startPathPoint.x + distanceX * gridStep), (startPathPoint.y) );
        } else {
          // сначало рисуем вертикальную
          ctx.lineTo( (startPathPoint.x), (startPathPoint.y + distanceY * gridStep) );
        }

        // отрисовка до конечной точки пути
        ctx.lineTo(
          (startPathPoint.x + distanceX * gridStep),
          (startPathPoint.y + distanceY * gridStep)
        );
        ctx.stroke();
      }
    }
    /** !RENDERS functions */

    // check for cell is blocked #return true
    function checkBlockCells(el) {
      return el[0] === hoverCell.x && el[1] === hoverCell.y
    }

    function selectUnit(mouse) {
      // закастылена на первый юнит
      if (hoverCell.x === unit1.x && hoverCell.y === unit1.y) {
        state.unitIsSelected = true;
        unit1.selected = true;
        activeCell.x = ~~(mouse.layerX / gridStep);
        activeCell.y = ~~(mouse.layerY / gridStep);
      }
    }

    function unSelectUnit() {
      // закастылена на первый юнит

      ctx_bg.clearRect(unit1.x * gridStep + 2, unit1.y * gridStep + 2, gridStep - 4, gridStep - 4);
      state.unitIsSelected = false;
      unit1.selected = false;
      unit1.x = hoverCell.x;
      unit1.y = hoverCell.y;

      renderUnit(unit1);
      activeCell = { x: null, y: null };
    }

    // обрабатываем нажатие мыши
    canvas.onmousedown = function (e) {
      // если блок не заблокирован
      if (!blockCells.some(checkBlockCells)) {
        // если юнит выбран
        if (!state.unitIsSelected) {
          selectUnit(e);
        } else {
          unSelectUnit();
          renderHoverRect();
          renderActiveRect();
        }
      } else {
        renderAlertZone();
      }
    }

    // обработчки движения мыши
    canvas.onmousemove = function(e) {
      const xRectOld = hoverCell.x;
      const yRectOld = hoverCell.y;
      hoverCell.x = ~~(e.layerX / gridStep);
      hoverCell.y = ~~(e.layerY / gridStep);

      // если перешли в другой квадрат
      if (hoverCell.x !== xRectOld || hoverCell.y !== yRectOld) {
        renderHoverRect();
        renderActiveRect();
        if (state.unitIsSelected) {
          renderPathToNewPosition();
        }
      }
    };

    // once drow
    renderGrid();
    renderUnit(unit1);

    // gameLoop
    // let callback = () => {
    //   now = performance.now();
    //   dt = dt + (now - last) / 1000;
    //   // пока дельта меньше шага не обновляем движок
    //   while (dt > STEP) {
    //     dt = dt - STEP;
    //     // updateCharter();
    //   }
    //   last = now;

    //   // Рисуем по возможностям (drow when we can)
    //   requestAnimationFrame(callback);
    // };
    // requestAnimationFrame(callback);
  }
};
</script>

