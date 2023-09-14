const { getCollection } = require('../database/db.js');

// Obtener cita con fecha especifica y pacientes ordenados (en proceso...)
const getCitaFecha = async (req, res)=>{
    try {
        const collection = await getCollection('Cita');
        const fechaCita = new Date('2023-10-21');
        const data = await collection.find({fecha: fechaCita}).sort({datosUsuario: 1}).toArray();
        const userCollection = getCollection('Usuarios');

        /* const userNames = [];
        for(const i of data){
            const userData = await userCollection.findOne({_id: i.datosUsuario});
            if(userData && userData.nombre){
                userNames.push(userData.nombre);
            }
        } */
        
        res.json({
            cita: data
        })
    } catch (error) {
        res.status(500).json('Not Found');
    }
}

module.exports = {
    getCitaFecha,
}