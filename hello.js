function fizz() {
  for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }}
};

function fizzy() {
  for (let i = 1; i <= 100; i++){

    let out = "";

    if (i % 3 === 0){
        out += "Fizz";
    }if (i % 5 === 0)
      out += "Buzz";
    if (i % 7 === 0)
      out += "Bazz";
    console.log(out || i);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('button').onclick = fizzy;
});
