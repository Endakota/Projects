var input = document.getElementById("input")
var add = document.getElementById("addBtn")

var tasks = document.getElementById("tasks")

if(Object.keys(localStorage).length == 2){
    for(let el of JSON.parse(localStorage["marked"])["active"]){
        if(el.length > 3){ 
            let li = document.createElement("li")
            li.innerHTML = el;
            li.classList.add("task") 
            li.classList.add("marked")  
            btns(li, tasks,false)
            btns(li, tasks,true)
            tasks.appendChild(li)
            li.addEventListener("click", (e)=>{
                e.target.classList.toggle("crossed")
                update(tasks)
            })
        } 
    }
    for(let el of JSON.parse(localStorage["marked"])["crossed"]){
        if(el.length > 3){
            let li = document.createElement("li")
            li.innerHTML = el;
            li.classList.add("task")
            li.classList.add("marked") 
            li.classList.add("crossed")
            input.value = ""
            btns(li, tasks,false)
            btns(li, tasks,true)
            tasks.appendChild(li)
            li.addEventListener("click", (e)=>{
                e.target.classList.toggle("crossed")
                update(tasks)
            })
        } 
    }

    for(let el of JSON.parse(localStorage["tasks"])["active"]){
        if(el.length > 3){ 
            let li = document.createElement("li")
            li.innerHTML = el;
            li.classList.add("task")   
            btns(li, tasks,false)
            btns(li, tasks,true)
            tasks.appendChild(li)
            li.addEventListener("click", (e)=>{
                e.target.classList.toggle("crossed")
                update(tasks)
            })
        } 
    }
    for(let el of JSON.parse(localStorage["tasks"])["crossed"]){
        if(el.length > 3){
            let li = document.createElement("li")
            li.innerHTML = el;
            li.classList.add("task")
            li.classList.add("crossed")
            input.value = ""
            btns(li, tasks,false)
            btns(li, tasks,true)
            tasks.appendChild(li)
            li.addEventListener("click", (e)=>{
                e.target.classList.toggle("crossed")
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
        btns(li, tasks,false)
        btns(li, tasks,true)

        tasks.appendChild(li)

        update(tasks)
        
        li.addEventListener("click", (e)=>{
            e.target.classList.toggle("crossed")
            update(tasks)
        })     
    }
    
})
document.getElementById("reset").addEventListener("click", ()=>{
    tasks.innerHTML = ""
    localStorage["tasks"]["crossed"] = ""

    for(let el of localStorage["active"].split(",")){
        if(el.length > 3){
            let li = document.createElement("li")

            li.innerHTML = el;
            li.classList.add("task")
            
            
            btns(li, tasks,false)
            btns(li, tasks,true)

            tasks.appendChild(li)
            update(tasks)
            li.addEventListener("click", (e)=>{
                e.target.classList.toggle("crossed")
                update(tasks)
            })

            
        }
        
    }

})

function btns(li,tasks,isDel){
    let text, className
    if(isDel){
        text = "🗑️"
        className = "delBtn"
    }else{
        text = "⭐"
        className = "mark"
    }
    let btn = document.createElement("button")
    btn.classList.add(className)
    btn.innerText = text;
    li.appendChild(btn)

    if(isDel){
        btn.addEventListener("click", (e)=>{   
            tasks.removeChild(e.target.parentNode)
            update(tasks)
        })
    }else{
        btn.addEventListener("click", (e)=>{   
            li.classList.toggle("marked")
            update(tasks)
        })
    }
    

}
function update(tasks){
    let active = []
    let crossed = []
    let marked = {
        "active": [],
        "crossed": []
    }
    for(let el of tasks.children){
        str = el.innerHTML.split("<button")[0]
        
        if(str.length > 3){
            if(el.classList.contains("crossed")){
                crossed.push(str) 
            }else if(el.classList.contains("marked")){
                if(el.classList.contains("crossed")){
                    marked.crossed.push(str)
                }else{
                    marked.active.push(str)
                }
            }else{
                active.push(str)
            }
        }  
    }
    console.log(marked)
    obj = {
        "active": active,
        "crossed": crossed
    }
    localStorage.setItem("tasks", JSON.stringify(obj))
    localStorage.setItem("marked", JSON.stringify(marked))
}