<template>
  <div class="about">
    <h1>Fractus:</h1>
    <canvas id="canvas" width="900" height="900">Go canvas</canvas>

    <h1 id="thanks">Thank you for watching =)</h1>
    <!-- <h1 id="thanks"> Be right back</h1> -->
    <div class="text">
      <h2>For the watchers:</h2>
      <!-- <p>You can ask all questions in the chat</p> -->
      <!-- <p>If you get 100 followers - I'll turn on ерш micro. xD</p> -->
      <p>You can check my site here https://amedomary.github.io/ or on twich page</p>

      <h2>About:</h2>
      <p> Добиваем красоты и валим</p>
      <!-- <p>Interface, 2nd unit, animation, gameLoop - comming soon</p> -->
      <p>Fractus</p>
    </div>
  </div>
</template>

<style scoped>
#canvas {
  border: 1px solid #122c31;
  position: relative;
  z-index: 6;
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
p {
  margin: 10px 0;
}
h2 {
  margin: 30px 0 15px 0;
}
</style>

<script>
export default {
  name: "xcom",
  mounted() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // game loop
    let last = performance.now();
    const FPS = 30;
    const STEP = 1 / FPS; // update should be called 60 times per second
    let dt = 0;
    let now;

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    let Alph  = 0.25;
    let colorStep = 10;
    let triangleColor = 0;
    let startAngle = 0;

    // starXY, count, length
    function createXY(centerXY, count, r) {
      const difAngle = 2 * Math.PI / count;
      const arrAngle = [];
      const arrPoints = {};

      // [a,b,c,d,... count]
      for (let i = 1; i <= count; i++) {
        arrAngle.push(difAngle * i + startAngle);
      }

      // {[x,y], [x,y], [x,y], [x,y]}
      arrAngle.forEach((e,i) => {
        arrPoints[i] = ([centerXY[0] + r * Math.cos(e), centerXY[1] + r * Math.sin(e)]);
      });

      return arrPoints;
    }

    // createXY([160,160], 8, 140); // {[x,y], [x,y], [x,y], [x,y]}

    function renderFractus(points, deep, color = 0) {
      if (deep < 1) return;

      ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;

      // рисуем многогранник
      ctx.beginPath(); // Start a new path
      ctx.moveTo(points[0][0], points[0][1]);
      
      for (const i in points) {
        ctx.lineTo(points[i][0], points[i][1]);
      }
      ctx.lineTo(points[0][0], points[0][1]);
      ctx.stroke();
  
      const newArr = {};

      for (const i in points) {
        if (points[(Number(i)+1)]) {
          newArr[i] = ([
            (1 - Alph) * points[i][0] + Alph * points[(Number(i)+1)][0],
            (1 - Alph) * points[i][1] + Alph * points[(Number(i)+1)][1]
          ]);
        } else {
          newArr[i] = ([
            (1 - Alph) * points[i][0] + Alph * points[0][0],
            (1 - Alph) * points[i][1] + Alph * points[0][1]
          ]);
        }
      }
      renderFractus(newArr, deep - 1, color + colorStep);
    }

    function updateFractus() {
      if (Alph > 1) Alph = 0;
      Alph += 0.006;

      if (colorStep === 20) colorStep = 0;
      colorStep += .1;

      triangleColor += 1;

      // startAngle += 0.005;
    }

    renderFractus(createXY([650,200], 5, 180), 12);

    // gameLoop
    let callback = () => {
      now = performance.now();
      dt = dt + (now - last) / 1000;
      // пока дельта меньше шага не обновляем движок
      while (dt > STEP) {
        dt = dt - STEP;
        updateFractus();
      }
      last = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      renderFractus(createXY([425,200], 3, 180), 28, triangleColor);
      // renderFractus(createXY([650,200], 4, 180), 12, 90);
      renderFractus(createXY([200,650], 5, 180), 8, 180);
      renderFractus(createXY([650,650], 6, 180), 12, 270);
      // Рисуем по возможностям (drow when we can)
      requestAnimationFrame(callback);
    };
    requestAnimationFrame(callback);
  }
};
</script>
