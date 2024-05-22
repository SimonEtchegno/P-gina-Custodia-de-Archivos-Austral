window.addEventListener('load',() =>{
    const contenedor_loader = document.querySelector('.loader')
    contenedor_loader.style.opacity = 0
    contenedor_loader.style.visibility = 'hidden'
})




function limpiar() {   
    const element = document.querySelector(".textoParallaxIndex ");
    element.innerHTML = "";  

    const up = document.querySelector(".swipeDown");
    up.remove();

}




ScrollReveal().reveal('.containerMarcas',{ delay:100});
ScrollReveal().reveal('.containerImgServicio',{ delay:1000});
ScrollReveal().reveal('.container-servicios',{ delay:100});
ScrollReveal().reveal('.containerliPasos ',{ delay:200});
ScrollReveal().reveal('.containerBeneficios',{ delay:450});
ScrollReveal().reveal('.beneficios',{ delay:500});
ScrollReveal().reveal('.container__riesgos',{ delay:500});

