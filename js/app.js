let tiempoTranscurrido = 0;
let intervalo = undefined;
let pausado = true;

let btnPause = document.getElementById('btnPause')
let btnPlay = document.getElementById('btnPlay')
let btnStop = document.getElementById('btnStop')

btnPause.addEventListener('click',pause)
btnPlay.addEventListener('click',play)
btnStop.addEventListener('click',reset)

function actualizarCronometro() {
    tiempoTranscurrido++

    let segundos = tiempoTranscurrido % 60;
    let minutos = Math.floor((tiempoTranscurrido % 3600) / 60)
    let horas = Math.floor(tiempoTranscurrido / 3600)
    
    if (segundos < 10) {
      segundos = "0" + segundos;
    }
    if (minutos < 10) {
      minutos = "0" + minutos;
    }  
    if (horas < 10) {
      horas = "0" + horas;
    }

    document.getElementById("tiempo").innerHTML = `${horas}:${minutos}:${segundos}`;
    
}

function play() {
  if (pausado) {
    intervalo = setInterval(actualizarCronometro, 1000);
    pausado = false;
  }
}

function pause() {
  if (!pausado) {
    clearInterval(intervalo);
    pausado = true;
  }
}

function reset() {
  clearInterval(intervalo);
  tiempoTranscurrido = -1;
  pausado = true;
  actualizarCronometro();
}