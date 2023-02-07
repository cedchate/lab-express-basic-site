const express= require('express');
const app= express();

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs');

app.get('/', (req, res)=> {
    res.render('index', {title: 'home', css: ['main', 'mainP']});
})
app.get('/about', (req, res)=> {
    res.render('about', {title: 'about', css: ['main']});
})
app.get('/works', (req, res)=> {
    res.render('works', {title: 'works', css: ['main']});
})
app.get('/photos', (req, res)=> {
    res.render('photos', {title: 'photos', css: ['photo']});
})

app.listen(3000, ()=> {
    console.log(`App is live and 🏃 on http://localhost:3000/`)
})