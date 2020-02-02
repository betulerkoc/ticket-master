import React from 'react';
import {MoviesContext} from '../../context/movies'

const Posts = () => {
  const  {movies} = React.useContext(MoviesContext);



  return (
    <ul className='list-group mb-4'>
      {movies.map(post => (
        <li key={post.id} className='list-group-item'>
          {movies.name}
        </li>
      ))}
    </ul>
  );
};

export default Posts;