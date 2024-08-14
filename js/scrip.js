const ingresotexto = document.getElementById("ingresotexto");
const botonencriptar = document.getElementById("botonencriptar");
const botondesencriptar = document.getElementById("botondesencriptar");
const botoncopiar = document.getElementById("botoncopiar");
const mensajefinal = document.getElementById("mensajefinal");
const muñeco = document.getElementById("muñeco");
const rightinfo = document.getElementById("rightinfo");
const right = document.getElementById("right");



let remplazar = [
    ["e", "enter"],
    ["o", "ober" ],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
]
const remplace = (nuevoValor) => {
    mensajefinal.innerHTML = nuevoValor;
    muñeco.classList.add("oculto"); //desaparece el muñeco
    ingresotexto.value = "";
    rightinfo.style.display = "none"; //eliminar el mensaje 
    botoncopiar.style.display = "block"; //mostrar boton copiar despues de ingresar el texto
    right.classList.add("ajustar");
    mensajefinal.classList.add("ajustar");

}


botonencriptar.addEventListener("click", () =>{
    const texto =ingresotexto.value.toLowerCase()
    if( texto != ""){

   
        function encriptar (newText){
                for( let i = 0; i < remplazar.length; i++){
                    if (newText.includes(remplazar[i][0])){
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
                    };
                };
                return newText;
        }
    }else{
        alert("ingrese texto a encriptar");
    }
    remplace(encriptar(texto));
    //mensajefinal.innerHTML = encriptar(texto);
})

botondesencriptar.addEventListener('click', () => {

	const texto = ingresotexto.value.toLowerCase();
    if ( texto != ""){
            function desencript(newtext) {
                for (let i = 0; i < remplazar.length; i++) {
                    if (newtext.includes(remplazar[i][1])) {
                        newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
                    };
                };
                return newtext;
            };
            //const textoDesencriptado = desencript(texto);
           // mensajefinal.innerHTML = textoDesencriptado;
            remplace(desencript(texto));
    } else {
     alert("ingrese texto a Desencriptar");
        
    }
});

botoncopiar.addEventListener('click', () => {
    let texto = mensajefinal;
   texto.select();
   document.execCommand("copy");
   alert("texto copiado")
   mensajefinal.innerHTML = "";
   muñeco.classList.remove("oculto");
   rightinfo.style.display = "block";
   botoncopiar.style.display = "none"; 
   right.classList.remove("ajustar");
   mensajefinal.classList.remove("ajustar");
   ingresotexto.focus();
})

