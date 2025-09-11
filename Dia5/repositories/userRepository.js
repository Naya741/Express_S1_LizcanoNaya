export class userRepository{
    constructor(userModel){
        this.USer= userModel; // "user" es un atributo 
    }
    async create(data){
        return this.USer.create(data);
    }
    async findAll(){
        return this.USer.find();
    }
    async findByID (id){}
    async updateByID (id,data){}
    async deleteByID (id){}
    async findByemail (email){}
    



}