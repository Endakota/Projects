var input = document.getElementById("input")
var add = document.getElementById("addBtn")

var tasks = document.getElementById("tasks")

if(Object.keys(localStorage).length == 2){
    for(let el of localStorage["active"].split(",")){
        if(el.length > 3){
            let li = document.createElement("li")

            li.innerHTML = el;
            li.classList.add("task")
            
            let del = document.createElement("button")
            del.classList.add("delBtn")
            del.innerText = "🗑️";
            li.appendChild(del)

            tasks.appendChild(li)

            li.addEventListener("click", (e)=>{
                e.target.classList.toggle("crossed")
                update(tasks)
            })

            del.addEventListener("click", (e)=>{
                
                tasks.removeChild(e.target.parentNode)
                update(tasks)
            })
        }
        
    }
    for(let el of localStorage["crossed"].split(",")){
        if(el.length > 3){
            let li = document.createElement("li")

            li.innerHTML = el;
            li.classList.add("task")
            li.classList.add("crossed")
            input.value = ""
            let del = document.createElement("button")
            del.classList.add("delBtn")
            del.innerText = "🗑️";
            li.appendChild(del)

            tasks.appendChild(li)

            li.addEventListener("click", (e)=>{
                e.target.classList.toggle("crossed")
                update(tasks)
            })

            del.addEventListener("click", (e)=>{
                tasks.removeChild(e.target.parentNode)
                update(tasks)
            })
        }
        
    }

}

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

        update(tasks)
        
        li.addEventListener("click", (e)=>{
            e.target.classList.toggle("crossed")
            update(tasks)
        })

        del.addEventListener("click", (e)=>{
            
            tasks.removeChild(e.target.parentNode)
            update(tasks)
        })
    }
    
})
document.getElementById("reset").addEventListener("click", ()=>{
    tasks.innerHTML = ""
    localStorage.removeItem("crossed")

    for(let el of localStorage["active"].split(",")){
        if(el.length > 3){
            let li = document.createElement("li")

            li.innerHTML = el;
            li.classList.add("task")
            
            let del = document.createElement("button")
            del.classList.add("delBtn")
            del.innerText = "🗑️";
            li.appendChild(del)

            tasks.appendChild(li)
            update(tasks)
            li.addEventListener("click", (e)=>{
                e.target.classList.toggle("crossed")
                update(tasks)
            })

            del.addEventListener("click", (e)=>{
                
                tasks.removeChild(e.target.parentNode)
                update(tasks)
            })
        }
        
    }

})
function update(tasks){
    let active = []
    let crossed = []
    for(let el of tasks.children){
        str = el.innerHTML.substring(0,el.innerHTML.length - 35)
        if(str.length > 3){
            if(el.classList.contains("crossed")){
                crossed.push(str)
            }else{
                active.push(str)
            }
        }
        
    }
    localStorage.setItem("active", active)
    localStorage.setItem("crossed", crossed)
}