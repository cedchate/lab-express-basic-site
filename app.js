const express= require('express');
const app= express();

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs');

app.get('/', (req, res)=> {
    res.render('index');
})
app.get('/about', (req, res)=> {
    res.render('about');
})
app.get('/works', (req, res)=> {
    res.render('works');
})
app.get('/photos', (req, res)=> {
    res.render('photos');
})

app.listen(3000, ()=> {
    console.log(`App is live and 🏃 on http://localhost:3000/`)
})