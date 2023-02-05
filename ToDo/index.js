var input = document.getElementById("input")
var add = document.getElementById("addBtn")
var tasks = document.getElementById("tasks")

var marked = document.getElementById("marked")
var all = document.getElementById("all")

tasks.addEventListener("contextmenu", (e)=>{
    e.preventDefault()
    console.log(e.target)
})

all.addEventListener("click", ()=>{
    tasks.innerHTML = ""
    marked.classList.remove("active")
    for(let el of JSON.parse(localStorage["marked"])["active"]){
        if(el.length > 3){ 
            let li = document.createElement("li")

            let p = document.createElement("p")
            p.innerText = el
            li.appendChild(p);
            li.classList.add("task") 
            li.classList.add("marked")  
            btns(li, tasks,false)
            btns(li, tasks,true)



            tasks.appendChild(li)
            p.addEventListener("click", (e)=>{
                p.classList.toggle("crossed")
                update(tasks)
            })
        } 
    }
    for(let el of JSON.parse(localStorage["marked"])["crossed"]){
        if(el.length > 3){
            let li = document.createElement("li")
            let p = document.createElement("p")
            p.innerText = el
            li.appendChild(p);
            li.classList.add("task")
            li.classList.add("marked") 
            p.classList.add("crossed")
            input.value = ""
            btns(li, tasks,false)
            btns(li, tasks,true)
            tasks.appendChild(li)
            p.addEventListener("click", (e)=>{
                p.classList.toggle("crossed")
                update(tasks)
            })
        } 
    }
    for(let el of JSON.parse(localStorage["tasks"])["active"]){
        if(el.length > 3){ 
            let li = document.createElement("li")
            let p = document.createElement("p")
            p.innerText = el
            li.appendChild(p);
            li.classList.add("task")   
            btns(li, tasks,false)
            btns(li, tasks,true)
            tasks.appendChild(li)
            p.addEventListener("click", (e)=>{
                p.classList.toggle("crossed")
                update(tasks)
            })
        } 
    }
    for(let el of JSON.parse(localStorage["tasks"])["crossed"]){
        if(el.length > 3){
            let li = document.createElement("li")
            let p = document.createElement("p")
            p.innerText = el
            li.appendChild(p);
            li.classList.add("task")
            p.classList.add("crossed")
            input.value = ""
            btns(li, tasks,false)
            btns(li, tasks,true)
            tasks.appendChild(li)
            p.addEventListener("click", (e)=>{
                p.classList.toggle("crossed")
                update(tasks)
            })
        } 
    }
    
})
marked.addEventListener("click", ()=>{
    marked.classList.add("active")
    tasks.innerHTML = ""
    for(let el of JSON.parse(localStorage["marked"])["active"]){
        if(el.length > 3){ 
            let li = document.createElement("li")

            let p = document.createElement("p")
            p.innerText = el
            li.appendChild(p);
            li.classList.add("task") 
            li.classList.add("marked")  
            btns(li, tasks,false)
            btns(li, tasks,true)



            tasks.appendChild(li)
            p.addEventListener("click", (e)=>{
                p.classList.toggle("crossed")
                update(tasks)
            })
        } 
    }
    for(let el of JSON.parse(localStorage["marked"])["crossed"]){
        if(el.length > 3){
            let li = document.createElement("li")
            let p = document.createElement("p")
            p.innerText = el
            li.appendChild(p);
            li.classList.add("task")
            li.classList.add("marked") 
            p.classList.add("crossed")
            input.value = ""
            btns(li, tasks,false)
            btns(li, tasks,true)
            tasks.appendChild(li)
            p.addEventListener("click", (e)=>{
                p.classList.toggle("crossed")
                update(tasks)
            })
        } 
    }
})


if(Object.keys(localStorage).length == 2){
    for(let el of JSON.parse(localStorage["marked"])["active"]){
        if(el.length > 3){ 
            let li = document.createElement("li")

            let p = document.createElement("p")
            p.innerText = el
            li.appendChild(p);
            li.classList.add("task") 
            li.classList.add("marked")  
            btns(li, tasks,false)
            btns(li, tasks,true)



            tasks.appendChild(li)
            p.addEventListener("click", (e)=>{
                p.classList.toggle("crossed")
                update(tasks)
            })
        } 
    }
    for(let el of JSON.parse(localStorage["marked"])["crossed"]){
        if(el.length > 3){
            let li = document.createElement("li")
            let p = document.createElement("p")
            p.innerText = el
            li.appendChild(p);
            li.classList.add("task")
            li.classList.add("marked") 
            p.classList.add("crossed")
            input.value = ""
            btns(li, tasks,false)
            btns(li, tasks,true)
            tasks.appendChild(li)
            p.addEventListener("click", (e)=>{
                p.classList.toggle("crossed")
                update(tasks)
            })
        } 
    }

    for(let el of JSON.parse(localStorage["tasks"])["active"]){
        if(el.length > 3){ 
            let li = document.createElement("li")
            let p = document.createElement("p")
            p.innerText = el
            li.appendChild(p);
            li.classList.add("task")   
            btns(li, tasks,false)
            btns(li, tasks,true)
            tasks.appendChild(li)
            p.addEventListener("click", (e)=>{
                p.classList.toggle("crossed")
                update(tasks)
            })
        } 
    }
    for(let el of JSON.parse(localStorage["tasks"])["crossed"]){
        if(el.length > 3){
            let li = document.createElement("li")
            let p = document.createElement("p")
            p.innerText = el
            li.appendChild(p);
            li.classList.add("task")
            p.classList.add("crossed")
            input.value = ""
            btns(li, tasks,false)
            btns(li, tasks,true)
            tasks.appendChild(li)
            p.addEventListener("click", (e)=>{
                p.classList.toggle("crossed")
                update(tasks)
            })
        } 
    }
}
document.addEventListener("keypress", (e)=>{
    if(e.keyCode == 13){
        if(input.value.length > 3){
            let li = document.createElement("li")
            let p = document.createElement("p")
            p.innerText = input.value
            li.appendChild(p);
          
            li.classList.add("task")
            input.value = ""
            btns(li, tasks,false)
            btns(li, tasks,true)
            // moveBtns(e)
            tasks.appendChild(li)
    
            update(tasks)
            
            p.addEventListener("click", (e)=>{
                p.classList.toggle("crossed")
                update(tasks)
            })     
        }
    }
})
add.addEventListener("click", (e)=>{
    if(input.value.length > 3){
        let li = document.createElement("li")

        let p = document.createElement("p")
        p.innerText = input.value
        li.appendChild(p);
        li.classList.add("task")
        input.value = ""
        btns(li, tasks,false)
        btns(li, tasks,true)
        // moveBtns(e)
        tasks.appendChild(li)

        if(marked.classList.contains("active")){
            li.classList.toggle("marked")
        }

        update(tasks)
        
        p.addEventListener("click", (e)=>{
            p.classList.toggle("crossed")
            update(tasks)
        })     
    }
    
})
document.getElementById("reset").addEventListener("click", ()=>{
    tasks.innerText = ""
   
    localStorage.clear()
 

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
        str = el.children[0].innerText
        console.log(str)
        if(str.length > 3){
            if(el.classList.contains("marked")){
                if(el.children[0].classList.contains("crossed")){
                    marked.crossed.push(str)
                }else{
                    marked.active.push(str)
                }
            }else if(el.children[0].classList.contains("crossed")){
                crossed.push(str) 
            }else{
                active.push(str)
            }
        }  
    }
    
    obj = {
        "active": active,
        "crossed": crossed
    }
    localStorage.setItem("tasks", JSON.stringify(obj))
    localStorage.setItem("marked", JSON.stringify(marked))
}
