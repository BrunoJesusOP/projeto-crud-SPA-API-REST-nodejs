var express = require('express');
var router = express.Router();
var RequisicaoModel = require('../model/requisicao/RequisicaoModel');
var RespostaClass = require('../model/RespostaClass');

router.get("/", function(req, res, next){
    RequisicaoModel.getTodos(function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:', erro);
        } else {
            resposta.dados = retorno;
        }
        res.json(resposta);
    })

})
//pega o id
router.get("/:id?", function(req, res, next){
    RequisicaoModel.getId(req.params.id ,function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:', erro);
        } else {
            resposta.dados = retorno;
        }
        res.json(resposta);
    })

})
//gerar uma requisição
router.post("/?", function(req, res, next){
    RequisicaoModel.adicionar(req.body ,function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:', erro);
        } else {
            if(retorno.affectedRows > 0) {
                resposta.msg = "cadastro realizado com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possível realizar a operação';
            }
        }
        console.log('resp:', resposta);
        res.json(resposta);
    })

})

//deletar requisição
router.delete("/:id", function(req, res, next){
    RequisicaoModel.deletar(req.params.id ,function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:', erro);
        } else {
            if(retorno.affectedRows > 0) {
                resposta.msg = "registro excluido com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possível excluir o registro.';
            }
        }
        console.log('resp:', resposta);
        res.json(resposta);
    })

})

//alterar requisição
router.put("/", function(req, res, next){
    
    RequisicaoModel.editar(req.body ,function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:', erro);
        } else {
            if(retorno.affectedRows > 0) {
                resposta.msg = "registro editado com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possível editar o registro.';
            }
        }
        console.log('resp:', resposta);
        res.json(resposta);
    })

})

module.exports = router;