const jwt = require('jsonwebtoken');

module.exports = {
    logar

};

function logar(rec, res) {
    if (rec.body.login == 'admin' && rec.body.senha == '123') {
        const token = jwt.sign({ id: 1 }, 'segredo', {
            expiresIn: 300
        })

        return res.status(200).json({
            token: token

        })
    }

    return res.status(400).json({
        message: 'Login ou Senha Incorreta'
    })

};