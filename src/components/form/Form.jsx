import { useRef } from 'react';
// import PropTypes from "prop-types";

function Form({ data, handleInputChange, handleImageProject, handleImageAuthor, handleResetForm }) {
  const fileInputProject = useRef();
  const fileInputAuthor = useRef();

  const handleClickProject = () => {
    fileInputProject.current.click();
  };

  const handleClickAuthor = () => {
    fileInputAuthor.current.click();
  };

  const handleFileProject = (ev) => {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      handleImageProject(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleFileAuthor = (ev) => {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      handleImageAuthor(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="form">
      <h2 className="form__title">Información</h2>
      <p className="form__subtitle">Cuéntanos sobre el proyecto</p>

      <fieldset className="form__group">
        <input
          className="form__input"
          type="text"
          name="projectName"
          placeholder="Nombre del proyecto"
          value={data.projectName}
          onChange={handleInputChange}
        />
        <input
          className="form__input"
          type="text"
          name="slogan"
          placeholder="Slogan"
          value={data.slogan}
          onChange={handleInputChange}
        />

        <div className="form__2col">
          <input
            className="form__input"
            type="text"
            name="repo"
            placeholder="Repositorio"
            value={data.repo}
            onChange={handleInputChange}
          />
          <input
            className="form__input"
            type="text"
            name="demo"
            placeholder="Demo"
            value={data.demo}
            onChange={handleInputChange}
          />
        </div>

        <input
          className="form__input"
          type="text"
          name="technologies"
          placeholder="Tecnologías"
          value={data.technologies}
          onChange={handleInputChange}
        />
        <textarea
          className="form__input form__input--textarea"
          name="description"
          placeholder="Descripción"
          value={data.description}
          onChange={handleInputChange}
        ></textarea>
      </fieldset>

      <p className="form__subtitle">Cuéntanos sobre la autora</p>

      <fieldset className="form__group">
        <input
          className="form__input"
          type="text"
          name="authorName"
          placeholder="Nombre"
          value={data.authorName}
          onChange={handleInputChange}
        />
        <input
          className="form__input"
          type="text"
          name="job"
          placeholder="Trabajo"
          value={data.job}
          onChange={handleInputChange}
        />
      </fieldset>

      <fieldset className="form__group form__group--upload">
        <button type="button" className="form__uploadButton" onClick={handleClickProject}>
          Subir foto del proyecto
        </button>
        <input
          type="file"
          ref={fileInputProject}
          onChange={handleFileProject}
          className="form__hidden"
        />

        <button type="button" className="form__uploadButton" onClick={handleClickAuthor}>
          Subir foto de la autora
        </button>
        <input
          type="file"
          ref={fileInputAuthor}
          onChange={handleFileAuthor}
          className="form__hidden"
        />
      </fieldset>

      {/* 🧹 Botón de reset agregado */}
      <fieldset className="form__group">
        <button type="button" className="form__resetButton" onClick={handleResetForm}>
          Reiniciar formulario
        </button>
      </fieldset>
    </form>
  );
}

/* no hacen falta, las estamos llamando dos veces:

Form.propTypes = {
  data: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleImageProject: PropTypes.func.isRequired,
  handleImageAuthor: PropTypes.func.isRequired,
  handleResetForm: PropTypes.func.isRequired
}; */

export default Form;
