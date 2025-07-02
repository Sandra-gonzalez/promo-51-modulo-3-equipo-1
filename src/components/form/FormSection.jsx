import Form from '../form/Form.jsx';
import imgbook from '../../images/ebook-example.jpg';

function FormSection({ data, handleInputChange, handleImageProject, handleImageAuthor }) {
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
        />
      </div>
    </section>
  );
}

export default FormSection;