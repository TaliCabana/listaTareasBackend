import Tarea from "../models/tareas.js";

/* const prueba = (req, res) => {
  console.log("Desde el controlador de prueba");
  res.send("Prueba desde el controlador");
}; */

export const crearTarea = async (req, res) => {
  try {
    // 1- Verificar que lleguen los datos válidos
    // 2- Pedir al modelo Tarea crear el objeto en la BD
    console.log(req.body);
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();
    res.status(201).json("La tarea fue creada exitosamente");
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al crear el tarea" });
  }
};
export const listarTareas = async (req, res) => {
  try {
    // 1- Buscar la collection de tareas
    const tareas = await Tarea.find();
    // 2- Enviar la respuesta al front
    res.status(200).json(tareas);
  } catch (error) {
    res.status(500).json({ mensaje: "Ocurrió un error al listar las tareas" });
  }
};

export const obtenerTarea = async (req, res) => {
  try {
    console.log(req.params.id);
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "No se encontó la tarea buscada" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al obtener la tarea" });
  }
  res.status(200).json(tareaBuscada);
};

export const borrarTareaPorId = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findByIdAndDelete(req.params.id);
    console.log(tareaBuscada);
    if (!tareaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "No se encontró la tarea buscada" });
    }
    res.status(200).json({ mensaje: "La tarea fue eliminada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al eliminar la tarea" });
  }
};

export const editarTareaPorId = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!tareaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "No se encontró la tarea buscada" });
    }
    res.status(200).json({ mensaje: "La tarea fue editada correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error, no se pudo editar la tarea." });
  }
};

/* export default prueba; */
