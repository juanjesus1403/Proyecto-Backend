import {reserva} from "../config/relaciones";

export const crearReserva = async (req,res) =>{
  try {
    const {reservaCodigo} = req.body;
    const reservaUnica = await reserva.findOne({
      where:{
        reservaCodigo,
      },
    });
    if(reservaUnica){
      return res.status(400).json({
        success: false,
        content: null,
        message: "La reserva ya ha sido creada",
      });
    }
    const nuevaReserva = await Reserva.create(req.body);
    res.status(201).json({
      success: true,
      content: nuevaReserva,
      message: "Reserva creada exitosamente",
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      content: error,
      message: "Error al crear la categoria",
    });
  }
};
export const verReservas = async (req,res) => {
  try{
    const reservas = await Reserva.findAll();
    return res.json({
      success: true,
      content: reservas,
      message: null,
    });
  }catch(error){
    return res.status(500).json({
      success: false,
      content: error,
      message: "Error al ver las reservas",
    });
  }
};