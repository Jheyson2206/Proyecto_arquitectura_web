//script del footer
document.getElementById("miformulario").addEventListener("submit",function(event){
    event.preventDefault();
    if(this.checkValidity()){
        let nombre=document.getElementById("nombre").value;
        alert(`¡Gracias por suscribirte, ${nombre}!`);
        this.reset();
    }
});