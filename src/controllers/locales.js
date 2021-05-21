import {Locales} from "../config/relaciones"

//CRUD

export const crearLocales = async (req, res) =>{
    
    try{
        const nuevoLocal = await Locales.create(req.body);
        return res.status(201).json({ 
            success: true,
            content: nuevoLocal,
            message: "Local creado correctamente",
        });

    }catch(error){
        return res.status(501).json({ 
            success: false,
            content: error,
            message: "Error al crear un local nuevo",
        });
    }  

};