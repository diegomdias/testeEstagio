import "core-js"
import "regenerator-runtime/runtime"

import { getPost } from "./api";

const section = document.querySelector('section');

async function exibirPost(){
  let result = await getPost();
  result.forEach(element => {
    const p = document.createElement('p');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    div.appendChild(h1);
    div.appendChild(p);
    section.appendChild(div);
    h1.textContent = element.title;
    p.textContent = element.body;
    div.classList.add('div-content');
    console.log(element);
  })
  
}
exibirPost();

const bg1 = document.querySelector('#bg1');
const bg2 = document.querySelector('#bg2');
const bg3 = document.querySelector('#bg3');

bg1.addEventListener('click', () => {
  document.body.style.backgroundColor = '#e8ca55';
})

bg2.addEventListener('click', () => {
  document.body.style.backgroundColor = '#55dde8';
})

bg3.addEventListener('click', () => {
  document.body.style.backgroundColor = '#fc6b41';
})

