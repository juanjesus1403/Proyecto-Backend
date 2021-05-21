import {Locales} from "../config/relaciones"

//CRUD

export const crearLocales = async (req, res) =>{
    
    try{
        const validacion = new RegExp(/^[a-zA-Z ]+$/);
        if (validacion.test(req.body.productoNombre)){
            const nuevoLocal = await Locales.create(req.body);
            return res.status(201).json({ 
                success: true,
                content: nuevoLocal,
                message: "Local creado correctamente",
            });
        }else{            
            return res.status(400).json({
                success: false,
                content: null,
                message: "Nombre de local incorrecto",
              });
        }       
    }catch(error){
        return res.status(501).json({ 
            success: false,
            content: error,
            message: "Error al crear un local nuevo",
        });
    }
};

export const listarLocales = async (req, res) => {
    try {
      const locales = await Locales.findAll();
      return res.json({
        success: true,
        content: locales,
        message: null,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        content: error,
        message: "Error al devolver los locales",
      });
    }
  };