const div = document.getElementById("main")

window.addEventListener('keydown',(e)=>{
    div.innerHTML=`
    <div id="key">
        
         <h3>Key : ${e.key}</h3>
         <h3>KeyCode : ${e.code}</h3>
    

    </div>`
})