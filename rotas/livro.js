const { Router } = require('express');
const { getLivros, getLivro } = require('../controladores/livro');

const router = Router();

router.get('/', getLivros);
router.get('/:id', getLivro);

router.post('/', (req, res) => {
    res.send('você fez uma requisição do tipo post!')
})

router.patch('/', (req, res) => {
    res.send('você fez uma requisição do tipo patch!')
})

router.delete('/', (req, res) => {
    res.send('você fez uma requisição do tipo delete!')
})

module.exports = router;