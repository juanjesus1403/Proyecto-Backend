import { Persona } from "../config/relaciones";

export const registro = async (req, res) => {
  try {
    // vamos a utilizar la creacion en dos pasos
    const { password } = req.body;
    const nuevaPersona = Persona.build(req.body);
    // con esto ya hemos encriptado la contraseña de texto plano a un HASH
    nuevaPersona.setearPassword(password);
    await nuevaPersona.save();
    return res.status(201).json({
      success: true,
      content: nuevaPersona,
      message: "Usuario creado exitosamente",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      content: error,
      message: "Error al crear el usuario",
    });
  }
};

export const login = async (req, res)=>{
    const {email,password}=req.body
    try {
        const personaEncontrada = await Persona.findOne({
            where: {
                personaCorreo: email,
            }
        });
        if (!personaEncontrada) {
            return res.status(404).json({
                success: false,
                content: null,
                message: "Usuario no encontrado",
            })        
        }
        const resultado = personaEncontrada.validarPassword(password);
        if (resultado) {
            return res.json({
                success: true,
                content: personaEncontrada.generarJWT(),
                message: "Bienvenido",
            });
        }else {
            return res.status(400).json({
              success: false,
              content: null,
              message: "Contraseña incorrecta",
            });
        }
    }catch(error){
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error al hacer login",
        })
    }
}
