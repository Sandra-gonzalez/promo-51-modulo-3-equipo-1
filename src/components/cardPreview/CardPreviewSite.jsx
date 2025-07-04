import CardImage from './CardImage.jsx';
import CardAuthor from './CardAuthor.jsx';
import CardProject from './CardProject.jsx';
import { Link } from 'react-router';


function CardPreviewSite({ data }) {
  return (
  <>
    <h2 className="project__title">Aquí tienes tu proyecto:</h2>
      <Link to="/app" className="bt-back">Volver atrás
              </Link>
      <section className="project">
      <div className="project__image">
        <CardImage data={data} />
      </div>

      <article className="project__article">
        <h2 className="article__projectTitle">Personal Project Card</h2>

        <div className="project__author">
          <CardAuthor data={data} />
        </div>


          <p className="project__subtitle">About your project:</p>
          <CardProject data={data} />

      </article>
    </section> 
 </>
  );
}

export default CardPreviewSite;