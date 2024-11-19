import { burgerService } from "../services/BurgerService";
import BaseController from "../utils/BaseController";


export class BurgerController extends BaseController{
    constructor(){
        super('api/burgers')
        this.router
        .get('', this.getBurgers)
        .get('/:burgerId', this.getBurgerById)
        .post('', this.createBurger)
    }


   async getBurgerById(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const burger = await burgerService.getBurgerById(burgerId)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async getBurgers(request, response, next){
        try {
            const burgers = await burgerService.getBurgers()
            response.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async createBurger(request, response, next){
        try {
            const burgerData = request.body
            const burger = await burgerService.createBurger(burgerData)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }
}