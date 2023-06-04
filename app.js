var inputVal = document.getElementById('inp')
var list = document.getElementById("liParent");

function delRow(btn){
    console.log(btn.parentNode);
    btn.parentNode.remove();
}

function editRow(btn){
    console.log(btn.parentNode);
    btn.parentNode.firstChild.nodeValue = prompt("Enter your new Word");
}

function addtask(){
    var li = document.createElement("li");
    var lival = document.createTextNode(inputVal.value);
    li.appendChild(lival);
    list.appendChild(li);
    inputVal.value = "";

    var del = document.createElement("Button")
    var deltext = document.createTextNode("Delete")
    del.appendChild(deltext);
    del.setAttribute("class", "btn")
    del.setAttribute("onclick", "delRow(this)");
    li.appendChild(del);



    var editbtn = document.createElement('Button')
    var edittext = document.createTextNode('EDIT')
    editbtn.appendChild(edittext);
    editbtn.setAttribute("class", "btn")
    editbtn.setAttribute('onclick', 'editRow(this)')
    li.appendChild(editbtn);
}