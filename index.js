const express=require('express');
const app=express();

const bodyParser=require('body-parser');

const {User}=require('./model/user');
const cookieParser=require('cookie-parser');

const config=require('./config/key');
const mongoose=require('mongoose');
mongoose.connect(config.mongoURI,{
    useNewUrlParser:true
}).then(()=>console.log('Database connected')).catch(err=>console.error(err));



app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json())
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.json({"hello ~":"Hi ~~"})
})

app.post('/api/users/register',(req,res)=>{
    const user=new User(req.body)
    //console.log("In post")

    user.save((err,userData)=>{
        if(err)return res.json({success:false,err})

        return res.status(200).json({
            success:true
        })

    })
    
})


app.listen(5000);


