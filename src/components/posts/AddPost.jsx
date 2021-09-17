import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  edit,
  postNew,
  startUploadingImage,
  startUploadingVideo,
} from "../../actions/postAction";

import { useForm } from "../../hooks/useForm";


const AddPost = () => {
    const { postActive } = useSelector(state => state.post)
  const dispatch = useDispatch();

  const activeId = useRef(postActive.id)

  useEffect(() => {
      if (postActive.id !== activeId.current) {
          reset(postActive)
      }
      activeId.current = postActive.id
  }, [postActive ])

  const [reset] = useForm(postActive)
  const formik = useFormik({
    initialValues: {
      ...postActive,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(5, "El nombre es muy corto")
        .required("Escribe un titulo para la publicación."),
      categoria: Yup.string().required("Agrega al menos una categoria"),
      
     
      posts: Yup.string()
        .min(25, "La publicación es muy corta")
        .required("Publicación requerida!"),
    }),
    onSubmit: () => {
      // console.log('hace dispatch');
      
        dispatch(postNew(formik.values));
        
      
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

      <div className="form-group input-group mb-3">
        <div className="input-group-text bg-light">
          <i className="bi bi-star-fill"></i>
        </div>
        <input
          type="text"
          name="categoria"
          placeholder="Elige una categoria"
          className="form-control"
          value={categoria}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>

      {formik.touched.categoria && formik.errors.categoria ? (
        <div className="text-danger mb-3">{formik.errors.categoria}</div>
      ) : null}

     

      <div className="form-group input-group ">
        <div className="input-group-text bg-light ">
          <i className="bi bi-link-45deg"></i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Imagen"
          name="urlImage"
          id="urlImage"
          value={urlImg}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled
        />
      </div>

      <input
        id="fileSelector"
        type="file"
        name="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div className="w-50 btn btn-dark p-0 my-2 text-uppercase fw-bold">
        <input
          type="button"
          className="btn text-white fw-bold"
          value="Picture"
          onClick={handleClickFile}
        />
      </div>

      {formik.touched.urlImg && formik.errors.urlImg ? (
        <div className="text-danger mb-3">{formik.errors.urlImg}</div>
      ) : null}
<div className="form-group input-group ">
        <div className="input-group-text bg-light ">
          <i className="bi bi-link-45deg"></i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Video trailer"
          name="urlVideo"
          id="urlVideo"
          value={urlVideo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled
        />
      </div>

      <input
        id="VideoSelector"
        type="file"
        name="file"
        accept="video/*"
        style={{ display: "none" }}
        onChange={handleFileVideoChange}
      />
      <div className="w-50 btn btn-dark p-0 my-2 text-uppercase fw-bold">
        <input
          type="button"
          className="btn text-white fw-bold"
          value="Video"
          onClick={handleClickFileVideo}
        />
      </div>

      {formik.touched.urlVideo && formik.errors.urlVideo ? (
        <div className="text-danger mb-3">{formik.errors.urlVideo}</div>
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

      <button type="submit" className="btn btn-dark mt-3">
        Guardar Publicación
      </button>
      
    </form>
  </>
  );
 
};

export default AddPost;