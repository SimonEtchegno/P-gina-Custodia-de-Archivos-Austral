function limpiar() {   
    const element = document.querySelector(".textoParallaxIndex ");
    element.innerHTML = "";  

    const up = document.querySelector(".swipeDown");
    up.remove();

    reload();
}

ScrollReveal().reveal('.containerMarcas',{ delay:900});
ScrollReveal().reveal('.marca-img',{ delay:900});
ScrollReveal().reveal('.containerImgServicio',{ delay:1000});
ScrollReveal().reveal('.container-pasos',{ delay:100});
ScrollReveal().reveal('.container-adicional',{ delay:200});
ScrollReveal().reveal('.containerBeneficios',{ delay:450});
ScrollReveal().reveal('.container__beneficios',{ delay:500});
ScrollReveal().reveal('.container__riesgos',{ delay:600});

