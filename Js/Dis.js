document.getElementById("BVer").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "block";
})

document.getElementById("BotonCerrar").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "none";
    document.querySelector(".Contenedor-Binicio").style.display = "none";
    document.querySelector(".Con-2").style.display = "block";
})