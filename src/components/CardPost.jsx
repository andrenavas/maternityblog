import { useState } from 'react';
import './CardPost.css';
import PropTypes from "prop-types";

const CardPost = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const truncatedDescription = expanded
    ? post.description
    : `${post.description.substring(0, 150)}...`; // Ajusta el número para cambiar la longitud truncada

  return (
    <div className='container-card-post'>
      <h2 className='title-card-post'>{post.title}</h2>
      <h3 className='subtitle-card-post'>{post.subtitle}</h3>
      <img
        className="img-post"
        src={post.image}
        alt="post image"
      />
      <p className='text-card-post'>{truncatedDescription}</p>
      {!expanded && (
        <button className="read-more-button" onClick={toggleExpansion}>
          Ver más
        </button>
      )}
      <span className='date-card-post'>{post.date}</span>
    </div>
  );
};

CardPost.propTypes = {
  post: PropTypes.object,
};

export default CardPost;
