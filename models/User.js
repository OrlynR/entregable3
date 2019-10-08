const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    email:{ type:String, required: true },
    password:{ type:Number, required: true },
    date:{ type:Date,required: Date.now}
})

UserSchema.methods.encryptPassword = async(password) => {
    const salt= await bcrypt.genSalt(10);
    const hash= bcrypt.hash(password,salt);

    return hash;
};

UserSchema.method.matchPassword =async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = model ('User', UserSchema);