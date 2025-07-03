import PropTypes from "prop-types";

function Button({ handleResetForm }) {
  return (
    <div className="form__footer">
      <button type="button" className="form__uploadButton" onClick={handleResetForm}>
        Reiniciar formulario
      </button>
    </div>
  );
}

Button.propTypes = {
  handleResetForm: PropTypes.func.isRequired
};

export default Button;
