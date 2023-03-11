import { projectData } from "../data/projectData";

function CardGallery() {
  return (
    <div>
      <ul className='projects_gallery'>
        {projectData.map(({ id, title, description, timeline, tags, cover, url }) => (
          <li key={id} className='card_container'>
            <div className='card_img'>
              <img src={cover} alt={title} />
              {url ?
                <div className='card_link'>
                  <a target="_blank" rel="noreferrer" href={url}>{`check out ${title} >>`}</a></div>
                : <div></div>
              }
            </div>
            <div className='card_info'>
              <div className='card_title'>
                <h4>{title}</h4>
                <p className='card_timeline'>{timeline}</p>
              </div>
              <p className='card_description'>{description}</p>
              <ul className='card_tags'>
                {tags.map((tag, index) => (
                  <li key={index}>{tag}</li>))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>)
};

export default CardGallery;