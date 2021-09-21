import Swal from 'sweetalert2'
import { fileUpload } from '../helpers/fileUpload'
import { db } from '../firebase/firebaseConfig'
import {types} from '../types/types'
import { loadHistorial } from '../helpers/loadHistorial'


//FUNCIONES ASINCRONICAS
export const AgregarHistorial = (name, razon, examen, operacion, tiempo, describe) => {

    return async (dispatch, getSate) => {
        const uid = getSate().auth.uid

        const newCard = {
            name: name,
            razon: razon,
            examen: examen,
            operacion: operacion,
            tiempo: tiempo,
            describe: describe
       }
       //AGREGO A MI COLECCION FIREBASE


       try {
        await db.collection('/Historial').doc().set(newCard)
         Swal.fire({
             position: 'top-end',
             text: 'Enviado al personal médico',
             icon: 'success',
             showConfirmButton: false,
             timer: 1500
           })
     } catch (e) {
         Swal.fire({
             icon: 'error',
             title: 'Oops...',
             text: e,
             footer: ''
           })
     }
     dispatch(addNewCard(newCard))
     dispatch(ListarCard())

    
}
}


//FUNCIÓNES SINCRÓNICAS

export const addNewCard = (card ) => ({
    type: types.cardAddNew,
    payload: {
       ...card
    }
})

export const ListarCard = (uid) => {
    return async (dispatch) =>{
        const cards =  await loadHistorial(uid)
        dispatch(setCards(cards))
    }
}

export const setCards = (cards) => {
    return {
        type: types.cardLoad,
        payload: cards
    }
}

export const activeCard = (id,card) => {
    return{
        type:types.cardActive,
        payload:{
            id,
            ...card
        }
    }
}

export const clearCard = () => {
    return {
        type: types.cardLogoutClean
    }
}

export const deleteCard = (id) => ({
    type: types.cardDelete,
    payload: id
});
