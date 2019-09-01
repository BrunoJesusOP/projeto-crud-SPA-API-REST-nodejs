export default class RequisicaoClass{
    constructor(id, descricao, detalhes){
        if(id!=null) this.id_requisicao = id;
        this.descricao = descricao;
        this.detalhes = detalhes;
    }
}