const { User } = require('../models/users');
const { House } = require('../models/casas');

const controllers = {
    myIndex(req, res) {
        res.render('index', { title: 'Express' });
    },
    myUser(req, res) {
        res.json({
            name: "Santiago",
            age: 46,
          })
    },
    newUser: async (req, res) => {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).json(user);
        } catch (err) {
            res.status(501).json({
                msg: "No se puede guardar el usuario en la DB, ese mail ya existe",
                err,
            });
        }
    },
    verUser: async (req, res) => {
        const users = await User.find();
        res.json ({ users });
    },
    
    vistaCasa: async (req, res) =>{
        const casas = await House.find();
        res.json ({casas});
    },
    
    vistaUnicaCasa: async (req, res) =>{
        const casas = await House.findById(req, params.id)
        res.json ({casas});
    },
    
    crearCasa: async (req, res) =>{
        try {
            const save = new House (req.body);
            await save.save(),
            res.status(201).json(save)
        } catch (err) {
            res.status(501).json({msg: "no se puede guardar la casa, por favor intenta mas tarde", err,});
        }
    }
};

module.exports = controllers;
//module.exports = {vistaCasa, vistaUnicaCasa, crearCasa}