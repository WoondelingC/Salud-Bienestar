import { db } from '../firebase/firebaseConfig'

export const loadPost = async (uid) => {

    const PostStore = await db.collection(`/post`).get()
    const postList = [];

    PostStore.forEach(hijo=>{
        postList.push({
        id:hijo.id,
        ...hijo.data()
       })
    })
   
    return postList
}