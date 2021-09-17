import { db } from '../firebase/firebaseConfig'

export const loadPost = async (uid) => {

    const PostStore = await db.collection(`/post`).get()
    const postList = [];

    PostStore.forEach(hijos=>{
        postList.push({
        id:hijos.id,
        ...hijos.data()
       })
    })
   
    return postList
}