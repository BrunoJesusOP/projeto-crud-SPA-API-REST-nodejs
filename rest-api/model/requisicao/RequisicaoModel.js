const db = require('../../banco/dbConexao');

module.exports = class RequisicaoModel {
    static getTodos(callback) {
        return db.query("SELECT * FROM requisicao", callback);
    }
    static getId(id, callback) {
        return db.query("SELECT * FROM requisicao WHERE id_requisicao = ?", [id], callback)
    }

    static adicionar(requisicao, callback) {
        //Inseri os dados vou ter que mudar aqui !!!!!!!!!!!!!!!!
        return db.query("INSERT INTO requisicao (descricao, detalhes) VALUES(?, ?)",
            [requisicao.descricao, requisicao.detalhes], callback);
    }

    static deletar(id, callback) {
        return db.query("DELETE FROM requisicao WHERE id_requisicao = ?",
            [id], callback)

    }

    static editar(requisicao, callback) {
        return db.query("UPDATE requisicao SET descricao = ?, detalhes = ? WHERE id_requisicao = ?",
            [requisicao.descricao, requisicao.detalhes, requisicao.id_requisicao], callback)

    }

};