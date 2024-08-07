function loadTasks(id,status){
    fetch("/updated-tasks",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({id,status})
    });
}

function handleCheckboxChange(event,id){
    var change=event.target.checked ? 1 : 0;
    loadTasks(id,status);
}