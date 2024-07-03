const inputContainer=document.querySelector('.input-container');
const btn=document.querySelector('.btn');

function showNotes(){
    inputContainer.innerHTML = localStorage.getItem('notes');
}
showNotes()
function upStorage(){
    localStorage.setItem('notes',inputContainer.innerHTML);

}
upStorage()



 function addNotes(){
    let para =document.createElement('p');
    let img=document.createElement('img');
    img.setAttribute('src','https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-trash-icon-png-image_4152654.jpg')
    img.classList.add('del')
    para.setAttribute('contenteditable','true');
para.classList.add('input-box')
inputContainer.appendChild(para).appendChild(img);



}

btn.addEventListener('click',addNotes);

inputContainer.addEventListener('click',(e)=>{
if(e.target.tagName === 'IMG'){
    e.target.parentElement.remove()
    upStorage()
} else if(e.target.tagName==="P"){
    notes =document.querySelectorAll('.input-box');
    notes.forEach(nt =>{
        nt.onkeyup = function(){
            upStorage()
        }
    })
}
})




