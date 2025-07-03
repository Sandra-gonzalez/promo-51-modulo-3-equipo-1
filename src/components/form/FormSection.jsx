import Form from './Form.jsx';
// import imgbook from '../../images/ebook-example.jpg';
// import PropTypes from "prop-types"; no hace falta, ya se llaman a los props directamente en la función

function FormSection({ data, handleInputChange, handleImageProject, handleImageAuthor, handleResetForm }) {
  return (
    <section className="formSection">
{/*     ESTO NO HACE FALTA, ES UN DIV CON UNA IMAGEN DE FONDO PERO QUE COMO NO TIENE NI WIDTH NI HEIGHT NI SE PINTA (no lo borro por si está por alguna razón):::  <div
        className="formSection__image"
        style={{ backgroundImage: `url(${imgbook})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div> */}

      <div className="formSection__content">
        <Form
          data={data}
          handleInputChange={handleInputChange}
          handleImageProject={handleImageProject}
          handleImageAuthor={handleImageAuthor}
          handleResetForm={handleResetForm}
          
        />
      </div>
    </section>
  );
}

/* FormSection.propTypes = {
  data: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleImageProject: PropTypes.func.isRequired,
  handleImageAuthor: PropTypes.func.isRequired,
  handleResetForm: PropTypes.func.isRequired
}; */

export default FormSection;