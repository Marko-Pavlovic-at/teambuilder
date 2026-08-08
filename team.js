const addBtn = document.querySelector("#addBtn");
const memberInput = document.querySelector("#memberInput");
const output = document.querySelector("#output");


console.log(addBtn, memberInput);

let members = [];



addBtn.addEventListener("click", function(){
    if (!memberInput.value.match(/^[a-zäöü]+$/i)) return;
    members.push(memberInput.value);
    render();
    
})

function render(){

    if (members.length === 0){
        output.textContent = "Build your Wuwa Team"
    }
    else{ 
    output.innerHTML = ""
    members.forEach((member, index) =>{
        
        const teamBox = document.createElement("div");
        teamBox.className = "teamBox";
        output.append(teamBox);
        const name = document.createElement("p");
        name.textContent = member;
        teamBox.append(name);
        const delBtn = document.createElement("button");
        delBtn.className = "delBtn";
        delBtn.textContent = "remove"
        teamBox.append(delBtn);
        
        delBtn.addEventListener("click", function(){
            console.log(index);
            members = members.filter((member, i) => i !== index);
            render();
           
        })
    })}

}

render();