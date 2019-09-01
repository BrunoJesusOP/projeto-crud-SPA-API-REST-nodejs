import RequisicaoModel from "../models/requisicao/RequisicaoModel";
import RequisicaoClass from "../models/requisicao/RequisicaoClass";

let divMsg = window.document.getElementById("msg");
let divRequisicoes = window.document.getElementById("requisicoes");
let formulario = window.document.getElementById("form");

let objRequisicaoController;

class RequisicaoController{

    getTodosTable(divRequisicoes){
        let promise = new Promise(function(resolve, reject){
            let promiseFetch = RequisicaoModel.getTodos()
            promiseFetch.then(response =>{
                resolve(response);
            });
        })
        promise.then(response =>{
            let dados = "";

            if(response.erro){
                this.exibirMsgAlert(response.msg, 'erro');
            }else{
                dados += `<div class="table-responsive"> 
                <table class="table table-striped table-bordered table-hover table-sm">
                    <thead class="table-dark">
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th></th>
                            <th></th>
                        </th>
                    </thead>
                    <tbody>`;

                for(const servico of response.dados){
                    dados += `<tr>
                    <td>${servico.id_requisicao}</td>
                    <td>${servico.descricao}</td>
                    <td><button type="button" class="btn btn-primary btn-editar" data-id="${servico.id_requisicao}">Editar</button></td>
                    <td><button type="button" class="btn btn-primary btn-excluir" data-id="${servico.id_requisicao}">Excluir</button></td>
                </tr>`;
                }
                dados += "</tbody></table></div>";
                divRequisicoes.innerHTML = dados;

                let btnsEditar = document.querySelectorAll(".btn-editar");
                let btnsExcluir = document.querySelectorAll(".btn-excluir");
                btnsEditar.forEach(function(item){
                    item.addEventListener("click", event =>{
                        objRequisicaoController.limparMsgAlert();
                        let id = event.target.getAttribute('data-id');
                        objRequisicaoController.prepararEditar(id);
                    });
                });

                btnsExcluir.forEach(function(item){
                    item.addEventListener("click", event =>{
                        objRequisicaoController.limparMsgAlert();
                        let id = event.target.getAttribute('data-id');
                        objRequisicaoController.deletar(id);
                    });
                });
            }
            
            
        }).catch(response => console.log("erro catch:", response));
    }

    prepararEditar(id){

            let promise = new Promise(function(resolve, reject){
                let promiseFetch = RequisicaoModel.getId(id);
                promiseFetch.then(response =>{
                    resolve(response);
                });
            })
            promise.then(response =>{
               if(response.erro){
                   this.exibirMsgAlert(response.msg,"erro");
               }else{

                    let objRequisicaoClass = new RequisicaoClass(
                        response.dados[0].id_requisicao, 
                        response.dados[0].descricao, 
                        response.dados[0].detalhes);

                        formulario.id.value = objRequisicaoClass.id_requisicao;
                        formulario.descricao.value = objRequisicaoClass.id_requisicao;
                        formulario.detalhes.value = objRequisicaoClass.id_requisicao;

                   objRequisicaoController.ocultarElemento("listagem");
                   objRequisicaoController.exibirElemento("formulario");
               }

            }).catch(response => {
                console.log("erro catch:", response);
            });
    };

    editar(formulario){
        let id, descricao, detalhes;
        id = formulario.id.value;
        descricao = formulario.descricao.value;
        detalhes = formulario.detalhes.value;

        if(id && descricao && detalhes){
            let objRequisicaoClass = new RequisicaoClass(id, descricao, detalhes);

            let promise = new Promise(function(resolve, reject){
                let promiseFetch = RequisicaoModel.editar(objRequisicaoClass);
                promiseFetch.then(response =>{
                    resolve(response);
                });
            })
            promise.then(response =>{
               if(response.erro){
                   this.exibirMsgAlert(response.msg,"erro");
               }else{
                   objRequisicaoController.getTodosTable(divRequisicoes);
                   objRequisicaoController.exibirMsgAlert(response.msg,"sucesso");
                   objRequisicaoController.ocultarElemento("formulario");
                   objRequisicaoController.exibirElemento("listagem");
                   objRequisicaoController.limparCamposForm(formulario);
               }

            }).catch(response => {
                console.log("erro catch:", response);
            });

        }else{
            this.exibirMsgAlert("Por favor preencher todos os campos.","erro");
        }
    }
    // adiciona os campos !!!!aqui
    adicionar(formulario){
        let descricao, detalhes;
        descricao = formulario.descricao.value;
        detalhes = formulario.detalhes.value;

        if(descricao && detalhes){
            let objRequisicaoClass = new RequisicaoClass(null, descricao, detalhes);

            let promise = new Promise(function(resolve, reject){
                let promiseFetch = RequisicaoModel.adicionar(objRequisicaoClass);
                promiseFetch.then(response =>{
                    resolve(response);
                });
            })
            promise.then(response =>{
               if(response.erro){
                   this.exibirMsgAlert(response.msg,"erro");
               }else{
                   objRequisicaoController.getTodosTable(divRequisicoes);
                   objRequisicaoController.exibirMsgAlert(response.msg,"sucesso");
                   objRequisicaoController.ocultarElemento("formulario");
                   objRequisicaoController.exibirElemento("listagem");
                   objRequisicaoController.limparCamposForm(formulario);
               }

            }).catch(response => {
                console.log("erro catch:", response);
            });

        }else{
            this.exibirMsgAlert("Por favor preencher todos os campos.","erro");
        }
    }

    deletar(id){
        let promise = new Promise(function(resolve, reject){
            let promiseFetch = RequisicaoModel.deletar(id);
            promiseFetch.then(response =>{
                resolve(response);
            });
        })
        promise.then(response =>{
           if(response.erro){
               this.exibirMsgAlert(response.msg,"erro");
           }else{
               objRequisicaoController.getTodosTable(divRequisicoes);
               objRequisicaoController.exibirMsgAlert(response.msg,"sucesso");
           }

        }).catch(response => {
            console.log("erro catch:", response);
        });

    };

    ocultarElemento(elemento){
        document.getElementById(elemento).style.display = "none";
    }

    exibirElemento(elemento){
        document.getElementById(elemento).style.display = "block";
    }

    limparCamposForm(form){
        form.id.value = "";
        form.descricao.value = "";
        form.detalhes.value = "";
    }

    exibirMsgAlert(msg, tipo){
        let dados = "";
        if(tipo == "sucesso"){
            dados = `<div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>${msg}</strong> Olha esse alerta animado, como é chique!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>`
        }else if(tipo == "erro"){
            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>${msg}</strong> Olha esse alerta animado, como é chique!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>`
        }

        divMsg.innerHTML = dados;
    }

    limparMsgAlert(){
        divMsg.innerHTML = "";
    }

    registrarEvents(){
        document.getElementById('btn-exibir-formulario').addEventListener("click", function(){
            objRequisicaoController.limparMsgAlert();
            objRequisicaoController.ocultarElemento("listagem");
            objRequisicaoController.exibirElemento("formulario");
        });

        document.getElementById('btn-cadastrar-requisicao').addEventListener("click", function(){
           event.preventDefault();
           objRequisicaoController.limparMsgAlert();
           if(formulario.id.value){
                objRequisicaoController.editar(formulario);
           }else {
               objRequisicaoController.adicionar(formulario);
           }
        });

        document.getElementById('btn-cancelar-operacao').addEventListener("click", function(){
            objRequisicaoController.limparMsgAlert();
            objRequisicaoController.limparCamposForm(formulario);
            objRequisicaoController.ocultarElemento("formulario");
            objRequisicaoController.exibirElemento("listagem");
        });

    }

    
    
}

function main(){
    objRequisicaoController = new RequisicaoController();
    objRequisicaoController.ocultarElemento("formulario");
    objRequisicaoController.getTodosTable(divRequisicoes);
    objRequisicaoController.registrarEvents();
}

window.onload = main;