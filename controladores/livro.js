const fs = require('fs');
const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletarLivro } = require('../servicos/livro');

function getLivros(req, res) {
    try {
        const livros = getTodosLivros();
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

function getLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorId(id);
            res.send(livro)
        } else {
            res.status(422);
            res.send("Id inválido!")
        }


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

function postLivro(req, res) {
    try {
        const livroNovo = req.body;
        insereLivro(livroNovo);
        res.status(201);
        res.send("Livro inserido com sucesso!");
    } catch (error) {
        res.status(500);
        res.message(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;

        if (id && Number(id)) {
            modificaLivro(body, id);
            res.send("Item modificado com sucesso")
        } else {
            res.status(422);
            res.send("Id inválido!")
        }


    } catch (error) {
        res.status(500);
        res.message(error.message);

    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            deletarLivro(id);
            res.send(`Livro de id:${id} deletado com sucesso!`)
        } else {
            res.status(422);
            res.send("Id inválido!")
        }



    } catch (error) {
        res.status(500);
        res.message(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
};