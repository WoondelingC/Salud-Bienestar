import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Delete, activePost} from '../../actions/postAction'
import {AiFillEdit,AiFillDelete} from 'react-icons/all'

import { useForm } from '../../hooks/useForm'
import { db } from '../../firebase/firebaseConfig'

const DetallesPost = () => {
    const { post, postActive } = useSelector(state => state.post)
    
  const dispatch = useDispatch();

  const postActiveId = useRef(postActive.id);
  const PostStore =  db.collection(`/post`).get()
    const [reset] = useForm(postActive);
 
   

    return (
        <>
    
           
                    <div className="col-md-4 ms-5">
                        <div className="card mb-1" >
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                <h1>Publicaciones</h1>
                                    
                                    <div>
                                      
                                     
                                        <Link 
                to={`/post/`}
                > 
                                        Regresar
                                        </Link>
                                    </div>
                                </div>
                                <p>Titulo de la Publicación: {PostStore.title}</p>
                                <p>Categoria: {post.categoria}</p>
                                <p>post {post.post}</p>
                               <img className="img-fluid" src={post.urlImg} alt ={post.title} />
                                


                           
                                
                            </div>
                        </div>

                    </div>
                
            

        </>
    )
}

export default DetallesPost
