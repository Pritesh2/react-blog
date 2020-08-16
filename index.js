const express=require('express');
const app=express();

const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Pritesh:123abc@react-blog.j1zka.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true
}).then(()=>console.log('Database connected')).catch(err=>console.error(err));

app.get('/',(req,res)=>{
    res.send('Hello World')
});

//mongodb+srv://Pritesh:<password>@react-blog.j1zka.mongodb.net/<dbname>?retryWrites=true&w=majority
app.listen(5000);


