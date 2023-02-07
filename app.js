const express= require('express');
const app= express();

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs');

app.get('/', (req, res)=> {
    res.render('index', {title: 'home', css: 'mainP'});
})
app.get('/about', (req, res)=> {
    res.render('about', {title: 'about'});
})
app.get('/works', (req, res)=> {
    res.render('works', {title: 'works'});
})
app.get('/photos', (req, res)=> {
    res.render('photos', {title: 'photos'});
})

app.listen(3000, ()=> {
    console.log(`App is live and 🏃 on http://localhost:3000/`)
})