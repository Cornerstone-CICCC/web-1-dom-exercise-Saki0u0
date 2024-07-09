// YOUR CODE HERE

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const paragraphs = document.querySelectorAll('p')

btn1.addEventListener('click', () =>  {
  paragraphs.forEach((paragraph) => {
    paragraph.classList.add('pColor')
  });
});

btn2.addEventListener('click', () =>  {
  const secondP =document.createElement('p')
  secondP.textContent = "Hello World"
});


