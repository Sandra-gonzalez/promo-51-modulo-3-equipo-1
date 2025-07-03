import imgBook from '../../images/ebook-example.jpg';
import avatar from '../../images/avatar.webp';

function CardPreviewSite({ data }) {
  return (
  <>
    <h2 className="previewCard__title">Aquí tienes tu proyecto:</h2>
      <section className="previewCard">


      <div
        className="previewCard__image"
        style={{
          backgroundImage: data.projectPhoto
            ? `url(${data.projectPhoto})`
            : `url(${imgBook})`
        }}
      ></div>

      <article className="previewCard__article">
        <h2 className="article__projectTitle">
          <span className="article__projectTitle--text">Personal Project Card</span>
        </h2>

        <div className="article__author">
          <div
            className="article__authorPhoto"
            style={{
              backgroundImage: data.authorPhoto
                ? `url(${data.authorPhoto})`
                : `url(${avatar})`
            }}
          ></div>

          <p className="article__job">{data.job || 'Full Stack Developer'}</p>
          <h3 className="article__name">{data.authorName || 'Nombre Apellido'}</h3>
        </div>

        <div className="article__project">
          <h3 className="article__name">{data.projectName || 'Nombre del proyecto'}</h3>
          <p className="article__slogan">{data.slogan || 'Slogan del proyecto'}</p>
          <h3 className="article__descriptionTitle">Product description</h3>
          <p className="article__description">
            {data.description ||
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          </p>

          <div className="article__technicalInfo">
            <p className="article__technologies">
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
 </>
  );
}

export default CardPreviewSite;