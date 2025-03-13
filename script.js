function cambiar_texto(e){
    const texto_para_cambiar = document.getElementById("texto_cambiado");
    const text_nuevo=document.getElementById("fname");
    texto_para_cambiar.innerHTML=text_nuevo.value
}    
document.addEventListener("DOMContentLoaded", (event) => {
    const button = document.getElementById("boton_cambio_de_texto");
    
        button.addEventListener("click", cambiar_texto);
    
    const ul = document.getElementById("theList");
    ul.addEventListener("click", manejo_de_cartas_);

    
    
    


    
});