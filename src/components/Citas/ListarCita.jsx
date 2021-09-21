import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Delete, activeCita } from "../../actions/citaAction";
import { AiFillEdit, AiFillDelete } from "react-icons/all";
import userCita from '../../assets/userCita.png'
import notSearch from '../../assets/search.png';
import styled from 'styled-components';

import { useForm } from "../../hooks/useForm";

const Title = styled.h2`

  color: #ffffff;
  background: #be83ffa6;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin: 0px auto;
  margin-top: 40px;

  `;

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
      <Title>Control de citas.</Title>

      <div className="container citas">
        {
          (cita.length !== 0) ?
            cita.map((data, index) => (
              <div className="col-md-4 ms-5 citas" key={`${index}-${data.id}`}>
                <div className="card mb-1">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">

                      <div className="container-iconText">
                        <img src={userCita} alt="" className="img-cita" />
                        <h3>{data.nombre}</h3>
                      </div>
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

                    <p><strong>Correo:</strong> {data.email}</p>
                    <p><strong>Tipo de Cita:</strong> {data.categoria}</p>
                    <p><strong>Fecha:</strong> {data.fecha}</p>
                    <p><strong>Hora:</strong> {data.hora}</p>
                  </div>
                </div>
              </div>
            )) :
            <div className="container-notSearch">
              <h1>No hay citas</h1>
              <img src={notSearch} alt="not-search" />
            </div>

        }
      </div>
    </>
  );
};

export default ListarCita;