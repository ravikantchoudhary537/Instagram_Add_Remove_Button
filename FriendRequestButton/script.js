let add = document.getElementById('add');
let text = document.getElementById('text');
let flag = 1;

add.addEventListener('click', function(){
    if(flag == 1){
        text.innerHTML = "Friends";
        text.style.color = "green";
        add.innerHTML = "Remove";
        add.style.backgroundColor = "cadetblue";
        flag = 0;
    }
    else{
        text.innerHTML = "Stranger" ;
        text.style.color = "red";
        add.style.backgroundColor = "dodgerblue";
        add.innerHTML = "Add";
        flag = 1;
    }
})