import React from 'react';
import {MoviesContext} from '../../context/movies'

const Pagination = () => {
  const pageNumbers = [];
  const {movies, onPageNumberChange} = React.useContext(MoviesContext);
//  console.log(movies.length);

//   for (let i = 1; i <= movies.length; i++) {
  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => onPageNumberChange(number + 1)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;