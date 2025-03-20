function cambiar_texto(e){
    const texto=document.getElementById("texto_cambiado")
    const texto_cambiado=document.getElementById("fname")
    texto.innerHTML=texto_cambiado.value
    
}
async function desplegar_noticias(articles){
    
   
    
    const contenedor = document.getElementById("contenedor_noticias");
    contenedor.innerHTML = "";

    const row = document.createElement("div");
    row.classList.add("row", "g-4"); 

    articles.slice(0, 10).forEach((noticia, index) => {
        const col = document.createElement("div");
        col.classList.add("col-md-6"); 

        col.innerHTML = `
    <div class="card text-white bg-dark border-warning shadow h-100">
        <div class="card-body">
            <h5 class="card-title text-warning">${noticia.title}</h5>
            <h6 class="card-subtitle text-primary">${noticia.source.name || "Fuente desconocida"}</h6>
            <p class="card-text text-light">${noticia.description || "Sin descripción disponible."}</p>
            <a href="${noticia.url}" target="_blank" class="btn btn-warning text-dark fw-bold">Leer más</a>
        </div>
    </div>
    `;

        row.appendChild(col);
    });

    contenedor.appendChild(row);
    
}

document.addEventListener("DOMContentLoaded", (event) => {
    const button = document.getElementById("boton_cambio_de_texto");
        
    button.addEventListener("click", cambiar_texto);
    
    const botones = document.querySelectorAll("input[name='btnradio']");
    
    
    botones.forEach(boton => {
        boton.addEventListener("change", function () {
            if (this.checked) {
                const categoria = this.nextElementSibling.textContent.toLowerCase();
                obtenerNoticias(categoria);
            }
        });
    });

    
    function obtenerNoticias(categoria) {
        const apiKey = "61ccd605179b47d5be9503711ea0b28a";
        const url = `https://newsapi.org/v2/top-headlines?category=${categoria}&apiKey=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data =>  desplegar_noticias(data.articles))
            .catch(error => console.error("Error al obtener noticias:", error));
    }

    
    obtenerNoticias("technology");
});
    
    
    


//61ccd605179b47d5be9503711ea0b28a