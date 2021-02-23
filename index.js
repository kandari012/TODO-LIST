const express=require("express");
const port=8000;

const db=require("./config/mongoose");
const List=require("./model/home");
const app=express();

app.set("view engine","ejs");
app.set("views","./views");

app.use(express.static("./assets"));

app.use(express.urlencoded());

//  home controller action
app.get("/",function(req,res)
{
List.find({},function(err,lists)
{
    if(err)
    {
        console.log("error while fetching data from DB");
        return ;
    }
    res.render("home",{title:"TO-DO-LIST",List:lists});
    return;
    })
});

//  delete controller action
    app.post("/delete-item",function(req,res)
    {
    let checked=req.body.checked;
    console.log(typeof(checked)=="string");
        if(checked!=undefined)
        {
            if(typeof(checked)=="string")
            {
                List.findByIdAndDelete(checked,function(err){
                    if(err)
                    {
                        console.log("error while deleting item");
                        return ;
                    }
                
                }); 
            }
            else
            {
                for (let i of checked) 
                { 
                    List.findByIdAndDelete(i,function(err){
                        if(err)
                        {
                            console.log("error while deleting item");
                            return ;
                        }
        
                    });
                }
            }
        }
        return res.redirect("back");
        
    });

//  add controller action
    app.post("/add-item",function(req,res)
    {
    List.create(
        {
        description:req.body.description,
        category:req.body.category,
        dueDate:req.body.dueDate
        }
        ,function(err,list)
        {
            if(err)
            {
                console.log("error while adding data to DB");
            return ;
            }
        res.redirect("back");
        return;
        })

    });

app.listen(port,function(err)
{
    if(err)
    {
        console.log("error while starting the server");
    }
    console.log("server up and running");

});
