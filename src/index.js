//diseñar semaforo visualmente que empiece en green y que a los 10 segundos cambie a orange y a los 3,5 segundos a orange y red a los 2 red y a los 10 segundos vuelve a empezar;
//mientras el green este activo el resto en negro
const orange = document.getElementById('orange');
const red = document.getElementById('red');
const green = document.getElementById('green');
const semaforo = document.getElementById('semaforo');

function cambiarColores() {
    orange.style.backgroundColor = 'black';
    red.style.backgroundColor = 'black';
    green.style.backgroundColor = 'green';
    green.style.border = '3px solid rgb(26 180 26)';
    red.style.border = '3px solid rgb(41 38 38)';
    semaforo.style.borderColor = 'green';
setTimeout(() => {
  green.style.backgroundColor = 'black';
  orange.style.backgroundColor = 'orange';
  red.style.backgroundColor = 'black';
  orange.style.border = '3px solid #f37500';
  green.style.border = '3px solid rgb(41 38 38)';
  semaforo.style.borderColor = 'orange';


}, 10000);
/* setTimeout(() => {
  red.style.backgroundColor = 'red';
  orange.style.backgroundColor = 'orange';
  green.style.backgroundColor = 'black';
  orange.style.border = '3px solid #f37500';
  red.style.border = '3px solid #f30071';

  orange.style.border = '3px solid rgb(41 38 38)';
}, 13500); */
setTimeout(() => {
  red.style.backgroundColor = 'red';
  orange.style.backgroundColor = 'black';
  green.style.backgroundColor = 'black';
  red.style.border = '3px solid #f30071';
  orange.style.border = '3px solid rgb(41 38 38)';
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
