const { User } = require('../models/users');
const { House } = require('../models/casas');
const { check, validationResult, body} = require ("express-validator")

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
            const error = validationResult (req)
            if (error.isEmpty()) {
            const user ={
                name: req.body.name,
                rol: "USER", 
                active: true
            };
            const save = new House (req.body);
            await save.save(),
            res.status(201).json(save)
            } else {
                res.status(501).json(error)
            }
        } catch (err) {
            res.status(501).json({msg: "no se puede guardar la casa, por favor intenta mas tarde", err,});
        }
    },

    editarCasa: async (req, res) =>{
        const error = validationResult (req)
            if (error.isEmpty()) {
                const {id} = req.params
                const update = await House.findByIdAndUpdate(id, req.body)
                res.status(202).json({name: req.body.name,update})
            } else {
                res.status(501).json(error)
            }  
    },

    borrarCasa: async (req, res) =>{
        try{
            const casa = await House.findByIdAndDelete(req.params.id)
            res.json({msg: "eliminada", casa})
        } catch (error) {
            res.status(400).json({msg: "problemas al momento de eliminar la informacion"})
        }
    }
};

module.exports = controllers;
//module.exports = {vistaCasa, vistaUnicaCasa, crearCasa}