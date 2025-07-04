
import avatar from '../../images/avatar.webp';

function CardAuthor ({data}) {
    return (
        <>
            <div className="author">
                <div
                    className="authorPhoto"
                    style={{
                    backgroundImage: data.authorPhoto
                        ? `url(${data.authorPhoto})`
                        : `url(${avatar})`
                    }}
                ></div>

                <p className="card__job">{data.job || 'Full Stack Developer'}</p>
                <h3 className="card__name">{data.authorName || 'Nombre Apellido'}</h3>
            </div>
        </>
    )
}

export default CardAuthor


