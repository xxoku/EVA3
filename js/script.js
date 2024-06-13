import { actualizarPersona, eliminarPersona, obtenerPersonas, registrarPersona } from "./promesas.js";

window.addEventListener("load",()=>{
    document.getElementById("btnCon").addEventListener("click", osc);
    document.getElementById("btnFuente").addEventListener("click", fontsize);
    document.getElementById("Submit").addEventListener("click", registrar);
    document.getElementById("Submit").addEventListener("click", validar);
    cargarDatos();
    document.getElementById("btnActualizar").addEventListener("click", actualizar);
})


function osc(){
    let mision = document.getElementById("qofrece");
    let qs = document.getElementById("qsomos")
    let body = document.body;

    if (body.style.backgroundColor === "black"){ // Si el color de fondo es negro
        body .style.backgroundColor= "white"; // aca lo cambia a blanco 
        head.style
    }else{
        body.style.backgroundColor = "black"
    }
}

function fontsize(){
    document.body.classList.toggle("fontsize") // alterna la fontsize del body 
}

function validar(){
    validarVacio("Name");
    validarVacio("Apellido");
    validarVacio("Rut");
    validarVacio("Email");
    validarVacio("Direccion");
    validarVacio("Codpostal");
    validarLongitud("Telefono",9);
}


function validarVacio(idCampo){
    //recupera el elemento
    let elemento = document.getElementById(idCampo);
    console.log(elemento); // Muestra el elemento en consola
    //recuperar valor del campo
    let valor = elemento.value;
    console.log(valor); // Muestra el elemento en consola
    let eParrafo = document.getElementById("p"+idCampo);
    if(valor.trim()==""){
        elemento.style.borderColor = "black";
        eParrafo.style.display = "block";
    }else{
        elemento.style.borderColor = "green";
        eParrafo.style.display = "none";
    }
}

function validarLongitud(idCampo){
    let elemento = document.getElementById(idCampo);
    console.log(elemento);
    let valor = elemento.value;
    console.log(valor);
    console.log(isNaN(valor))
    let eParrafo = document.getElementById("p"+idCampo);
    if(isNaN(valor)){
        eParrafo.innerText = "Debes ingresar un numero";
        eParrafo.style.display = "block";
    }
    else{
        if(valor.trim().length == 9 || valor.trim().length == 0 ){
            elemento.style.borderColor = "green";
        }else{
            elemento.style.borderColor = "red";
       
        }
    }
    
}

const registrar= ()=>{
    // recuperar elemento
    let eNombre = document.getElementById("Name");
    let eApellido = document.getElementById("Apellido")
    let eRut = document.getElementById("Rut")
    let eEmail = document.getElementById("Email")
    let eDireccion = document.getElementById("Direccion")
    let eCodpostal = document.getElementById("Codpostal")
    let eFono = document.getElementById("Telefono")
    let eComentarios = document.getElementById("Comentarios")
    //recuperar valor 
    let vNombre = eNombre.value;
    let vApellido = eApellido.value; 
    let vRut = eRut.value;
    let vEmail = eEmail.value;
    let vDireccion = eDireccion.value; 
    let vCodpostal = eCodpostal.value;
    let vFono = eFono.value;
    let vComentarios = eComentarios.value;
    let objeto = {nombre:vNombre,apellido:vApellido,rut:vRut,email:vEmail,telefono:vFono,direccion:vDireccion,codpostal:vCodpostal,comentarios:vComentarios}
    registrarPersona(objeto).then(()=>{
        alert("Se registra con exito")
        cargarDatos()
    }).catch((error)=>{
        console.log(error);
    });
}

const cargarDatos = ()=>{
    obtenerPersonas().then((riot)=>{
        console.log(riot)
        //cargarlo en la tabla html
        let estructura = ""
        riot.forEach((p)=>{
            estructura += "<tr>"
            estructura += "<td>"+p.nombre+"</td>"
            estructura += "<td>"+p.apellido+"</td>"
            estructura += "<td>"+p.rut+"</td>"
            estructura += "<td>"+p.email+"</td>"
            estructura += "<td>"+p.direccion+"</td>"
            estructura += "<td>"+p.codpostal+"</td>"
            estructura += "<td>"+p.telefono+"</td>"
            estructura += "<td><button id='UPD"+p.id+"'>Actualizar</button></td>"
            estructura += "<td><button id='DEL"+p.id+"'>Eliminar</button></td>"
            estructura += "</tr>";
        })
        document.getElementById("cuerpoTabla").innerHTML = estructura;

        riot.forEach((p)=>{
            let elemento = document.getElementById("UPD"+p.id);
            elemento.addEventListener("click",()=>{
                document.getElementById("UPDnombre").value = p.nombre;
                document.getElementById("UPDapellido").value = p.apellido;
                document.getElementById("UPDrut").value = p.rut;
                document.getElementById("UPDemail").value = p.email;
                document.getElementById("UPDdireccion").value = p.direccion;
                document.getElementById("UPDcodigopostal").value = p.codpostal;
                document.getElementById("UPDtelefono").value = p.telefono;
                document.getElementById("UPDcomentarios").value = p.comentarios;
                document.getElementById("btnActualizar").value = p.id;
            });
            let btnEliminar = document.getElementById("DEL"+p.id);
            btnEliminar.addEventListener("click",()=>{
                if (confirm("Desea elminar a a:\n"+p.nombre+" "+p.apellido)){
                    eliminarPersona(p.id).then(()=>{
                        alert ("Eliminaste con exito")
                        cargarDatos();
                    }).catch((e)=>{
                        console.log(e)
                    })
                }else(
                    consoles.log("Cancelaste la eliminacion")
                )
                
                })
            })
        })
    }

const actualizar= ()=>{
    // aca se recupera los datos de la anterior tabla mas facil.
    let eNombre = document.getElementById("UPDnombre");
    let eApellido = document.getElementById("UPDapellido")
    let eRut = document.getElementById("UPDrut")
    let eEmail = document.getElementById("UPDemail")
    let eDireccion = document.getElementById("UPDdireccion")
    let eCodpostal = document.getElementById("UPDcodigopostal")
    let eFono = document.getElementById("UPDtelefono")
    let eComentarios = document.getElementById("UPDcomentarios")
    //igual que arriba recupera el valor del elemento
    let vNombre = eNombre.value;
    let vApellido = eApellido.value; 
    let vRut = eRut.value;
    let vEmail = eEmail.value;
    let vDireccion = eDireccion.value; 
    let vCodpostal = eCodpostal.value;
    let vFono = eFono.value;
    let vComentarios = eComentarios.value;
    let objeto = {nombre:vNombre,apellido:vApellido,rut:vRut,email:vEmail,telefono:vFono,direccion:vDireccion,codpostal:vCodpostal,comentarios:vComentarios}
    let id = document.getElementById("btnActualizar").value;
    document.getElementById("btnActualizar").disabled = "True";
    actualizarPersona(objeto,id).then(()=>{
        alert("Se actualiza con exito")
        cargarDatos();
    }).catch((e)=>{
        console.log(e)
    }).finally(()=>{
        document.getElementById("btnActualizar").disabled = "";
    })


}