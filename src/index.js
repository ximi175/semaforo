//diseñar semaforo visualmente que empiece en verde y que a los 10 segundos cambie a ambar y a los 2 segundos y del ambar a rojo a los 10 segundos vuelva a empezar;
//mientras el verde este activo el resto en negro
const ambar = document.getElementById('ambar');
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const semaforo = document.getElementById('semaforo');

function cambiarColores() {
    ambar.style.backgroundColor = 'black';
    rojo.style.backgroundColor = 'black';
    verde.style.backgroundColor = 'green';
    verde.style.border = '3px solid rgb(26 180 26)';
    rojo.style.border = '3px solid rgb(41 38 38)';
    semaforo.style.borderColor = 'green';
setTimeout(() => {
  verde.style.backgroundColor = 'black';
  ambar.style.backgroundColor = 'orange';
  rojo.style.backgroundColor = 'black';
  ambar.style.border = '3px solid #f37500';
  verde.style.border = '3px solid rgb(41 38 38)';
  semaforo.style.borderColor = 'orange';


}, 10000);
/* setTimeout(() => {
  rojo.style.backgroundColor = 'red';
  ambar.style.backgroundColor = 'orange';
  verde.style.backgroundColor = 'black';
  ambar.style.border = '3px solid #f37500';
  rojo.style.border = '3px solid #f30071';

  ambar.style.border = '3px solid rgb(41 38 38)';
}, 13500); */
setTimeout(() => {
  rojo.style.backgroundColor = 'red';
  ambar.style.backgroundColor = 'black';
  verde.style.backgroundColor = 'black';
  rojo.style.border = '3px solid #f30071';
  ambar.style.border = '3px solid rgb(41 38 38)';
  semaforo.style.borderColor = 'red';
}, 15000);
setInterval(() => {
  cambiarColores();
}, 25000);

}
cambiarColores();

/* function bucle() {
  let a = 0;
 for (a = 0) {
    cambiarColores();
  }

}
bucle(); */
