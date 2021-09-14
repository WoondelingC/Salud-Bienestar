import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Delete, activePost} from '../../actions/postAction'
import {AiFillEdit,AiFillDelete} from 'react-icons/all'
import { Verificar } from '../../helpers/verificar'
import { useForm } from '../../hooks/useForm'

const ListarPost = () => {
    const { post, postActive } = useSelector(state => state.post)
    
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
   

    return (
        <>
    
            {
                
                post.map((data,idx) => (
                    <div className="col-md-4 ms-5" key={`${idx}-${data.id}`}>
                        <div className="card mb-1" >
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                <h1>Publicaciones</h1>
                                    
                                    <div>
                                        <i className="material-icons text-danger cursor-pointer"
                                            onClick={() => handleDelete(data.id)}
                                        >
                                            <AiFillDelete />
                                        </i>
                                        <Link  onClick={() => handleEdit(data)}
                to={`/editarpost/${data.id}`}
                > 
                                        <AiFillEdit />
                                        </Link>
                                    </div>
                                </div>
                                <p>Titulo de la Publicación: {data.title}</p>
                                <p>Categoria: {data.categoria}</p>
                                <p>post {data.data}</p>
                                <Link to={`/publicacion/${data.id}`}>  <img className="img-fluid" src={data.urlImg} alt ={data.title} /> </Link>
                                


                           
                                
                            </div>
                        </div>

                    </div>
                ))
            }

        </>
    )
}

export default ListarPost