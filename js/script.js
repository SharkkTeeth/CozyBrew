let time = 25 * 60; // 25 minutos en segundos
let interval;
let running = false; //indicador de que el temporizador esta en marcha

function toggleTimer() {
  const btn = document.getElementById("startStopBtn");

  if (running) {
    clearInterval(interval);
    btn.innerText = "Iniciar";
    running = false;
  } else {
    interval = setInterval(() => {
      if (time <= 0) {
        clearInterval(interval);
        alert("¡Tiempo terminado!");
        btn.innerText = "Iniciar";
        running = false;
        time = 25 * 60; //reiniciar tiempo
        document.getElementById("timer").innerText = "25:00";
      } else {
        time--;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        documento.getElementById("timer").innerText = `${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;
      }
    }, 1000);
    btn.innerText = "Detener";
    running = true;
  }
}

/*function startTimer() {
interval = setInterval(() => {
  if (time <= 0) {
    clearInterval(interval), alert("¡Tiempo terminado!");
  } else {
    time--;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("timer").innerText = `${minutes}:${String(
      seconds
    ).padStart(2, "0")}`;
  }
}, 1000);
}*/
