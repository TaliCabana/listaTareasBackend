import mongoose, { Schema } from "mongoose";

const tareasSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, "La descripción es obligatoria"],
        minlength: [3, "La descripción debe tener al menos 3 caracteres"],
        maxlength: [100, "La descripción no puede superar los 100 caracteres"],
        trim: true
    },
    completada:{
        type: Boolean,
        default: false,
    },
}, {timestamps: true}
)

const Tarea = mongoose.model("tarea", tareasSchema)

export default Tarea