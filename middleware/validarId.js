const {House} = require("..models/model")
const validarId = async (req, res, next) =>{
    const casa = await House.findById(req.params.id)
    if (casa !== null) {
        next();
    }else{
        res.json({msg: "el id es invalido"})
    }
}
module.exports = {validarId}