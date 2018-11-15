<template>
  <main>
    <div id="background"></div>
    <canvas ref="canvas" width="1100" height="500">Go canvas</canvas>
  </main>
</template>

<style>
  html {
    background-color: #222;
  }
  canvas {
    border: 1px solid #92b6bc;
    position: relative;
    z-index: 2;
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
  }
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    // game loop
    let last = performance.now();
    const step = 1 / 60; // update should be called 60 times per second
    let dt = 0;
    let now;

    // Величины
    const METER = 10;
    const SEC = 60 * step; //секунда равна количеству пересчётов
    const G = 9.78 * METER / (1000*1000);   //м/с²

    // Персонаж
    let charter = {
      x: 100,
      y: 100,
      height: 50,
      width: 25,
      stateIn: 'air',
      actionIn: 'stay',
      color: '#3dd39f',
      speedX: 0,
      speedY: 0,
      aX: 0,
      aY: 0
    }

    // Стили canvas
    ctx.fillStyle = '#ddd';
    ctx.font = '17px sans-serif';
    ctx.textAlign = 'right';

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

    document.addEventListener('keydown', keydownHandler);
    document.addEventListener('keyup', keyupHandler);
    // !handle user input. Назначение кнопок управления

    function lerp(start, finish, time) {
      return start + (finish - start) * time;
    }

    // Обновление игрового движка
    function updateCharter() {
      if (inputState.LEFT) charter.speedX -= 1;
      if (inputState.RIGHT) charter.speedX += 1;
      // if (inputState.UP) charter.y -= METER;
      // if (inputState.DOWN) charter.y += METER;
      if (inputState.ROTATE) charter.y -= METER;

      if (charter.speedX !== 0) {
        charter.x += charter.speedX;
        if ( (!inputState.RIGHT && !inputState.LEFT && (charter.speedX !== 0))
            || (inputState.RIGHT && inputState.LEFT) ) {
          if (charter.speedX > 0) {
            charter.speedX -= .5 * SEC;
          } else {
            charter.speedX += .5 * SEC;
          }
        }
      }

      // Притяжение
      if (charter.stateIn === 'air') {
        charter.speedY += .5 * SEC;
        charter.y += charter.speedY
      } else if (charter.stateIn === 'ground') {
        charter.speedY = 0
      }

      // Прыжок
      if (inputState.SPACE) {
        charter.speedY = -10;
        charter.y -= 1;
      }

      // Геометрия тела
      if (charter.speedY !== 0) {
        charter.width = 25 - Math.abs(charter.speedY) / 3;
      }
      if (charter.speedX !== 0) {
        charter.height = 50 - Math.abs(charter.speedX) / 3;
      }
      


      // проверка состояния
      if (charter.y < 460) {
        charter.stateIn = 'air';
      } else if (charter.y = 460) {
        charter.stateIn = 'ground';
        charter.width = 25;
      }

      if (charter.speedX !== 0) {
        charter.actionIn = 'run';
      } else if (charter.speedX === 0) {
        charter.actionIn = 'stay';
        charter.height = 50;
      }

      // Cтоп зоны
      if (charter.y > 460) charter.y = 460;
      if (charter.y < 40) charter.y = 40;
      if (charter.x > 900) charter.x = 900;
      if (charter.x < 20) charter.x = 20;
      if (charter.speedX > 12) charter.speedX = 12;
      if (charter.speedX < -12) charter.speedX = -12;
      if (charter.speedY > 20) charter.speedY = 20;
      if (charter.speedY < -20) charter.speedY = -20;
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
    };

    // Рендер монитора свойств
    const keys_of_charter = Object.keys(charter);
    const position_text_of_charter = [];
    let start_point = 20;
    for (let i = 0; i < keys_of_charter.length; i++) {
      position_text_of_charter.push(start_point + 21);
      start_point += 21;
    }
    function render_monitor_params() {
      ctx.fillText(`${keys_of_charter[0]} - ${Math.floor(charter[keys_of_charter[0]])}`, 1090, position_text_of_charter[0]);
      ctx.fillText(`${keys_of_charter[1]} - ${Math.floor(charter[keys_of_charter[1]])}`, 1090, position_text_of_charter[1]);
      ctx.fillText(`${keys_of_charter[2]} - ${Math.floor(charter[keys_of_charter[2]])}`, 1090, position_text_of_charter[2]);
      ctx.fillText(`${keys_of_charter[3]} - ${Math.floor(charter[keys_of_charter[3]])}`, 1090, position_text_of_charter[3]);
      ctx.fillText(`${keys_of_charter[4]} - ${charter[keys_of_charter[4]]}`, 1090, position_text_of_charter[4]);
      ctx.fillText(`${keys_of_charter[5]} - ${charter[keys_of_charter[5]]}`, 1090, position_text_of_charter[5]);
      ctx.fillText(`${keys_of_charter[6]} - ${charter[keys_of_charter[6]]}`, 1090, position_text_of_charter[6]);
      ctx.fillText(`${keys_of_charter[7]} - ${Math.floor(charter[keys_of_charter[7]])}`, 1090, position_text_of_charter[7]);
      ctx.fillText(`${keys_of_charter[8]} - ${Math.floor(charter[keys_of_charter[8]])}`, 1090, position_text_of_charter[8]);
      ctx.fillText(`${keys_of_charter[9]} - ${Math.floor(charter[keys_of_charter[9]])}`, 1090, position_text_of_charter[9]);
      ctx.fillText(`${keys_of_charter[10]} - ${Math.floor(charter[keys_of_charter[10]])}`, 1090, position_text_of_charter[10]);
      ctx.fillText(`${keys_of_charter[11]} - ${Math.floor(charter[keys_of_charter[11]])}`, 1090, position_text_of_charter[11]);
      ctx.fillText(`${keys_of_charter[12]} - ${Math.floor(charter[keys_of_charter[12]])}`, 1090, position_text_of_charter[12]);
      ctx.fillText(`${keys_of_charter[13]} - ${Math.floor(charter[keys_of_charter[13]])}`, 1090, position_text_of_charter[13]);
      ctx.fillText(`${keys_of_charter[14]} - ${Math.floor(charter[keys_of_charter[14]])}`, 1090, position_text_of_charter[14]);
      ctx.fillText(`${keys_of_charter[15]} - ${Math.floor(charter[keys_of_charter[15]])}`, 1090, position_text_of_charter[15]);
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
