
import RequisicaoModel from "../models/requisicao/RequisicaoModel";

let divRequisicoes = window.document.getElementById("div-requisicao");
let objIndexController;

class IndexController{
    getTodosIndex(divRequisicoes){
        let promise = new Promise(function(resolve, reject){
            let promiseFetch = RequisicaoModel.getTodos()
            promiseFetch.then(response =>{
                resolve(response);
            });
        })
        promise.then(response =>{
            let dados = "";

            for(const servico of response.dados){
                dados += `<div class="card text-white bg-primary">
                <div class="card-header">
                <h5 class="card-title">${servico.descricao}</h5>
                </div>
                <div class="card-body">
                  <p class="card-text">${servico.detalhes}</p>
                </div>
              </div><br>`;
            }
            
            divRequisicoes.innerHTML = dados;
        }).catch(response => console.log("erro catch:", response));
    }
}

function main(){
    objIndexController = new IndexController();
    objIndexController.getTodosIndex(divRequisicoes);
}

window.onload = main;