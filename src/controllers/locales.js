import {Locales} from "../config/relaciones"
import locales from "../models/locales";

//CRUD

export const crearLocales = async (req, res) =>{
    
    try{
        const validacion = new RegExp(/^[a-zA-Z ]+$/);
        if (validacion.test(req.body.localesNombre)){
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

export async function actualizarLocales(req,res){
  const {id} = req.params;
  const {nombre, descripcion, distrito, latitud, longitud} = req.body

  const Local = await locales.findAll({
    attributes: ['nombre', 'descripcion', 'distrito', 'latitud', 'longitud'],
    where: {
      id
    }
  })  
  Local.forEach(async () =>{
    await locales.update({        
      nombre,
      descripcion,
      distrito,
      latitud,
      longitud
      })
      
    })
  

  return res.json({
    mesaage: 'Local actualizado',
    data: Local
  })
  
};

export async function eliminarLocales(req,res){
  const {id} = req.params;
  const locales = await Locales.destroy({
    where: {
      id
    }
  });
  res.json({
    message: 'Local eliminado'
  })
};
