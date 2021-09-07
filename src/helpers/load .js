import { db } from '../firebase/firebase-config'

export const load = async (uid) => {

    const CitaStore = await db.collection(`/Cita`).get()
    const citasList = [];

    CitaStore.forEach(hijo=>{
        citasList.push({
        id:hijo.id,
        ...hijo.data()
       })
    })
   
    return citasList
}

