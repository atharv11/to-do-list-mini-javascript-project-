const InputBox = document.getElementById("input_box");
const listcontainer = document.getElementById("list-container");
function addtask(){
    if(InputBox.value ==='')
    {
        alert("u must write something");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= InputBox.value;
        listcontainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    InputBox.value="";
    savedata();
}
listcontainer.addEventListener("click",function(e){
if(e.target.tagName === "LI" ){
    e.target.classList.toggle("checked");
    savedata();
}
else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();  
        savedata();
}
},false);

function savedata()
{
    localStorage.setItem('data', listcontainer.innerHTML)
}
function showtask()
{
    listcontainer.innerHTML = localStorage.getItem('data');
}
showtask();
