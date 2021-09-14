import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Delete, postActive} from '../../actions/postAction'
import {AiFillEdit,AiFillDelete} from 'react-icons/all'
import { Verificar } from '../../helpers/verificar'
const ListarPost = () => {
    const { post } = useSelector(state => state.post)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
       
       dispatch(Delete(id))
    };
    
    const handleEdit = (data) => {
        dispatch(postActive(data))
        console.log('editar')
    }
   

    return (
        <>
     <Verificar />
            {
                
                post.map((data,index) => (
                    <div className="col-md-4 ms-5" key={`${index}-${data.id}`}>
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
                to={`/editpost/${data.id}`}
                > 
                                        <AiFillEdit />
                                        </Link>
                                    </div>
                                </div>
                                <p>Titulo de la Publicación: {data.title}</p>
                                <p>Categoria: {data.categoria}</p>
                                <p>post {data.posts}</p>
                                <p>Imagen: <img className="img-fluid" src={data.urlImg} alt ={data.title} /></p>
                                


                           
                                
                            </div>
                        </div>

                    </div>
                ))
            }

        </>
    )
}

export default ListarPost