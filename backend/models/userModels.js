import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    passowrd: { type: String, require: true },

    date: { type: Date, default: Date.now },


});

export default mongoose.model("User", userSchema);