$(document).ready(function(){
    const elOne = document.getElementById('element1');

    elOne.addEventListener('mousemove', (e) => {
        console.log("Mouse is on "+e.target.id+" at position: x"+e.pageX+", y"+e.pageY)
    });
});