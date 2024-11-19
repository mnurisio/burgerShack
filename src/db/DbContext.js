import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { BurgerSchema } from '../models/Burger'

class DbContext {
  Burgers = mongoose.model('Burger', BurgerSchema)
}

export const dbContext = new DbContext()
