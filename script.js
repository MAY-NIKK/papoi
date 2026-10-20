const formulario = document.getElementById("formulario-login");


formulario.addEventListener("submit", function(event)){
    event.preventDefault();


    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;


    const usuarioCerto = "shakalaka"
    const senhaCerta = "1234567";


    if (usuario === usuarioCerto && senhaCerta){
        alert("Tudo certo. Tenha um bom dia");
    }


    else{
        alert("NÂO. VOCÊ NÂO PASSARA!");
    }


}


