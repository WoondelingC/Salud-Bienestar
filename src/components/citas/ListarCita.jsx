import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Delete, activeCita} from '../../actions/citaAction'
import {AiFillEdit,AiFillDelete} from 'react-icons/all'
const ListarCita = () => {
    const { cita } = useSelector(state => state.cita)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
       dispatch(Delete(id))
    };
    
    const handleEdit = (data) => {
        dispatch(activeCita(data))
        console.log('editar')
    }
    

    return (
        <>
            {
                cita.map((data,index) => (
                    <div className="col-md-4 ms-5" key={`${index}-${data.id}`}>
                        <div className="card mb-1" >
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h4>{data.name}</h4>
                                    <div>
                                        <i className="material-icons text-danger pointer"
                                            onClick={() => handleDelete(data.id)}
                                        >
                                            <AiFillDelete />
                                        </i>
                                        <Link  onClick={() => handleEdit(data)}
                to={`/edit/${data.id}`}
                > 
                                        <AiFillEdit />
                                        </Link>
                                    </div>
                                </div>
                                <p>{data.nombre}</p>
                                <p>{data.email}</p>
                                <p>{data.categoria}</p>
                                <p>{data.fecha}</p>
                                <p>{data.hora}</p>
                                
                            </div>
                        </div>

                    </div>
                ))
            }

        </>
    )
}

export default ListarCita
