(function (){

//VARIABLES
var lista= document.getElementById("lista");
var tareaInput=document.getElementById("tareaInput");
var boton= document.getElementById("boton-agregar");

//FUNCIONES
var agregarTarea= function(){
    var tarea=tareaInput.value;
    var nuevaTarea= document.createElement("li");
    var enlaceA= document.createElement("a");
    var contenido= document.createTextNode(tarea);
    
};
var comprobarInput=function(){
    
};
var eliminarTarea=function(){
    
};
//EVENTOS

//agregar tarea
boton.addEventListener("click", agregarTarea);

//comprobar input
tareaInput.addEventListener("click", comprobarInput);

//borrando elementos de la lista de tareas
for(var i =0; i <=lista.children.length -1; i++) {
    lista.children[i].addEventListener("click", eliminarTarea);
}

}());