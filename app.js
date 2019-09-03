const express = require('express');
const exphbs = require('express-handlebars');


// Loading express
const app = express();

// Handlebars Middlewares
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// pages routes
app.get('/', (req, res)=>{
    const title = 'Task-Book'
    res.render('index',{
        title: title
    })
});

app.get('/about',(req, res)=>{
    res.render('about')
});

app.get('/contact', (req, res)=>{
    res.render('contact');
})




// server
const port = 5000;

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
});