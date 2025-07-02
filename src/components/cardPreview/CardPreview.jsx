import imgBook from '../../images/ebook-example.jpg';
import avatar from '../../images/avatar.webp';

function CardPreview({ data }) {
  return (
    <section className="preview">
      <div
        className="projectImage"
        style={{
          backgroundImage: data.projectPhoto
            ? `url(${data.projectPhoto})`
            : `url(${imgBook})`
        }}
      ></div>

      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">Personal Project Card</span>
        </h2>

        <div className="card__author">
          <div
            className="card__authorPhoto"
            style={{
              backgroundImage: data.authorPhoto
                ? `url(${data.authorPhoto})`
                : `url(${avatar})`
            }}
          ></div>

          <p className="card__job">{data.job || 'Full Stack Developer'}</p>
          <h3 className="card__name">{data.authorName || 'Nombre Apellido'}</h3>
        </div>

        <div className="card__project">
          <h3 className="card__name">{data.projectName || 'Nombre del proyecto'}</h3>
          <p className="card__slogan">{data.slogan || 'Slogan del proyecto'}</p>
          <h3 className="card__descriptionTitle">Product description</h3>
          <p className="card__description">
            {data.description ||
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          </p>

          <div className="card__technicalInfo">
            <p className="card__technologies">
              {data.technologies || 'React JS - HTML - CSS'}
            </p>

            <a
              className="icon icon__www"
              href={data.demo || '#'}
              target="_blank"
              rel="noreferrer"
              title="Haz click para ver el proyecto online"
            >
              Web link
            </a>
            <a
              className="icon icon__github"
              href={data.repo || '#'}
              target="_blank"
              rel="noreferrer"
              title="Haz click para ver el código del proyecto"
            >
              GitHub link
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default CardPreview;