

function CardProject ({data}) {
    return (
        <>
            
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
        </>
    )
}

export default CardProject


