let input = document.getElementById("ispolniteli");
let radio = document.getElementById("radio1");
let block = document.getElementById("block");
let block1 = document.getElementById("block1");


function push(){
    radio.classList.add("add");
}

function remove(){
    radio.classList.remove("add");
}


// Show block1
function show(){
    block1.classList.add("show");
    block.classList.add("hide");
}


//hide block1  and show block
function cancel(){
    block1.classList.remove("show");
    block.classList.remove("hide");
    document.querySelector(".input_text").value = '';
    document.querySelector(".input_text1").value = '';
    document.querySelector(".input_text2").value = '';
    document.querySelector("#textarea").value = '';
}