import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import ListarPost from "../posts/ListarPost";

/*SE APLICAN ESTILOS CON STYLED-COMPONENTS*/

const Content = styled.div`
    margin-bottom: 60px;
`

const Title = styled.h1`
  color: #ffffff;
  background: #c4c4ff;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  width: fit-content;
  margin: 0px auto;
  margin-top: 40px;

  @media screen and (max-width: 580px){
    .w-50 {
        width: 100%!important;
    }
  }
`

const P = styled.p`
    color: #5a5a5a;
    font-size: 20px;
`

const Image = styled.img`
    border-radius: 20px;
`
const H3 = styled.h3`
    margin-top: 20px;
    font-size: 35px;
    color: #909090;
`





export const Tips = () => {
  const [tips, setTips] = useState([]);



  useEffect(() => {
    obtenerTips();
  }, []);

  /*API DE TIPS DE SALUD*/
  const obtenerTips = async () => {
    const url = `https://salud-bienestar.herokuapp.com/tips`;
    const resp = await axios.get(url);
    const data = await resp.data;
    setTips(data);
    return data;
  };

  return (
    <div>
      <Content className="Contenedor-tips">
        <Title>Área de información</Title>
        {tips.map((tip, index) => {
          return (
            <div className="container w-50" key={`${index}-${tip.id}`}>
              <div className="card mt-5 mb-2">
                <H3 className="text-center">{tip.titulo}</H3>
                <Image src={tip.image} className="card-img-top w-75 p-3 mx-auto d-block" alt="image" />
                <div className="card-body">
                  <P className="card-text text-center">{tip.descripcion}</P>
                </div>

              </div>
            </div>);
        })}
        <ListarPost />
      </Content>
    </div>

  );
};