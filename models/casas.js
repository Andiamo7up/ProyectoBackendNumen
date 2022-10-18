const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    modelo: {
        type: String,
        required: true,
    },
    metrosCuadrados: {
        type: Number,
        required: true,
    },
    habitaciones: {
        type: Number,
        required: true,
    },
    baños: {
        type: Number,
        required: true,
    },
    amenities: {
        type: String,
    },
    orientacion: {
        type: String,
    },
    precio: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    }
});
const House = mongoose.model('House', storeSchema);

module.exports = {House}