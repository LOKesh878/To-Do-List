   const inputBox=document.getElementById('input-box');
   const listContainer=document.getElementById('list-container');

   function addTask(){
  if(inputBox.value===''){
    alert('Please enter a task');
  }
  else{
    let li=document.createElement('li');
    li.innerText=inputBox.value;
    listContainer.appendChild(li);
    let span=document.createElement('span');
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  inputBox.value='';
  saveData();
   }
   listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI");
    {
        e.target.classList.toggle('checked');
        saveData();

    }
    elseif(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }

   },false);
   function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
   }
function showList(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showList()