const mongoose=require("mongoose");

const todoListSchema=new mongoose.Schema(
    {
    description:
    {
        type:String,
        required:true
    },
    category:
    {
        type:String,
        required:true
    },
    dueDate:
    {
        type:String,
        required:true
    }
    
        }
);

const List=mongoose.model("TODO_LIST",todoListSchema);                                  //name in db =contact (collection name)  contact will be defined by schema contactSchema

module.exports=List;
