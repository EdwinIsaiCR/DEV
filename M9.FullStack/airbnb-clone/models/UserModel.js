import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        name: {type: String, required: false},
        password: {type: String, required: true},
        role: {type: Boolean, required:false, default: true},
       },
       { timestamps: true  // sirve para saber cuando un producto (dato) fue creado
})

export default mongoose.models.UserModel || mongoose.model('UserModel', UserSchema, 'user')