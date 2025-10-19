import Producto from "../models/productos.js";

const prueba = (req, res) => {
  console.log("Desde el controlador de prueba");
  res.send("Prueba desde el controlador");
};

export const crearProducto = async (req, res) => {
  try {
    // 1- Verificar que lleguen los datos válidos
    // 2- Pedir al modelo Tarea crear el objeto en la BD
    console.log(req.body);
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json("La tarea fue creada exitosamente");
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al crear el producto" });
  }
};
export const listarProductos = async (req, res) => {
  try {
    // 1- Buscar la collection de productos
    const productos = await Producto.find();
    // 2- Enviar la respuesta al front
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: "Ocurrió un error al listar las tareas" });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    console.log(req.param.id)
    const productoBuscado = await Producto.findById(req.params.id);
    if(!productoBuscado){
      return res.status(404).json({mensaje: "No se encontó la tarea buscada"})
    }
  } catch (error){
    console.error(error);
    res.status(500).json({mensaje: "Ocurrió un error al obtener el producto"})
  } res.status(200).json(productoBuscado)
}

export const borrarProductoPorId = async (req, res) => {
  try{
    console.log(req.params.id);
    const productoBuscado =await Producto.findById(req.params.id);
    if(!productoBuscado){
      return res.status(404).json({mensaje: "No se encontró el producto buscado"})
    }
    await Producto.findByIdAndDelete (req.params.id)
    res.status(200).json({mensaje: "La tarea fue eliminada correctamente"})
  } catch (error){
    console.error(error)
    res.status(500).json({mensaje: "Ocurrió un error al eliminar la tarea"})
  }
}

export const editarProductoPorId = async (req, res) => {
  try {
    const productoBuscado =await Producto.findById(req.params.id);
    if(!productoBuscado){
      return res.status(4040).json({mensaje: "No se encontró la tarea buscada"})
    } await Producto.findByIdAndUpdate(req.params.id.req.body)
    res.status(200).json({mensaje: "La tarea fue editada correctamente"})
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: "Ocurrió un error, no se pudo editar el producto"})
  }
}

export default prueba;
