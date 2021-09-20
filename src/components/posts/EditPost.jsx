import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  edit,
  Listar,
  postNew,
  startUploadingImage,
  startUploadingVideo,
} from "../../actions/postAction";
import ListarPost from "./ListarPost";
import { Verificar } from "../../helpers/verificar";

const EditPost = () => {
    const { postActive } = useSelector(state => state.post)
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      ...postActive,
    },
    
    onSubmit: () => {
     
        dispatch(edit(formik.values));
        formik.resetForm();
     
     
    },
  });

  const { title, categoria, urlVideo, urlImg, fecha, posts } = formik.values;

  // CARGAR IMAGEN
  const handleClickFile = () => {
    document.querySelector("#fileSelector").click();
  };
  const handleFileChange = async (e) => {
    // console.log(e);
    const file = e.target.files[0];
    if (file) {
      let fileURL = await dispatch(startUploadingImage(file));
      let urlImg = document.querySelector("#urlImage");
      urlImg.value = fileURL;
      formik.values.urlImg = fileURL;
    }
  };

  // CARGAR VIDEO
  const handleClickFileVideo = () => {
    document.querySelector("#VideoSelector").click();
  };
  const handleFileVideoChange = async (e) => {
    // console.log(e);
    const file = e.target.files[0];
    if (file) {
      let fileURL = await dispatch(startUploadingVideo(file));
      let urlVideo = document.querySelector("#urlVideo");
      urlVideo.value = fileURL;
      formik.values.urlVideo = fileURL;
    }
  };
  useEffect(() => {
    dispatch(Listar())
}, [dispatch])
  return (
    <>
 
 <form
      onSubmit={formik.handleSubmit}
      className="card card-body border-primary py-4 px-5"
    >
      <div className="form-group input-group mb-3">
        <div className="input-group-text bg-light">
          <i className="bi bi-person-square"></i>
        </div>
        <input
          type="text"
          name="title"
          placeholder="Titulo de la Publicación"
          className="form-control"
          value={title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>

      {formik.touched.title && formik.errors.title ? (
        <div className="text-danger mb-3">{formik.errors.title}</div>
      ) : null}

     

     

      <div className="form-group input-group col-lg-4 col-lg-offset-4">
        
        <input
          type="text"
          className="form-control center"
          placeholder="Imagen"
          name="urlImage"
          id="urlImage"
          value={urlImg}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled
          style={{ display: "none" }}
        />
      </div>

      <input
        id="fileSelector"
        type="file"
        name="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
        className="text-center"
      />
      <div class="d-flex justify-content-center">
      <div className="w-50 btn btn-primary p-0 my-2 text-uppercase fw-bold">
        <input
          type="button"
          className="btn text-white fw-bold text-center"
          value="Agregar Imagen"
          onClick={handleClickFile}
        />
      </div>
      </div>
      {formik.touched.urlImg && formik.errors.urlImg ? (
        <div className="text-danger mb-3">{formik.errors.urlImg}</div>
      ) : null}


      <div className="form-group mt-3">
        <textarea
          rows="3"
          className="form-control"
          placeholder="Escribe tu Publicacíon aqui"
          name="posts"
          value={posts}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>
      </div>

      {formik.touched.posts && formik.errors.posts ? (
        <div className="text-danger mb-3">{formik.errors.posts}</div>
      ) : null}

      <button type="submit" className="btn btn-primary mt-3">
        Editar Publicación
      </button>
      
    </form>
    </>
  );
};

export default EditPost;