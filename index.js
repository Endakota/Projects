var input = document.getElementById("input")
var add = document.getElementById("addBtn")

var tasks = document.getElementById("tasks")


add.addEventListener("click", ()=>{
    if(input.value.length > 3){
        let li = document.createElement("li")

        li.innerHTML = input.value;
        li.classList.add("task")
        input.value = ""
        let del = document.createElement("button")
        del.classList.add("delBtn")
        del.innerText = "🗑️";
        li.appendChild(del)

        tasks.appendChild(li)

        li.addEventListener("click", (e)=>{
            e.target.classList.toggle("crossed")
        })

        del.addEventListener("click", (e)=>{
            
            tasks.removeChild(e.target.parentNode)

        })
    }
    
})