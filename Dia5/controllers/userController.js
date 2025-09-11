export class UserController{
    constructor(userService){
        this.service=userService;
    }
    create = async (req,res)=> {};
    list = async (req,res)=> {};
    get = async (req,res)=> {}; //obtener por ID desde el EndPoint
    update= async (req,res)=> {};
    delete = async (req,res)=> {};
}