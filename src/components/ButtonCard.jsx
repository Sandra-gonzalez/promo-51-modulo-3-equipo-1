import { Link } from 'react-router';

function ButtonCard() {
  return (
    <div className="sectionButton">
      <Link  to={"/cardPreview/"} className="button--preview">Preview</Link>
    </div>
  );
}

export default ButtonCard;
