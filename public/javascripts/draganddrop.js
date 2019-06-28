const dragMe = document.getElementById("menu");
const opt = document.getElementById("options");
const down=document.getElementById('down');
const close=document.getElementById('close');


    

    opt.style.display='none';
    close.style.display='none';
    
    down.addEventListener('click',()=>{
        opt.style.display='block';
        close.style.display='block';
    })
    close.addEventListener('click',()=>{
        opt.style.display='none';
        close.style.display='none';
    })

    
    //begin 0 to drag
 let  dragOfX=0;
let  dragOfY=0;

const dragStart=(e)=>{
    dragOfX=e.pageX-dragMe.offsetLeft;
    dragOfY=e.pageY - dragMe.offsetTop;

    addEventListener('mousemove',dragMove);
    addEventListener('mouseup',dragEnd);
}

const dragMove=(e)=>{
    dragMe.style.left=(e.pageX-dragOfX)+ 'px';
    dragMe.style.top=(e.pageY -dragOfY) + 'px';
}
const dragEnd=()=>{
    removeEventListener('mousemove',dragMove);
    removeEventListener('mouseup',dragEnd);
}

dragMe.addEventListener('mousedown',dragStart);