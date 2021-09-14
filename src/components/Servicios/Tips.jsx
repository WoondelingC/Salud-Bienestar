import axios from "axios";
import React, { useEffect, useState } from "react";
import { Verificar } from "../../helpers/Verificar";
import styled from 'styled-components';

const Image = styled.img`
    border-radius: 20px;
`

export const Tips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    obtenerTips();
  }, []);

  const obtenerTips = async () => {
    const url = `https://salud-bienestar.herokuapp.com/tips`;
    const resp = await axios.get(url);
    const data = await resp.data;
    setTips(data);
    return data;
  };

  return (
    <div>
      <Verificar />
      {tips.map((tip) => {
        return( 
        <div className="container w-50">
        <div className="card mt-5 mb-2">
          <h3 className="text-center">{tip.titulo}</h3>
          <Image src={tip.image} className="card-img-top w-75 p-3 mx-auto d-block" alt="image" />
          <div className="card-body">
            <p className="card-text text-center">{tip.descripcion}</p>
          </div>
        </div>
        </div>);
      })}
    </div>
  );
};
