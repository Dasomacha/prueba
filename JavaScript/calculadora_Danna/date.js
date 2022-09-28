function hora(){
    let fecha;
    fecha=new Date();
    var cadena = fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
    document.getElementById('hora').innerHTML = cadena;
}
function fecha(){
    let fecha;
    fecha=new Date();
    let cadena = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    document.getElementById('fecha').innerHTML = cadena;
}
