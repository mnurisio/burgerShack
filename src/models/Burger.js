import { Schema } from "mongoose";


export const BurgerSchema = new Schema({
    name: {type: String, maxLength: 50, required: true},
    price: {type: Number, maxLength: 10, required: true},
    
})