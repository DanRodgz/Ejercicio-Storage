let txtName = document.getElementById("Name");
let btnSave = document.getElementById("saveName");

btnSave.addEventListener("click", function(event){
    event.preventDefault();
    txtName.value = txtName.value.trim();

    if (txtName.value){
        localStorage.setItem("Name", txtName.value);
    }
    
})

