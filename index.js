 var input=document.getElementById("inp");
 var text=document.querySelector(".text")

 function add(){
    if (input.value==""){
        alert("Please Enter task")
    } else{
       
        let newEle=document.createElement("ul");
        newEle.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle); // add text into text ul list 
        input.value=""; // clear the input box text data  
        newEle.querySelector("i").addEventListener("click", remove);
        function remove(){
            newEle.remove()
        }
    }
 }
