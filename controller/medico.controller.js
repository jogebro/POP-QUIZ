const { getCollection } = require('../database/db.js');

// Obtener cita con fecha especifica y pacientes ordenados (en proceso...)
const getMedicoEspecialidad = async (req, res)=>{
    try {
        const collection = await getCollection('Medico');
        const collectionEsp = await getCollection('Especialidad');
        for(const i of data){
            const especialidadData = await collectionEsp.find({_id: i.especialidad});
            return especialidadData
        }
        const data = await collection.find().toArray();
        res.json({
            cita: data
        })
    } catch (error) {
        res.status(500).json('Not Found');
    }
}

module.exports = {
    getMedicoEspecialidad,
}