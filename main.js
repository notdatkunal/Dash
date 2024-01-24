let nav = document.getElementById("navigationBar");
let hero = document.getElementById("heroButton");

function shop(){

    console.log("hi");
    popup.showModal();
};


function search(){

    nav.style.display = 'none';
}



hero.addEventListener("click",
function (e){

    nav.style.display = 'block';
}
);
