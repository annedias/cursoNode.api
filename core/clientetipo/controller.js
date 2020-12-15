module.exports = {
    buscarTodos

};

async function buscarTodos(req, res) {
    try {
        let result = await mode.findAll({
            raw: true,
            attributes: ['id', 'nome']
        });
        res.status(200).json({
            content: result
        });

    } catch (error) {
        res.status(500).json({
            error: 'Deu erro!',
            error: error
        })
    }

}