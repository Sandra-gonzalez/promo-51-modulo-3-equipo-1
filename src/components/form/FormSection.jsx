import Form from './Form.jsx';
import imgbook from '../../images/ebook-example.jpg';
import PropTypes from "prop-types";

function FormSection({ data, handleInputChange, handleImageProject, handleImageAuthor, handleResetForm }) {
  return (
    <section className="formSection">
      <div
        className="formSection__image"
        style={{ backgroundImage: `url(${imgbook})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

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

FormSection.propTypes = {
  data: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleImageProject: PropTypes.func.isRequired,
  handleImageAuthor: PropTypes.func.isRequired,
  handleResetForm: PropTypes.func.isRequired
};

export default FormSection;