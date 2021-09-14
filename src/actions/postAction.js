import Swal from "sweetalert2";

import { types } from "../types/types";
import { fileUpload } from "../helpers/fileUpload";
import { db } from '../firebase/firebaseConfig';

import { loadPost } from "../helpers/loadPost";
import { videoUpload } from "../helpers/videoUpload";


let fileUrl = [];

//ENVIA LA IMAGEN A CLOUDINARY Y LA SUBE
export const startUploadingImage = (file) => {

    return async () => {

        Swal.fire({
            title: 'Subiendo imagen...',
            text: 'Por favor espere ...',
            allowOutsideClick: false,
            showConfirmButton: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        fileUrl = await fileUpload(file)
           
        // console.log(fileUrl);
        Swal.close()
       return fileUrl
    }
}


//ENVIA EL VIDEO A CLOUDINARY Y LO SUBE
export const startUploadingVideo = (file) => {

    return async () => {

        Swal.fire({
            title: 'Subiendo Video...',
            text: 'Por favor espere ...',
            allowOutsideClick: false,
            showConfirmButton: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        fileUrl = await videoUpload(file)
           
        // console.log(fileUrl);
        Swal.close()
       return fileUrl
    }
}


//CREA NUEVA MOVIE

export const postNew = (post) => {
    console.log(post)
    return async (dispatch) => {
      
        const newPost= {
            categoria: post.categoria,
            title:post.title,
            urlVideo: post.urlVideo,
            urlImg: post.urlImg,
            fecha: post.fecha,
            posts:post.posts
        }

        try {
           await db.collection(`/post`).doc().set(newPost)
            Swal.fire({
                position: 'top-end',
                text: 'Publicación Creada',
                icon: 'success',
                title: post.title ,
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
        dispatch(addNewPost(newPost))
        dispatch(Listar())
    }
}

export const addNewPost = (post) => ({
    type: types.postAddNew,
    payload: {
        ...post
    }
})



export const Listar = (uid) => {
    return async (dispatch) =>{
        const postList =  await loadPost(uid);
        dispatch(setPosts(postList))
    }
}


export const setPosts = (post) => {
    return {
        type: types.postGet,
        payload: post
    }
}




export const edit = (post) => {
    return async (dispatch) => {
        
        if (!post.url) {
            delete post.url;
        }

        const EditPost = {
            title: post.title,
            categoria: post.categoria,
            urlVideo: post.urlVideo,
            urlImg: post.urlImg,
            fecha: post.fecha,
            posts:post.posts
        }

        const PostFire = { ...EditPost  }
        delete PostFire.id

        Swal.fire({
            title: 'Editando...',
            text: 'Por favor Espere ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

           await db.doc(`/post/${post.id}`).update(EditPost)

        Swal.fire('Publicación Editada', post.title, 'success');
        dispatch(Listar())
        dispatch(postActiveClear())
    }
}

//BORRAR UNA CARD

export const Delete = (id) => {
    return async (dispatch) => {
        window.confirm('¿estas seguro que deseas eliminar la publicación?')
       

        await db.doc(`post/${id}`).delete();

        dispatch(deletePost(id));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Elimando Publicación',
            showConfirmButton: false,
            timer: 1500
          })
          dispatch(Listar())
    }
}

export const deletePost = (id) => ({
    type: types.postDelete,
    payload: id
});



//FUNCIONES SINCRONICAS


export const activePost = (post) => {
    return{
        type:types.postActive,
        payload:{
            ...post
        }
    }
}


export const postActiveClear = () => {
    return {
        type: types.postActiveClear
    }
}