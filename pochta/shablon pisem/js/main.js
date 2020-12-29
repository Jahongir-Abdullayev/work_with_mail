let block = document.getElementById("block");
let block1 = document.getElementById("block1");

function show(){
    block1.classList.add("show");
    block.classList.add("hide");
}

function cancel(){
    block1.classList.remove("show");
    block.classList.remove("hide");
    document.querySelector(".input_text").value = '';
    document.querySelector("#textarea").value = '';
}