
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListarCard } from "../../actions/actionHistorial";
import userCita from '../../assets/userCita.png';
import notSearch from '../../assets/search.png';
import styled from 'styled-components';



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

export const ListarHistorial = () => {

    const { card } = useSelector(state => state.card)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ListarCard());
    }, [dispatch]);

    return (
        <>
         <Title>Historiales</Title>
    
        <div className="container citas">
          {
          (card.length !== 0)?
          card.map((data, index) => (
            <div className="col-md-4 ms-5 citas" key={`${index}-${data.id}`}>
              <div className="card mb-1">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
    
                  <div className="container-iconText">
                    <img src={userCita} alt="" className="img-cita" />
                    <h3>{data.name}</h3>
                    </div>
                  </div>
    
                    <p><strong>Razon de diagnostico:</strong> {data.razon}</p>
                    <p><strong>Problema médico:</strong> {data.examen}</p>
                    <p><strong>Operaciones:</strong> {data.operacion}</p>
                    <p><strong>Tiempo sin ir al medico:</strong> {data.tiempo}</p>
                    <p><strong>Descripcion:</strong> {data.describe}</p>
                </div>
              </div>
            </div>
          )):
          <div className="container-notSearch">
                <h1>No hay historiales</h1>
                <img src={notSearch} alt="not-search"/>
          </div>
          
          
        
        
        }
          </div>
        </>
      );
    };
