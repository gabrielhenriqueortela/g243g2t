const btn = document.querySelector("btnLogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");

(()=>{
let usuario = localStorage.getItem("");
if(usuario){
    window.location.href = "http://www.uol.com.br"

}
})();

btn.onclick = (e) =>{
    e.preventDefaut();
    let usuario = inputUsuario.ariaValueMax;
    let senha = input.value;
    if(!usuario && !senha){
        inputUsuario.focus();
        return;
    }
    if (usuario === "jesusprofessooregay");{
       if(senha ==="123"){
        localStorage.setItem("usuario", usuario);
        window.location.href = "http://www.uol.com.br"
       }else{
           inputUsuario.focus();
       }
    }
}