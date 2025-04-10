let txtWelcome = document.getElementsByTagName("h4").item(0);
let btnDelete = document.getElementById("btnDelete");

if(this.localStorage.getItem("Name") != null){
    txtWelcome.innerText = `Hola, ${this.localStorage.getItem("Name")}, bienvenido de nuevo.`
} else {
    txtWelcome.innerText = "Por favor, vuelve al index e ingresa tu nombre";
}

btnDelete.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.removeItem("Name");
    txtWelcome.innerText = "Por favor, vuelve al index e ingresa tu nombre";
});