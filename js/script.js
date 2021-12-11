// milestone 2-3

/* 
ho deciso di cambiare l'algoritmo per sfruttare la
possibilità di cumulare testo di append, che non 
avevamo a disposizione (credo) con console.log

questo mi sembra più compatto (anche se forse meno
auto-esplicativo)
*/

const ul = document.querySelector('ul.list');

for (let i = 1; i <= 100; i++) {
  const li = document.createElement('li');
  li.classList.add('box');

  if (i % 3 !== 0 && i % 5 !== 0) {
    li.append(`${i}`);
  } else {
    if (i % 3 === 0) {
    li.append('Fizz');
    li.classList.add('fizz');
    }
    if (i % 5 === 0) {
    li.append('Buzz');
    li.classList.add('buzz');
    }
  }
  ul.append(li);
}


// altro modo in cui l'avrei fatto
/*
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      // fizzbuzz
    } else {
      // fizz
    }
  } else if (i % 5 === 0) {
    // buzz
  }
  else // solo numero
}
*/