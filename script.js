let persons =[]
function createItem(){
    const pName = document.getElementById ("name").value;
    const sName = document.getElementById("scname").value;
    const imgUrl = document.getElementById ("img").value;
    persons.push({pName,sName,imgUrl})
    listPersons ();
}

function listPersons (){
    const listPersons = document.getElementById ("view")
    let div = "";
    persons.forEach((person, index)=>{
           div += `<div class="record">
                  <h1>${person.pName}</h1>
                  <img src="${person.imgUrl}"></img>
                <span>${person.sName}</span> 
                <button onclick="updatePerson(${index})">UPDATE</button>
                <button onclick="deletePerson(${index})">DELETE</button>
                 </div>`
    });
    listPersons. innerHTML = div;
}
function updatePerson(index){
    const uname = prompt("Name",persons[index].pName);
    const usName = prompt("Scientific name",persons[index].sName);
    const uimgUrl = prompt("Image URL",persons[index].imgUrl);
    if(uname){
        persons[index].pName = uname;
    }
    if(usName){
        persons[index].sName = usName;
    }
    if(uimgUrl){
        persons[index].imgUrl = uimgUrl;
    }
   listPersons();
}

function deletePerson(index){
    persons.splice(index,1)
    listPersons();
}




