<template>
  <main>
    <div id="background"></div>
    <canvas id="canvas" width="1100" height="500">Go canvas</canvas>
    <canvas id="canvas_bg" width="1100" height="500">Go canvas</canvas>
  </main>
</template>

<style>
  html {
    background-color: #050411;
  }
  #background {
    background-color: rgb(60, 60, 60);
    position: absolute;
    width: 1100px;
    height: 461px;
    margin: auto;
    right: 0;
    z-index: 1;
    left: 0;
    background-image: url('../assets/3.jpg');
    background-size: cover;
    filter: grayscale(0.6) blur(2px);
    opacity: 0.3;
  }
  #canvas {
    border: 1px solid #92b6bc;
    position: relative;
    z-index: 2;
  }
  #canvas_bg {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 3;
  }
</style>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  mounted() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const canvas_bg = document.getElementById('canvas_bg');
    const ctx_bg = canvas_bg.getContext('2d');

    // game loop
    let last = performance.now();
    const step = 1 / 60; // update should be called 60 times per second
    let dt = 0;
    let now;

    // Величины
    const METER = 10;
    const SEC = 60 * step; //секунда равна количеству пересчётов
    // const G = 9.78 * METER / (1000*1000);   //м/с²

    // Персонаж
    let charter = {
      x: 100,
      y: 100,
      height: 50,
      width: 25,
      stateIn: 'air',
      actionIn: 'stay',
      jumpCounter: 0,
      vX: 0,
      vY: 0,
      // aX: 0,
      // aY: 0,
      color: '#6affcb',
    }

    let platform = {
      x: 20 * METER,
      y: 25 * METER,
      w: 20 * METER,
      h: .5 * METER
    }

    // Способности, перки
    const maxJumps = 2;

    // Стили canvas
    ctx.fillStyle = '#fff';
    ctx.font = '17px sans-serif';
    ctx.textAlign = 'right';

    // Рендер статичного фона
    let render = () => {
      ctx_bg.strokeStyle = "#fff";
      ctx_bg.fillStyle = "#fff"
      ctx_bg.lineWidth = 1;
      ctx_bg.strokeRect(-10, -10, 922, 600);
      ctx_bg.fillRect(platform.x, platform.y, platform.w, platform.h);
    }
    render();

    // handle user input. Назначение кнопок управления
    let inputState = { UP: false, DOWN: false, LEFT: false, RIGHT: false, SPACE: false };
    let setKeyState = function (keyCode, isPressed) {
        switch (keyCode) {
            case 65: inputState.LEFT = isPressed; break;
            case 87: inputState.UP = isPressed; break;
            case 68: inputState.RIGHT = isPressed; break;
            case 83: inputState.DOWN = isPressed; break;
            case 32: inputState.SPACE = isPressed; break;
        }
    }
    let keydownHandler = (e) => {
        setKeyState(e.which, true);
    }
    let keyupHandler = (e) => {
        setKeyState(e.which, false);
    }

    // отпускаем пробел
    let spaceWasUnPressed = true;
    let onSpaceUpFunction = () => {
      spaceWasUnPressed = true;
    }

    // биндим функции на отпускание клавиши
    document.onkeyup = function (e) {
      switch (e.keyCode) {
        case 32 : onSpaceUpFunction(); break;
      }
    }
    document.addEventListener('keydown', keydownHandler);
    document.addEventListener('keyup', keyupHandler);
    // !handle user input. Назначение кнопок управления

    // * function lerp(start, finish, time) {
    // *   return start + (finish - start) * time;
    // * }

    function checkGround(e) {
      const plx1 = platform.x;
      const plx2 = platform.x + platform.w;
      const ply1 = platform.y;
      const ply2 = platform.y + platform.h + charter.height;
      if ((plx1 < charter.x && charter.x < plx2) && (ply1 < charter.y && charter.y < ply2) && (charter.vY > 0)) {
          charter.y = platform.y;
          charter.stateIn = 'ground';
        } else if ((plx1 < charter.x && charter.x < plx2) && (ply1 < charter.y && charter.y < ply2) && (charter.vY < 0)) {
          charter.y = platform.y + platform.h + charter.height;
          charter.vY = 0;
        }
      }      

    // Обновление игрового движка
    function updateCharter() {
      if (inputState.LEFT) charter.vX -= 1;
      if (inputState.RIGHT) charter.vX += 1;

      if (charter.vX !== 0) {
        charter.x += charter.vX;
        if ( (!inputState.RIGHT && !inputState.LEFT && (charter.vX !== 0))
            || (inputState.RIGHT && inputState.LEFT) ) {
          if (charter.vX > 0) {
            charter.vX -= .5 * SEC;
          } else {
            charter.vX += .5 * SEC;
          }
        }
      }

      // Притяжение
      if (charter.stateIn === 'air') {
        charter.vY += .5 * SEC;
        charter.y += charter.vY
      } else if (charter.stateIn === 'ground') {
        charter.vY = 0
      }

      // Прыжок 
      if (inputState.SPACE) {
        // мы на земле и мы отпускали пробел
        if (charter.stateIn === 'ground' && spaceWasUnPressed) {
          charter.vY = -10;
          charter.y -= 1;
        }

        // если мы в воздухе и не отпускали пробел
        if ( charter.stateIn === 'air' && !spaceWasUnPressed && charter.vY < 0) {
          charter.vY -= .2;
        }

        // Если мы в воздухе, у нас есть прыжки, и мы уже отпускали пробел
        if (charter.stateIn === 'air' && charter.jumpCounter <= maxJumps && spaceWasUnPressed) {
          charter.vY = -10;
          charter.jumpCounter += 1;
          spaceWasUnPressed = false;
        }
      }

      // Геометрия тела
      if (charter.vY !== 0) {
        charter.width = 25 - Math.abs(charter.vY) / 3;
      }
      if (charter.vX !== 0) {
        charter.height = 50 - Math.abs(charter.vX) / 3;
      }

      function onPlatform() {
        const plx1 = platform.x;
        const plx2 = platform.x + platform.w;
        const ply1 = platform.y;
        const ply2 = platform.y + platform.h;
        return ((charter.y === platform.y) && (plx1 < charter.x && charter.x < plx2));
      }
      
      // проверка состояния
      if (charter.y < 460 && !onPlatform()) {
        charter.stateIn = 'air';
      } else { // из игрового фпс пролетает чуть ниже потом становится минимальным
        charter.stateIn = 'ground';
        charter.width = 25;
        charter.jumpCounter = 0;
      }

      if (charter.vX !== 0) {
        charter.actionIn = 'run';
      } else if (charter.vX === 0) {
        charter.actionIn = 'stay';
        charter.height = 50;
      }

      checkGround();
      // Cтоп зоны
      if (charter.y > 460) charter.y = 460;
      if (charter.y < 40) charter.y = 40;
      if (charter.x > 900) {
        charter.x = 900;
        charter.vX = 0;
      }
      if (charter.x < 15) {
        charter.x = 15
        charter.vX = 0;
      }
      if (charter.vX > 12) charter.vX = 12;
      if (charter.vX < -12) charter.vX = -12;
      if (charter.vY > 20) charter.vY = 20;
      if (charter.vY < -20) charter.vY = -20;
      // if (charter) charter = ;
      // if (charter) charter = ;
      // if (charter) charter = ;
      // if (charter) charter = ;
      // if (charter) charter = ;
    } // !Обновление игрового движка

    function renderCharter() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(charter.x, charter.y);
      ctx.translate(-charter.width / 2, -charter.height);
      ctx.fillStyle = charter.color;
      ctx.fillRect(0, 0, charter.width, charter.height);
      ctx.restore();
    }

    // Рендер монитора свойств
    const keys_of_charter = Object.keys(charter);
    const position_text_of_charter = [];
    let start_point = 20;
    for (let i = 0; i < keys_of_charter.length; i++) {
      position_text_of_charter.push(start_point + 21);
      start_point += 21;
    }
    function render_monitor_params() {
      ctx.fillText(`${keys_of_charter[0]} = ${Math.floor(charter[keys_of_charter[0]])}`, 1090, position_text_of_charter[0]);
      ctx.fillText(`${keys_of_charter[1]} = ${Math.floor(charter[keys_of_charter[1]])}`, 1090, position_text_of_charter[1]);
      ctx.fillText(`${keys_of_charter[2]} = ${Math.floor(charter[keys_of_charter[2]])}`, 1090, position_text_of_charter[2]);
      ctx.fillText(`${keys_of_charter[3]} = ${Math.floor(charter[keys_of_charter[3]])}`, 1090, position_text_of_charter[3]);
      ctx.fillText(`${keys_of_charter[4]} = ${charter[keys_of_charter[4]]}`, 1090, position_text_of_charter[4]);
      ctx.fillText(`${keys_of_charter[5]} = ${charter[keys_of_charter[5]]}`, 1090, position_text_of_charter[5]);
      ctx.fillText(`${keys_of_charter[6]} = ${charter[keys_of_charter[6]]}`, 1090, position_text_of_charter[6]);
      ctx.fillText(`${keys_of_charter[7]} = ${Math.floor(charter[keys_of_charter[7]])}`, 1090, position_text_of_charter[7]);
      ctx.fillText(`${keys_of_charter[8]} = ${Math.floor(charter[keys_of_charter[8]])}`, 1090, position_text_of_charter[8]);
      ctx.fillText(`${keys_of_charter[9]} = ${Math.floor(charter[keys_of_charter[9]])}`, 1090, position_text_of_charter[9]);
      ctx.fillText(`${keys_of_charter[10]} = ${Math.floor(charter[keys_of_charter[10]])}`, 1090, position_text_of_charter[10]);
      ctx.fillText(`${keys_of_charter[11]} = ${Math.floor(charter[keys_of_charter[11]])}`, 1090, position_text_of_charter[11]);
      ctx.fillText(`${keys_of_charter[12]} = ${Math.floor(charter[keys_of_charter[12]])}`, 1090, position_text_of_charter[12]);
      ctx.fillText(`${keys_of_charter[13]} = ${Math.floor(charter[keys_of_charter[13]])}`, 1090, position_text_of_charter[13]);
      ctx.fillText(`${keys_of_charter[14]} = ${Math.floor(charter[keys_of_charter[14]])}`, 1090, position_text_of_charter[14]);
      ctx.fillText(`${keys_of_charter[15]} = ${Math.floor(charter[keys_of_charter[15]])}`, 1090, position_text_of_charter[15]);
    }
    
    let callback = () => {
      now = performance.now();
      dt = dt + ((now - last) / 1000);
      // пока дельта меньше шага не обновляем движок
      while(dt > step) {
        dt = dt - step;
        updateCharter();
      }
      last = now;

      // Рисуем по возможностям
      renderCharter();
      render_monitor_params();
      requestAnimationFrame(callback);
    }
    requestAnimationFrame(callback);
  }
}
</script>
