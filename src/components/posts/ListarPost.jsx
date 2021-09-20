import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Delete, activePost, Listar} from '../../actions/postAction'
import {AiFillEdit,AiFillDelete} from 'react-icons/all'

import { useForm } from '../../hooks/useForm'
import styled from 'styled-components';
const Image = styled.img`
    border-radius: 20px;
`
const ListarPost = () => {
    const { post, postActive } = useSelector(state => state.post)
    const {  uid} = useSelector((state) => state.auth); 
  const dispatch = useDispatch();

  const postActiveId = useRef(postActive.id);
  
  useEffect(() => {
    if (postActive.id !== postActiveId.current) {
      reset(postActive);
    }
    postActiveId.current = postActive.id;
  }, [postActive]); //
    const handleDelete = (id) => {
       
       dispatch(Delete(id))
    };
    const [reset] = useForm(postActive);
    const handleEdit = (data) => {
        dispatch(activePost(data))
        console.log('editar')
    }
   
    useEffect(() => {
    
        dispatch(Listar())
   
    }, [dispatch])



    return (
        <>
    
         
                 
     
                 {post.map((tip, index) => {
                   return( 
                   <div className="container w-50" key={`${index}-${tip.id}`}> 
                   <div className="card mt-5 mb-2">
                   {
                            uid === 'OzsqDZqus0P3cSKDNuA2u73OP2h2' && 
                            <>
                                        <i className="material-icons text-danger cursor-pointer"
                                            onClick={() => handleDelete(tip.id)}
                                        >
                                            <AiFillDelete />
                                        </i>
                                        <Link  onClick={() => handleEdit(tip)}
                to={`/editarpost/${tip.id}`}
                > 
                                        <AiFillEdit />
                                        </Link>
                                        </>    }
                     <h3 className="text-center">{tip.title}</h3>
                     <Image src={tip.urlImg} className="card-img-top w-75 p-3 mx-auto d-block" alt="image" />
                     <div className="card-body">
                       <p className="card-text text-center">{tip.posts}</p>
                     </div>
                    
                   </div>
                   </div>
                   );
                 })}
               
               
          

        </>
    )
}

export default ListarPost