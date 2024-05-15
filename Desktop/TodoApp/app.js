
var userInput = document.getElementById("inpVal");
var gtdiv = document.getElementById("parent");



function addElement() {
    var para = document.createElement("P");
    var text = document.createTextNode(userInput.value);
    para.appendChild(text)
    // console.log(para);
    gtdiv.appendChild(para);


    var editBtn = document.createElement("BUTTON");
    
    var editText = document.createTextNode("Edit");
    
    editBtn.setAttribute("onclick","editList(this)")
    
    editBtn.appendChild(editText);
    
    var deleteBtn = document.createElement("BUTTON");
    
    var deleteText = document.createTextNode("Delete");
    
    deleteBtn.setAttribute("onclick","delList(this)")
    
    deleteBtn.appendChild(deleteText);
    
    para.appendChild(editBtn);
    
    para.appendChild(deleteBtn);

    userInput.value = ""

}


function deleteAll(){
    gtdiv.innerHTML = ""
}
function editList(btn){
    btn.parentNode.childNodes[0].nodeValue = prompt("edit value", btn.parentNode.childNodes[0].nodeValue);
}

function delList(btn){
    btn.parentNode.remove();
}
