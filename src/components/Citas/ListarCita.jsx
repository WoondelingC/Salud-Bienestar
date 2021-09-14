import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Delete, activeCita } from "../../actions/citaAction";
import { AiFillEdit, AiFillDelete } from "react-icons/all";
import { Verificar } from "../../helpers/verificar";
import { useForm } from "../../hooks/useForm";
const ListarCita = () => {
  const { cita, active } = useSelector((state) => state.cita);
  const activeId = useRef(active.id);
  useEffect(() => {
    if (active.id !== activeId.current) {
      reset(active);
    }
    activeId.current = active.id;
  }, [active]); // eslint-disable-next-line 
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(Delete(id));
  };
  const [reset] = useForm(active);
  const handleEdit = (data) => {
    dispatch(activeCita(data));
    console.log("editar");
  };

  return (
    <>
     <Verificar />
      {cita.map((data, index) => (
        <div className="col-md-4 ms-5" key={`${index}-${data.id}`}>
          <div className="card mb-1">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h1>Control de Citas</h1>
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
                    <AiFillEdit />
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
      ))}
    </>
  );
};

export default ListarCita;
