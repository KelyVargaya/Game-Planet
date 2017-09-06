// JS-CATALOGO
var contenedorImg = document.getElementById('contenedorIMGGLOBAL');
contenedorImg.onclick=function(){
	var x=event.target.src;
	var img=document.getElementById("modalIMG");
	img.setAttribute("src",x);
}