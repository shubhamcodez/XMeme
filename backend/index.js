const express = require('express');
const cors = require('cors');
const app = express();
const monk = require('monk');
const ratelimit = require('express-rate-limit');
const db = monk('localhost/memes_db');
const memes_data = db.get('memes_db'); 
//const port = Process.env.PORT || 8081 ;
app.use(cors());
app.use(express.json());

app.listen(8081 ,()=>{
    console.log("Works")
})

app.get('/memes',async(req,res)=>{
    try{
     memes_data
        .find()
        .then(memes_data=>{
            res.json(memes_data);
        });
    }catch(err){
        res.send(err);}    
});


function isValid(data){return data.name && data.name.toString().trim() != '';}
var _idd = 1;
app.use(ratelimit({windowMs:10*1000,max:5,}));
app.post('/memes',(req,res)=>{
    if(isValid(req.body))
    {     
        const data = {    
        id : _idd++,
        name : req.body.name.toString(),
        url : req.body.url.toString(),
        caption : req.body.caption.toString(),
        };
        memes_data
        .insert(data)
        .then(createdMeme =>{
            res.json(createdMeme);
        });
    }
    else
    {res.status(422);
     res.json({message:"Invalid submission!"});       
    }
});

app.get('/memes/:_id',async(req,res)=>{
    try{
        const meme = await memes_data.find(req.params._id)
        res.json(meme);
    }catch(err)
        {res.send('Error' + err);}
});

function isValid_update(data){
    return data.url.toString().trim() != null || data.caption.toString().trim() != null;}

app.patch('/memes/:_id',async(req,res)=>{
  try{  
        if(req.body.url != null)
        {const url_data = req.body.url;}
        else{url_data="https://i.imgflip.com/11fjj7.jpg"}

        if(req.body.caption != null)
        {const caption_data = req.body.caption;}
        else{caption_data="There seems to be a problem rn"}
        
        const update = await memes_data.findOneAndUpdate({_id:req.params._id},
        {$set:{url:url_data,caption:caption_data}});
        
        if(!update) throw Error(404);
        res.json("Updated");
    }catch(err)
        {res.send(err);}
});        