console.log("Script cargado correctamente");

let bebidaSeleccionada = "espresso"; //por defecto
let time = 5 * 60; // 25 minutos en segundos
let interval;
let running = false; //indicador de que el temporizador esta en marcha

function seleccionarBebida(bebida, minutos) {
  bebidaSeleccionada = bebida;
  time = minutos * 60; //asignar tiempo en segundos

  //quitar seleccion previa
  document.querySelectorAll(".selector img").forEach((img) => {
    img.classList.remove("seleccionada");
  });

  //agregar clase a la bebida seleccionada
  event.target.classList.add("seleccionada");
}

function mostrarTemporizador() {
  document.getElementById("pantalla-inicio").style.display = "none";
  document.getElementById("pantalla-temporizador").style.display = "block";

  let minutes = Math.floor(time / 60);
  document.getElementById("timer").innerText = `${minutes}:00`;
}

function toggleTimer() {
  console.log("Boton presionado, funcion ejecutado");
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
        time = 5 * 60; //reiniciar tiempo
        document.getElementById("timer").innerText = "25:00";
      } else {
        time--;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        document.getElementById("timer").innerText = `${minutes}:${String(
          seconds
        ).padStart(2, "0")}`;
      }
    }, 1000);
    btn.innerText = "Detener";
    running = true;
  }
}

function resetTimer() {
  clearInterval(interval);
  running = false;
  time =
    bebidaSeleccionada === "espresso"
      ? 5 * 60
      : bebidaSeleccionada === "cappuccino"
      ? 10 * 60
      : 15 * 60;

  let minutes = Math.floor(time / 60);
  document.getElementById("timer").innerText = `${minutes}:00`;
  document.getElementById("startStopBtn").innerText = "Iniciar";
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
