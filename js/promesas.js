import {addDoc, collection, getDocs, doc, updateDoc, deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase.js";
export const registrarPersona = async (riot)=>{
    const docRef = await addDoc(collection(db, "riot"), riot);
}
export const obtenerPersonas = async()=>{
    // recupera la referencia (ruta)
    const ref = collection(db, "riot");
    //Recuperamos una captura de la bd 
    const qSnap = await getDocs(ref);
    let listado = []
    qSnap.forEach((doc) => {
        console.log(doc.data());
        listado.push({...doc.data(),id:doc.id})
    });
    console.log(listado);
    return listado;
}
export const actualizarPersona = async(objeto, id)=>{
    const ref = doc(db, "riot", id);
    await updateDoc(ref, objeto);
}
export const eliminarPersona = async(id)=>{
    const ref = doc(db, "riot", id);
    await deleteDoc (ref);
}