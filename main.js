'use strict';

const filContainer = document.querySelector('.filter');
const clear = document.querySelector('.clear'); 

let filWrapper = document.querySelector('#fill');
let close = './images/icon-remove.svg';

let items = document.querySelectorAll('li');
let changeToArr = Array.from(items);

const generateTemp =  (data) =>{
        
    let html = `<span class="text">${data}</span> 
                <img src="${close}" alt="remove" class="remove">
                
                `
    return html;
}

let filteredRoles = changeToArr.filter(item =>{
    item.addEventListener('click', e =>{
        if(e.target.classList.contains('role')){
            filContainer.style.display = 'block';
            filWrapper.innerHTML += generateTemp(e.target.innerHTML);
        }
    });
   
});

let filteredLevel = changeToArr.filter(item =>{
    item.addEventListener('click', e =>{
        if(e.target.classList.contains('level')){
            filContainer.style.display = 'block';
            filWrapper.innerHTML += generateTemp(e.target.innerHTML);
        }
    });
});

let filteredLang = changeToArr.filter(item =>{
    item.addEventListener('click', e =>{
        if(e.target.classList.contains('language')){
            filContainer.style.display = 'block';
            filWrapper.innerHTML += generateTemp(e.target.innerHTML);
        }
    });
});

let filteredtools = changeToArr.filter(item =>{
    item.addEventListener('click', e =>{
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
