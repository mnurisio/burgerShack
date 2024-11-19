import { dbContext } from "../db/DbContext"


class BurgerService{
    
    async getBurgerById(burgerId) {
        const burger = await dbContext.Burgers.findById(burgerId)
        return burger
    }
    
    async getBurgers() {
        const burgers = await dbContext.Burgers.find()
        return burgers
    }
    
    
    async createBurger(burgerData) {
        const burger = await dbContext.Burgers.create(burgerData)
        return burger
    }
}

export const burgerService = new BurgerService()