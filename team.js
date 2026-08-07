const addBtn = document.querySelector("#addBtn");
const memberInput = document.querySelector("#memberInput");
const output = document.querySelector("#output");

console.log(addBtn, memberInput);

let members = [];

addBtn.addEventListener("click", function(){
    members.push(memberInput.value);
    render();
    
})

function render(){
    output.innerHTML = ""
    //output.innerHTML += memberInput.value;
    members.forEach((member) =>{
        
        output.innerHTML += `<p>${member}</p>`
    })

}

render();