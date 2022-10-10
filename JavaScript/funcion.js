let x = $(document);
x.ready(inicializarEventos);
function inicializarEventos(){
    let x = $("#Titulo1");
    x.click(presionTitulo1);
    x = $("#Titulo2");
    x.click(presionTitulo2);
}
function presionTitulo1(){
    let x = $("#Titulo1");
    x.css("color", "#ff0000");
    x.css("background-color","#ffff00");
    x.css("font-family","Arial");
}
function presionTitulo2(){
    let x = $("#Titulo2");
    x.css("color", "#ffff00");
    x.css("background-color","#ff0000");
    x.css("font-family","Arial");
}