import { combineFixtures } from 'bouchon';

import books from './books';
import authors from './authors';


export default {
  name: 'london',
  endpoint: 'london',
  ...combineFixtures({
    books,
    authors,
  }),
};
