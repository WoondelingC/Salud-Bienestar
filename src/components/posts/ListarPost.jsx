import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Delete, activePost, Listar } from '../../actions/postAction'
import { AiFillEdit, AiFillDelete } from 'react-icons/all'
import notSearch from '../../assets/search.png';
import { useForm } from '../../hooks/useForm'
import styled from 'styled-components';
const Image = styled.img`
    border-radius: 20px;
`

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

const ListarPost = () => {
  const { post, postActive } = useSelector(state => state.post)
  const { uid } = useSelector((state) => state.auth);
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



      <Title>Publicaciones creadas por los doctores</Title>
      {
       (post.length !== 0)?
      post.map((tip, index) => {
        return (
          <div className="container w-50" key={`${index}-${tip.id}`}>
            <div className="card mt-5 mb-2">
              {
                uid === 'vQcQcKWqcgf3Ek41lWuNkDcJ5Ra2' &&
                <>
                  <i className="material-icons text-danger cursor-pointer"
                    onClick={() => handleDelete(tip.id)}
                  >
                    <AiFillDelete />
                  </i>
                  <Link onClick={() => handleEdit(tip)}
                    to={`/editarpost/${tip.id}`}
                  >
                    <AiFillEdit />
                  </Link>
                </>}
              <h3 className="text-center">{tip.title}</h3>
              <Image src={tip.urlImg} className="card-img-top w-75 p-3 mx-auto d-block" alt="image" />
              <div className="card-body">
                <p className="card-text text-center">{tip.posts}</p>
              </div>

            </div>
          </div>
        );
      }):
        <div className="container-notSearch">
      <br/>

              <h1>No hay publicaciones</h1>
              <img src={notSearch} alt="not-search"/>
        </div>
    
    
    }




    </>
  )
}

export default ListarPost