const mongoose = require('mongoose');
const mongoURI="mongodb://satvikshrivastava28:satvik28@ac-vxyhuju-shard-00-00.hk3tifa.mongodb.net:27017,ac-vxyhuju-shard-00-01.hk3tifa.mongodb.net:27017,ac-vxyhuju-shard-00-02.hk3tifa.mongodb.net:27017/sfoodmern?ssl=true&replicaSet=atlas-zma18h-shard-0&authSource=admin&retryWrites=true&w=majority";

const mongoDB =async() => {
  await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
    if(err)console.log("---",err)

    else{
      console.log("connected");
      const fetched_data=await mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray( async function(err,data){

        const foodCategory=await mongoose.connection.db.collection("foodCategory");
        foodCategory.find({}).toArray(function(err,catData)
        {    if(err) console.log(err);
      
           else{
             global.food_items=data;
             global.foodCategory=catData;
            
           }

        })
        // if(err) console.log(err);
      
        // else{
        //   global.food_items=data;
          
        // }
      })
    }
  
});
}
module.exports=mongoDB;

  



