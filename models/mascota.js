const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    nombre: String,
    descripcion: String
});

//Creando modelo

const Mascota = mongoose.model('Mascota',mascotaSchema);

module.exports = Mascota;