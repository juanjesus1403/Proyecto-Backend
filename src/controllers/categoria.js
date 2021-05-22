import {Categoria} from "../config/relaciones"

//CRUD

export const crearCategoria = async (req, res) =>{

    try{
        const validacion = new RegExp(/^[a-zA-Z ]+$/);
        if (validacion.test(req.body.categoriaNombre)){
            const nuevaCategoria = await Categoria.create(req.body);
            return res.status(201).json({ 
                success: true,
                content: nuevaCategoria,
                message: "Categoria creada correctamente",
            });
        }else{
            return res.status(400).json({
                success: false,
                content: null,
                message: "Nombre de Categoria incorrecto",
              });
        }
    }catch(error){
        return res.status(501).json({ 
            success: false,
            content: error,
            message: "Error al crear una nueva categoria",
        });
    }
};

export const listarCategoria = async (req, res) => {
    try {
      const categoria = await Categoria.findAll();
      return res.json({
        success: true,
        content: categoria,
        message: null,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        content: error,
        message: "Error al devolver Categoria",
      });
    }
  };