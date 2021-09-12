import { db } from '../firebase/firebaseConfig'
import {types} from '../types/types'
import Swal from 'sweetalert2'
import {load} from '../helpers/load '
import  {fileUpload} from '../helpers/fileUpload'
let fileUrl=[]
//Crear los datos
export const citaNew = (citas) => {
    console.log(citas)
    return async (dispatch) => {
      
        const newCita= {
            url: fileUrl,
            nombre:citas.nombre,
            email:citas.email,
            categoria:citas.categoria,
            fecha:citas.fecha,
            hora:citas.hora
        }

        try {
           await db.collection(`/Cita`).doc().set(newCita)
            Swal.fire({
                position: 'top-end',
                text: 'Cita Agendada',
                icon: 'success',
                title: citas.nombre ,
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
        dispatch(addNewCita(newCita))
        dispatch(Listar())

    }
}



export const startUploading = (file) => {
    return async (dispatch) => {

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        fileUrl = await fileUpload(file)
        console.log(fileUrl)
        Swal.close()
       return fileUrl
    }
}


export const addNewCita = (cita ) => ({
    type: types.citaPost,
    payload: {
        ...cita
    }
})

//Listar los datos

export const Listar = (uid) => {
    return async (dispatch) =>{
        const citaList =  await load(uid)
        dispatch(setCitas(citaList))
    }
}

export const setCitas = (cita) => {
    return {
        type: types.citaGet,
        payload: cita
    }
}

//Borrar
export const Delete = (id) => {
    return async (dispatch) => {

        window.confirm('¿estas seguro que deseas eliminar la cita?')

        await db.doc(`Cita/${id}`).delete();
        dispatch(deleteCita(id));

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Elimando Cita',
            showConfirmButton: false,
            timer: 1500
          })
          dispatch(Listar())
    }
}

export const deleteCita= (id) => ({
    type: types.citaDelete,
    payload: id
});

//Editar
export const activeCita = (cita) => {
    return{
        type:types.citaActive,
        payload:{
            ...cita
        }
    }
}


export const Edit = (cita) => {
    return async (dispatch) => {
        
        console.log('Cita',cita)
        if (!cita.url) {
            delete cita.url;
        }

        const Editcita = {
            url: fileUrl,
            nombre:cita.nombre,
            email:cita.email,
            categoria:cita.categoria,
            fecha:cita.fecha,
            hora:cita.hora
        }

        const citaFire = { ...Editcita  }
        delete citaFire.id

        console.log(cita.id)

        Swal.fire({
            title: 'Actualizando cita...',
            text: 'Por favor espere ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })
           console.log(cita.id)
           await db.doc(`/Cita/${cita.id}`).update(Editcita)
           
        Swal.fire('Cita Actualizada', cita.nombre, 'success');
        dispatch(Listar())
        dispatch(clearCard())
    }
}

export const clearCard = () => {
    return {
        type: types.LogoutClean
    }
}




export const listaSearch = (searchText) => {

    return async(dispatch) => {
        const data = await db.collection(`/Cita`).where('nombre','==',searchText).get();
        const cita = [];
    
        data.forEach(citas=>{
            cita.push({
                uid: citas.id,
            ...citas.data()
           })
        })
        console.log(cita)
        dispatch(listarSe(cita));

    }
}

export const listarSe = (cita) => {
    return {
        type: types.citaListarBusqueda,
        payload: cita
    }
}