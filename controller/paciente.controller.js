const { getCollection } = require('../database/db.js');

// Obtener pacientes en orden alfabetico ✅
const getPacientes = async (req, res)=>{
    try {
        const collection = await getCollection('Usuarios');
        const data = await collection.find().sort({nombre: 1}).toArray();
        res.json({
            pacientes: data
        })
    } catch (error) {
        res.status(500).json({error: 'Not Found'})
    }
}

module.exports = {
    getPacientes,
}