const botoescurtir = document.querySelectorALL(".curtr");
botoescurtir.forEach(function(botaocurtir){
    let curtiu = false;
    botaoCurtir.addEventListener("click", curtir);
    function curtir(){
        const contador = botaoCurtir.querySelector("span");
        if(curtiu === false){
            contador.textContent++;
            curtiu = true;{
            }}else{ 
                contador.textContent--;
                curtiu = false;        
             }
}
});
const btnTema=documaent.querySelector(".btn-tema");
 btnTema.addEventListener("click",mudarTema);
 function mudarTema(){ 
    documaent.body.classList.toggle("tema-escuro");
 }
