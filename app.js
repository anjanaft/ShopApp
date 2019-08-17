const Express=require('express');
var app=new Express();
 
sam=
[{
    name:"Samsung Galaxy A50 ",
    price:" ₹18,490.00",
    img:"./image/sam.jpg"
     
},{
    name:"Samsung Galaxy M30 ",
    price:" ₹13,990.00 ",
    img:"./image/sam2.jpg"
},
{
name:"Samsung Galaxy M40  ",
    price:" ₹19,990.00 ",
    img:"./image/sam3.jpg"
},
{
name:"Samsung Galaxy M10  ",
    price:" ₹7,990.00 ",
    img:"./image/sam4.jpg"
},
{
    name:"Samsung Galaxy A70",
        price:" ₹28,990.00 ",
        img:"./image/sam5.jpg"
    }

];

redmi=
[{
    name:"Redmi Mi Note 6 Pro ",
    price:"₹ 12,999.00",
    im:"./image/red.jpg"
     
},{
    name:"Redmi 6 Pro ",
    price:" ₹ 9,999.00  ",
    im:"./image/red2.jpg"
},
{
name:"Redmi Note 5 Pro ",
    price:" ₹ 17,900.00 ",
    im:"./image/red3.jpg"
},
{
name:"Redmi Y3 ",
    price:"₹ 11,999.00",
    im:"./image/red4.jpg"
},
{
    name:"Redmi 7 ",
        price:" ₹ 8,499.00 ",
        im:"./image/red5.jpg"
    }

];

len=[{
    name:"Lenovo K9",
    price:"₹ 6,815.00",
    im:"./image/len.jpg"
     
},{
    name:"Lenovo K8 Plus ",
    price:"₹7699 ",
    im:"./image/len2.jpg"
},
{
name:"Lenovo A5 32  ",
    price:" ₹6299 ",
    im:"./image/len3.jpg"
},
{
name:"Lenovo Vibe K5 Plus",
    price:"₹ 4,799.00",
    im:"./image/len4.jpg"
},
{
    name:"Lenovo K6 Power",
        price:" ₹ 6,899.00 ",
        im:"./image/len5.jpg"
    }

];


real=[{
    name:"Realme U1",
    price:"₹ 8,999.00",
    im:"./image/real.jpg"
     
},{
    name:"Realme 3 Pro",
    price:"₹ 12,999.00",
    im:"./image/real2.jpg"
},
{
name:"Realme X ",
    price:" ₹ 17,994.00",
    im:"./image/real3.jpg"
},
{
name:"Realme C2",
    price:"₹ 7,444.00",
    im:"./image/real4.jpg"
},
{
    name:"Realme 3i",
        price:" ₹ 9,480.00 ",
        im:"./image/real5.jpg"
    }

];

nav=[{
    link:"/category",
    title:"category"

}
// {
    
//         link:"/author",
//         title:"author"
// }
];


app.set('view engine','ejs');
app.use(Express.static(__dirname+"/public"));

app.get('/index',(req,res)=>{
    res.render('index',{nav:nav,title:"Online Shopping"});
});
app.get('/category',(req,res)=>{
    res.render('c1',{nav:nav,title:"Category"});;
});
app.get('/sam',(req,res)=>{
    res.render('sam',{nav:nav,title:"Samsung"});;
});
app.get('/redmi',(req,res)=>{
    res.render('redmi',{nav:nav,title:"Redmi"});;
});
app.get('/len',(req,res)=>{
    res.render('len',{nav:nav,title:"Lenovo"});;
});
app.get('/real',(req,res)=>{
    res.render('real',{nav:nav,title:"Realme"});;
});


// app.get('/author',(req,res)=>{
//     res.render('author',{nav:nav,title:"author",author:author});
// });
app.get('/buysam/:id',(req,res)=>{

    const x=req.params.id;
    res.render('buysam',{nav:nav,title:"Samsung","sam":sam[x]});
});
app.get('/buyredmi/:id',(req,res)=>{

    const y=req.params.id;
    res.render('buyredmi',{nav:nav,title:"Redmi","redmi":redmi[y]});
});

app.get('/buylen/:id',(req,res)=>{

    const a=req.params.id;
    res.render('buylen',{nav:nav,title:"Lenovo","len":len[a]});
});

app.get('/buyreal/:id',(req,res)=>{

    const b=req.params.id;
    res.render('buyreal',{nav:nav,title:"Realme","real":real[b]});
});



app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running on http://localhost:3000/index")
    });