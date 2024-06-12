window.addEventListener("load",()=>{
    document.getElementById("btnCon").addEventListener("click", osc);
})


function osc(){
    let mision = document.getElementById("qofrece");
    let qs = document.getElementById("qsomos")
    let body = document.body;

    if (body.style.backgroundColor === "black"){
        body .style.backgroundColor= "white";
        head.style
    }else{
        body.style.backgroundColor = "black"
    }
    
}




registrar();
    // recuperar elemento
    let eNombre = document.getElementById("name");
    let eApellido = document.getElementById("apellido")
    let eRut = document.getElementById("rut")
    let eEmail = document.getElementById("email")
    let eDireccion = document.getElementById("direccion")
    let eCodpostal = document.getElementById("codpostal")
    let eFono = document.getElementById("telefono")
    let eAsunto = document.getElementById("asunto")
    //recuperar valor 
    let vNombre = eNombre.value
    let vApellido = eApellido.value 
    let vRut = eRut.value 
    let vEmail = eEmail.value
    let vDireccion = eDireccion.value 
    let vCodpostal = eCodpostal.value 
    let vFono = eFono.value
    let vAsunto = eAsunto.value 