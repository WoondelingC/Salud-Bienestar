import { db } from '../firebase/firebaseConfig'

export const loadHistorial = async (uid) => {

    const cardStore = await db.collection('/Historial').get()
    const cardsList = [];

    cardStore.forEach(hijo=>{
        cardsList.push({
        id:hijo.id,
        ...hijo.data()
       })
    })
   
    return cardsList
}