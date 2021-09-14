import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Delete, activeCita } from "../../actions/citaAction";
import { AiFillEdit, AiFillDelete } from "react-icons/all";
import {Verificar} from '../../helpers/Verificar'


const ListarCita = () => {
  const { cita } = useSelector((state) => state.cita);
  const {email} =useSelector((state)=> state.auth)

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(Delete(id));
  };

  const handleEdit = (data) => {
    dispatch(activeCita(data));
    console.log("editar");
  };

  return (
    <>
    <Verificar />
    <div className="container">
      
      {cita.map((data, index) => (
        
        <div className="row d-flex justify-content-center">
        <div className="col-md-5" key={`${index}-${data.id}`}>
          <div className="card mb-2 mt-3">
            <div className="card-body text-justify">
              <div className="d-flex justify-content-between">
                <h1 className="mb-4">Control de Citas</h1>
                <h4>{data.name}</h4>
                <div>
                  <i
                    className="material-icons text-danger cursor-pointer"
                    onClick={() => handleDelete(data.id)}
                  >
                    <AiFillDelete />
                  </i>
                  <Link
                    onClick={() => handleEdit(data)}
                    to={`/editar/${data.id}`}
                  >
                    <AiFillEdit className="ms-2"/>
                  </Link>
                </div>
              </div>
              <p>Nombre Completo: {data.nombre}</p>
              <p>Correo Electronico: {data.email}</p>
              <p>Tipo de Cita {data.categoria}</p>
              <p>Fecha: {data.fecha}</p>
              <p>Hora: {data.hora}</p>
            </div>
          </div>
        </div>
        </div>
        
      ))}
      </div>
    </>
  );
};

export default ListarCita;
