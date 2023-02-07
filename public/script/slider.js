const imgSrc= [
    "/img/6XUA3MOK45FHZNLYNL2LWGBYGI.jpg",
    "/img/220px-Judit_The_Look_Polgar.jpg",
    "/img/Judit_Polgar.jpg",
    "/img/Judit-photo1_602x433.jpg"
]    
const divElem= document.querySelector('#slider');
const btnElem= document.querySelector('#change');
const photoElem= document.querySelector('#photo');
let i=0
btnElem.addEventListener('click', ()=> {
    console.log('hey')
    if(i<imgSrc.length-1){
        i++;
    }else {
        i=0;
    }
    photoElem.src= imgSrc[i];
})



