import mongoose from "mongoose"

const MONGOOD_URI = process.env.MONGOOB_URI
if(!MONGOOD_URI){
    throw new Error(
        "Error, no esta definido MONGOODD_URI"
    )
}

let cached = global.mongoose

if(!cached){
    cached = global.mongoose = {conn: null , promise :null } 

}

async function dbConnect (){
    if(cached.conn) {
        return cached.promise;
    }
    if( !cached.promise ){
        const opts ={
        bufferCommands: false
        }
        cached.promise=mongoose.connect(MONGOOD_URI, opts).then((mongoose) =>
        {
            return mongoose
        }
        )
    cached.conn = await cached.promise
    return cached.conn
}
}

export default dbConnect