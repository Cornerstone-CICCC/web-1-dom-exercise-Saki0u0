// YOUR CODE HERE

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const paragraphs = document.querySelectorAll('p')
const output1 = document.getElementById("output1")
const output3 = document.getElementById("output3")
const output4 = document.getElementById("output4")

btn1.addEventListener('click', () =>  {
    output1.classList.add('pColor')
});


btn2.addEventListener('click', () => {
  const span = document.createElement('span');
  span.textContent = 'Hello world';

  const output2 = document.getElementById('output2');
  const p = output2.querySelector('p');
  
  p.insertAdjacentElement('afterend', span);
});

btn3.addEventListener('click', () => {
  const smallText = document.getElementsByClassName('small-text');
  if(smallText){
 smallText.classList.remove('small-text');
  }
});

btn4.addEventListener('click', () =>  {
  output4.classList.add('pColor')
});
