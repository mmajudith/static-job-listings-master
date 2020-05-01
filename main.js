'use strict';

// Variables Declarations
const filContainer = document.querySelector('.filter');
const clear = document.querySelector('.clear'); 

let filWrapper = document.querySelector('.fill');
let close = './images/icon-remove.svg';

let items = document.querySelectorAll('li');
let changeToArr = Array.from(items);


const generateTemp =  (data) =>{

    let html = `
                <ul class="con">
                  <li class="text">${data}</li>
                  <img src="${close}" alt="remove" class="remove">
                </ul> 
                `
    return html;
}

// filtered the roles class
changeToArr.filter(el =>{
    el.addEventListener('click', e =>{
        if(e.target.classList.contains('role')){
            filContainer.style.display = 'block';
            filWrapper.innerHTML += generateTemp(e.target.innerHTML);
        }
    });
});

// filtered the levels class
changeToArr.filter(el =>{
    el.addEventListener('click', e =>{
        if(e.target.classList.contains('level')){
            filContainer.style.display = 'block';
            filWrapper.innerHTML += generateTemp(e.target.innerHTML);
        }
    });
});

// filtered the languages class
changeToArr.filter(el =>{
    el.addEventListener('click', e =>{
        if(e.target.classList.contains('language')){
            filContainer.style.display = 'block';
            filWrapper.innerHTML += generateTemp(e.target.innerHTML);
        }
    });
});

// filtered the tools class
changeToArr.filter(el =>{
    el.addEventListener('click', e =>{
        if(e.target.classList.contains('tool')){
            filContainer.style.display = 'block';
            filWrapper.innerHTML += generateTemp(e.target.innerHTML);
        }
    });
});



clear.addEventListener('click', ()=>{
    filContainer.style.display = 'none';
    filWrapper.innerHTML = '';
    
});



filWrapper.addEventListener('click', e =>{

     if(e.target.classList.contains('remove')){
          e.target.parentElement.remove();
    }
    
});


