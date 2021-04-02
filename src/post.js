import "core-js"
import "regenerator-runtime/runtime"

import { getPost } from "./api";

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

const view2 = {
  resultGet: document.querySelector(".div-content"),
  resultSection: document.querySelector("#result"), 
  capturarGet(){
    let query = location.search.slice(1);
    let partes = query.split('&');
    let result = {};
    partes.forEach(parte => {
        let chaveValor = parte.split('=');
        let chave = chaveValor[0];
        let valor = chaveValor[1];
        result[chave] = decodeURIComponent(valor.replace(/%20/g, ' '));
    });
    return result;
  },
  exibirPostGet(){
    
    const resultPost = this.capturarGet();
    let title = document.createElement('h1');
    let body = document.createElement('p');
    title.textContent = resultPost.title;
    body.textContent = resultPost.body;
    view2.resultGet.appendChild(title)
    view2.resultGet.appendChild(body)
    this.exibirPostOpcional(resultPost.id);
  }
}
view2.exibirPostGet()
  /*NÃO CONCLUÍDO POR FALTA DE TEMPO
  async exibirPostOpcional(id){
    let result = await getPost();
    let pos;
    let array = [];
    for(let i = 0; i < 4; i++){
        pos = Math.floor(Math.random()*99)
        while(array.includes(pos) || pos + 1 == id){
          pos = Math.floor(Math.random()*99)
        }
        array.push(pos);
        let element = `<div><h3>${result[pos].title}</h3><p>${result[pos].body}</p></div>`
        view2.resultSection.innerHTML += element
    } 
  }
}

*/

