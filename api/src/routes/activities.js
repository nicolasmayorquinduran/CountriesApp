const { Router } = require('express');
const axios = require("axios")
const {Country, Activity} = require("../db")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// [ ] POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos

router.post("/activity", async (req, res) => {
    const { name ,difficulty ,duration, season, countries} = req.body
    try {
        // se crea la actividad de no existir en la base de datos
        const [newActivity, boolean] = await Activity.findOrCreate({
            where:{
                name,
            }, defaults:{
                difficulty, duration, season
            }
        })
        // se mapean los paises para consultar cada uno en la tabla
        // y se relaciona con la actividad creada

        boolean && countries.map(async(c) =>{
            const findedCountry = await Country.findOne({
                where:{
                    name:c
                }
            }) 
            // solo relaciona las tablas si el pais existe previamente y si la actividad no habia sido creada
            findedCountry.addActivity(newActivity) 
        });


        res.send(`La actividad ${name} ha sido creada y relacionada a paises`)
        
    } catch (error) {
        res.json({error: "Los datos enviados no son válidos en el momento"})
    }
})



module.exports = router;
