import mongoose from  'mongoose';

export class Database{
    constructor (uri){
        this.uri=uri;
    }
    async connect (){
        try{
            mongoose.set("stricQuery,true");
        }
        catch(err){

        }
    }
}