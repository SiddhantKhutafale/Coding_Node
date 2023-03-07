const { urlencoded } = require('body-parser');
const express=require('express');
const path=require('path');
const port=8000;

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList = [
    {
        names:"Siddhant",
        phone:"111111111"
    },
    {
        names:"Om",
        phone:"222222222"
    },
    {
        names:"Sanjay",
        phone:"222233322"
    }
];

app.get('/',function(req,res){
    
    return res.render('home',{
        title:"My contacts List",
        contact_list: contactList
    });
})

app.get('/practice',function(req,res){
    
    return res.render('practice',{title:"My practice playground"});
})

app.post('/create-contact',function(req,res){
   contactList.push({
    names:req.body.names,
    phone:req.body.phone
   });
   return res.redirect('/');
})




app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);

    }
    console.log('Yup!my sever is running on port:',port);


})




