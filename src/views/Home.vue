<template>
  <main>
    <h1>2D platformer</h1>
    <div id="background"></div>
    <canvas id="canvas" width="1100" height="500">Go canvas</canvas>
    <canvas id="canvas_bg" width="1100" height="500">Go canvas</canvas>

    <nav>
      <router-link to="amedomary.ru">to Home page</router-link>
      <router-link to="/fractus">to Frectus</router-link>
      <router-link to="/xcom">to Xcom</router-link>
    </nav>

    <h1 id="controller_amount">Please use ⌨️ (keyboard) or connect 🎮 (controller)</h1>
    <div class="select-player"></div>

    <div class="mobile-alert">
      <p>This game only works on PC</p>
      <p>Please, open on your desktop device with width more than 1150px</p>
    </div>
  </main>
</template>

<style scoped>
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
  background-image: url("../assets/3.jpg");
  background-size: cover;
  filter: grayscale(0.5);
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

a {
  display: inline-block;
  padding: 8px;
}

.select-player {
  width: 80vw;
  max-width: 800px;
  margin: 1em 0;
  position: absolute;
  left: 50%;
  top: 740px;
  transform: translate(-50%, -50%);
  counter-reset: player;
  min-height: 100px;
}

.select-player .player {
  padding: 5% 0 5%;
  float: left;
  width: 25%;
  counter-increment: player;
}
.select-player .player:before {
  display: block;
  content: counter(player);
  padding: 0.25em 0;
  font-size: 2em;
}
.select-player .player:after {
  white-space: pre;
  font-size: 0.5em;
  content: "press " attr(data-button-join) " to join\A"attr(data-info);
}
.select-player .player.selected:nth-child(1) {
  background: rgb(0, 0, 0);
}
.select-player .player.selected:after {
  content: "press " attr(data-button-leave) " to leave\A"attr(data-info);
}

.mobile-alert {
  display: none;
}

@media (max-width: 1150px) {
  * {
    display: none;
  }

  main,
  .mobile-alert p {
    display: block;
  }

  .mobile-alert {
    display: block;
    text-align: center;
    padding: 24px;
  }
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "home",
  mounted() {
    // gamePad инит
    var activeGamepads = [];
    // var activePlayers = [];
    window.addEventListener("gamepadconnected", function (e) {
      var gp = navigator.getGamepads()[e.gamepad.index];
      var div = document.createElement("div");
      div.classList.add("player");
      var ctrl = getControllerConfig(gp.id);
      if (activeGamepads.length < 4) {
        activeGamepads.push({
          gamepad: gp,
          config: ctrl,
        });
      }
      if (ctrl.schema == "ps") {
        div.classList.add("ps");
      }
      div.setAttribute("data-button-join", ctrl.button_join);
      div.setAttribute("data-button-leave", ctrl.button_leave);
      div.setAttribute("data-info", ctrl.name);
      document.getElementsByClassName("select-player")[0].appendChild(div);
      document.getElementById("controller_amount").innerHTML =
        `${activeGamepads.length} controller(s) is connected` ||
        "no controller(s)";
    });

    function gamepadLoop() {
      navigator.getGamepads(); // fixes chrome bug
      for (var x = 0; x < activeGamepads.length; x++) {
        var gp = activeGamepads[x].gamepad;
        // var cnfg = activeGamepads[x].config;

        for (var i = 0; i < gp.buttons.length; i++) {
          if (gp.buttons[i].pressed) {
            // console.log("controller #" + x + " - pressed on button: " + i);
          }
        }
        // if (gp.buttons[cnfg.button_join_index].pressed) {
        //   addPlayer(x, gp);
        // }
        // if (gp.buttons[cnfg.button_leave_index].pressed) {
        //   removePlayer(x, gp);
        // }

        inputState.SPACE = gp.buttons[0].pressed;

        if (gp.axes[0] < -0.2) {
          inputState.LEFT = true;
          inputState.RIGHT = false;
        } else if (gp.axes[0] > 0.2) {
          inputState.LEFT = false;
          inputState.RIGHT = true;
        } else {
          inputState.LEFT = false;
          inputState.RIGHT = false;
        }
      }
    }

    // function addPlayer(index, gp) {
    //   if (typeof activePlayers[index] == "undefined") {
    //     activePlayers[index] = { gamepad: gp };
    //     var divPlayer = document.querySelectorAll(".player");
    //     divPlayer[index].classList.add("selected");
    //   }
    // }
    // function removePlayer(index) {
    //   if (typeof activePlayers[index] !== "undefined") {
    //     activePlayers[index] = void 0;
    //     var divPlayer = document.querySelectorAll(".player");
    //     divPlayer[index].classList.remove("selected");
    //   }
    // }
    function getControllerConfig(id) {
      if (id.indexOf("09cc") > -1) {
        return {
          schema: "ps",
          name: "PS4 Controller",
          button_leave: "O",
          button_leave_index: id.indexOf("Wireless") == 0 ? 1 : 2, // inconsitent button index between Firefox and Chrome
          button_join: "X",
          button_join_index: id.indexOf("Wireless") == 0 ? 0 : 1, // inconsitent button index between Firefox and Chrome
        };
      } else {
        return {
          schema: "xbox",
          name: "XBOX Controller",
          button_leave: "B",
          button_leave_index: 1,
          button_join: "A",
          button_join_index: 0,
        };
      }
    }
    // !gamePad инит

    function getRandomInt(from, to) {
      let _from;
      let _to;

      if (from > to) {
        _from = to;
        _to = from;
      }

      if (from < to) {
        _from = from;
        _to = to;
      }

      return Math.floor(Math.random() * (_to - _from) + _from);
    }

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const canvas_bg = document.getElementById("canvas_bg");
    const ctx_bg = canvas_bg.getContext("2d");

    // game loop
    let last = performance.now();
    const FPS = 30;
    const STEP = 1 / FPS; // update should be called 60 times per second
    let dt = 0;
    let now;

    // Величины
    const METER = 10;
    const SEC = 60 / FPS; //секунда равна количеству пересчётов
    // const G = 9.78 * METER / (1000*1000);   //м/с²
    const MAX_X_SPEED = 9;
    const MAX_Y_SPEED = 14;

    // Персонаж
    let charter = {
      x: 100,
      y: 100,
      height: 50,
      width: 25,
      stateIn: "air",
      actionIn: "stay",
      jumpCounter: 0,
      vX: 0,
      vY: 0,
      color: "106, 255, 203",
      opacity: 1,
      onPlatform: false,
    };
    let charterPrev = {};

    let platform = {
      x: getRandomInt(5, 25) * METER,
      y: getRandomInt(10, 40) * METER,
      w: getRandomInt(5, 20) * METER,
      h: 0.5 * METER,
    };

    let platform_2 = {
      x: getRandomInt(50, 70) * METER,
      y: getRandomInt(10, 30) * METER,
      w: getRandomInt(5, 20) * METER,
      h: 0.5 * METER,
    };

    // Способности, перки
    const MAX_JUMPS = 2;

    // Стили canvas
    ctx.fillStyle = "#fff";
    ctx.font = "17px sans-serif";
    ctx.textAlign = "right";

    // Рендер статичного фона
    let renderBackground = (platform) => {
      ctx_bg.strokeStyle = "#fff";
      ctx_bg.fillStyle = "#fff";
      ctx_bg.lineWidth = 1;
      ctx_bg.strokeRect(-10, -10, 922, 600);
      ctx_bg.fillRect(platform.x, platform.y, platform.w, platform.h);
    };

    renderBackground(platform);
    renderBackground(platform_2);

    // handle user input. Назначение кнопок управления
    let inputState = {
      UP: false,
      DOWN: false,
      LEFT: false,
      RIGHT: false,
      SPACE: false,
    };
    let inputStatePrev = {};
    // отпускаем пробел
    let spaceWasUnPressed = true;
    let setKeyState = function (keyCode, isPressed) {
      switch (keyCode) {
        case 65:
          inputState.LEFT = isPressed;
          break;
        case 87:
          inputState.UP = isPressed;
          break;
        case 68:
          inputState.RIGHT = isPressed;
          break;
        case 83:
          inputState.DOWN = isPressed;
          break;
        case 32:
          inputState.SPACE = isPressed;
          break;
      }
    };
    let keydownHandler = (e) => {
      setKeyState(e.which, true);
    };
    let keyupHandler = (e) => {
      setKeyState(e.which, false);
    };

    document.addEventListener("keydown", keydownHandler);
    document.addEventListener("keyup", keyupHandler);
    // !handle user input. Назначение кнопок управления

    // линейная интерполяция
    let lerp = (start, finish, time) => {
      return Math.round(start + (finish - start) * time);
    };

    // Если мы в платформе
    function checkGround(player, platform) {
      const plx1 = platform.x;
      const plx2 = platform.x + platform.w;
      const ply1 = platform.y;
      const ply2 = platform.y + platform.h + player.height;
      if (
        plx1 < player.x &&
        plx2 > player.x &&
        ply1 < player.y &&
        player.y < ply2 &&
        player.vY > 0
      ) {
        player.y = ply1;
        player.stateIn = "ground";
      } else if (
        plx1 < player.x &&
        player.x < plx2 &&
        ply1 < player.y &&
        player.y < ply2 &&
        player.vY < 0
      ) {
        player.y = ply1 + platform.h + player.height;
        player.vY = 0;
      }
    } // !Если мы в платформе

    // true если она на платформе
    function onPlatform(platform, charter) {
      const plx1 = platform.x;
      const plx2 = platform.x + platform.w;
      return charter.y === platform.y && plx1 < charter.x && charter.x < plx2;
    } // !true если она на платформе

    // Постоянное обновление координат игрока
    function updatePersonXY(player) {
      if (player.vX !== 0) {
        player.x += player.vX * SEC;
      }
      if (player.stateIn === "air") {
        player.y += player.vY * SEC;
      }
    } // !Постоянное обновление координат игрока

    /* * * * * * * * * * * * * * * *
     * ОБНОВЛЕНИЕ ИГРОВОГО ДВИЖКА  *
     * * * * * * * * * * * * * * * */
    function updateCharter() {
      onPlatform(platform, charter) || onPlatform(platform_2, charter)
        ? (charter.onPlatform = true)
        : (charter.onPlatform = false);

      if (inputStatePrev.SPACE && !inputState.SPACE) {
        spaceWasUnPressed = true;
      }

      function updateLastParam() {
        charterPrev.x = charter.x;
        charterPrev.y = charter.y;
        inputStatePrev.SPACE = inputState.SPACE;
      }
      updateLastParam();

      // постоянное обновление координат
      updatePersonXY(charter);

      if (inputState.LEFT) charter.vX -= 0.5 * SEC;
      if (inputState.RIGHT) charter.vX += 0.5 * SEC;

      if (charter.vX !== 0) {
        if (
          (!inputState.RIGHT && !inputState.LEFT && charter.vX !== 0) ||
          (inputState.RIGHT && inputState.LEFT)
        ) {
          if (charter.vX > 0) {
            charter.vX -= 0.5 * SEC;
          } else {
            charter.vX += 0.5 * SEC;
          }
        }
      }

      // Притяжение
      if (charter.stateIn === "air") {
        charter.vY += 0.5 * SEC;
      } else if (charter.stateIn === "ground") {
        charter.vY = 0;
      }

      // Прыжок
      if (inputState.SPACE) {
        // мы на земле и мы отпускали пробел
        if (charter.stateIn === "ground" && spaceWasUnPressed) {
          charter.vY = -10;
          charter.y -= 1;
        }

        // если мы в воздухе и не отпускали пробел
        if (charter.stateIn === "air" && !spaceWasUnPressed && charter.vY < 0) {
          charter.vY -= 0.2 * SEC;
        }

        // Если мы в воздухе, у нас есть прыжки, и мы уже отпускали пробел
        if (
          charter.stateIn === "air" &&
          charter.jumpCounter <= MAX_JUMPS &&
          spaceWasUnPressed
        ) {
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

      // проверка состояния
      if (charter.y < 460 && !charter.onPlatform) {
        charter.stateIn = "air";
      } else {
        // из за игрового фпс пролетает чуть ниже потом становится минимальным
        charter.stateIn = "ground";
        charter.width = 25;
        charter.jumpCounter = 0;
      }

      if (charter.vX !== 0) {
        charter.actionIn = "run";
      } else if (charter.vX === 0) {
        charter.actionIn = "stay";
        charter.height = 50;
      }

      checkGround(charter, platform);
      checkGround(charter, platform_2);

      // Cтоп зоны
      if (charter.y > 460) charter.y = 460;
      if (charter.y < 40) charter.y = 40;
      if (charter.x > 900) {
        charter.x = 900;
        charter.vX = 0;
      }
      if (charter.x < 15) {
        charter.x = 15;
        charter.vX = 0;
      }
      if (charter.vX > MAX_X_SPEED) charter.vX = MAX_X_SPEED;
      if (charter.vX < -MAX_X_SPEED) charter.vX = -MAX_X_SPEED;
      if (charter.vY > MAX_Y_SPEED) charter.vY = MAX_Y_SPEED;
      if (charter.vY < -MAX_Y_SPEED) charter.vY = -MAX_Y_SPEED;
    } // !Обновление игрового движка

    // Отрисовка игрока
    function renderCharter(dt) {
      // draw rect using LERP
      let smoothY = lerp(charterPrev.y, charter.y, dt);
      let smoothX = lerp(charterPrev.x, charter.x, dt);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(smoothX, smoothY);
      ctx.translate(-charter.width / 2, -charter.height);
      ctx.fillStyle = `rgb(${charter.color}`;
      ctx.fillRect(0, 0, charter.width, charter.height);
      ctx.restore();
    } // !Отрисовка игрока

    // Рендер монитора свойств - отладка
    function render_monitor_params(charter) {
      const KEYS_OF_CHARTER = Object.keys(charter);
      const POS_TEXT_OF_CHARTER = [];
      let start_point = 20;
      for (let i = 0; i < KEYS_OF_CHARTER.length; i++) {
        POS_TEXT_OF_CHARTER.push(start_point + 21);
        start_point += 21;
      }
      ctx.fillText(
        `${KEYS_OF_CHARTER[0]} = ${Math.floor(charter[KEYS_OF_CHARTER[0]])}`,
        1090,
        POS_TEXT_OF_CHARTER[0]
      );
      ctx.fillText(
        `${KEYS_OF_CHARTER[1]} = ${Math.floor(charter[KEYS_OF_CHARTER[1]])}`,
        1090,
        POS_TEXT_OF_CHARTER[1]
      );
      ctx.fillText(
        `${KEYS_OF_CHARTER[2]} = ${Math.floor(charter[KEYS_OF_CHARTER[2]])}`,
        1090,
        POS_TEXT_OF_CHARTER[2]
      );
      ctx.fillText(
        `${KEYS_OF_CHARTER[3]} = ${Math.floor(charter[KEYS_OF_CHARTER[3]])}`,
        1090,
        POS_TEXT_OF_CHARTER[3]
      );
      ctx.fillText(
        `${KEYS_OF_CHARTER[4]} = ${charter[KEYS_OF_CHARTER[4]]}`,
        1090,
        POS_TEXT_OF_CHARTER[4]
      );
      ctx.fillText(
        `${KEYS_OF_CHARTER[5]} = ${charter[KEYS_OF_CHARTER[5]]}`,
        1090,
        POS_TEXT_OF_CHARTER[5]
      );
      ctx.fillText(
        `${KEYS_OF_CHARTER[6]} = ${charter[KEYS_OF_CHARTER[6]]}`,
        1090,
        POS_TEXT_OF_CHARTER[6]
      );
      ctx.fillText(
        `${KEYS_OF_CHARTER[7]} = ${Math.floor(charter[KEYS_OF_CHARTER[7]])}`,
        1090,
        POS_TEXT_OF_CHARTER[7]
      );
      ctx.fillText(
        `${KEYS_OF_CHARTER[8]} = ${Math.floor(charter[KEYS_OF_CHARTER[8]])}`,
        1090,
        POS_TEXT_OF_CHARTER[8]
      );
      ctx.fillText(
        `${KEYS_OF_CHARTER[9]} = ${Math.floor(charter[KEYS_OF_CHARTER[9]])}`,
        1090,
        POS_TEXT_OF_CHARTER[9]
      );
      ctx.fillText(
        `${KEYS_OF_CHARTER[10]} = ${Math.floor(charter[KEYS_OF_CHARTER[10]])}`,
        1090,
        POS_TEXT_OF_CHARTER[10]
      );
      ctx.fillText(
        `${KEYS_OF_CHARTER[11]} = ${Math.floor(charter[KEYS_OF_CHARTER[11]])}`,
        1090,
        POS_TEXT_OF_CHARTER[11]
      );
      ctx.fillText(
        `${KEYS_OF_CHARTER[12]} = ${Math.floor(charter[KEYS_OF_CHARTER[12]])}`,
        1090,
        POS_TEXT_OF_CHARTER[12]
      );
      ctx.fillText(
        `${KEYS_OF_CHARTER[13]} = ${Math.floor(charter[KEYS_OF_CHARTER[13]])}`,
        1090,
        POS_TEXT_OF_CHARTER[13]
      );
      ctx.fillText(
        `${KEYS_OF_CHARTER[14]} = ${Math.floor(charter[KEYS_OF_CHARTER[14]])}`,
        1090,
        POS_TEXT_OF_CHARTER[14]
      );
      ctx.fillText(
        `${KEYS_OF_CHARTER[15]} = ${Math.floor(charter[KEYS_OF_CHARTER[15]])}`,
        1090,
        POS_TEXT_OF_CHARTER[15]
      );
    } // !Рендер монитора свойств - отладка

    let callback = () => {
      now = performance.now();
      dt = dt + (now - last) / 1000;
      // пока дельта меньше шага не обновляем движок
      while (dt > STEP) {
        dt = dt - STEP;
        gamepadLoop();
        updateCharter();
      }
      last = now;

      // Рисуем по возможностям
      renderCharter(dt * FPS);
      render_monitor_params(charter);
      requestAnimationFrame(callback);
    };
    requestAnimationFrame(callback);
  },
};
</script>
