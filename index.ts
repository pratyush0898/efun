// Import all utility functions
import * as arrayFuncs from './js/array';
import * as mathFuncs from './js/math';
import * as stringFuncs from './js/string';

// Merge all functions into a single object
const Efun = {
  ...arrayFuncs,
  ...mathFuncs,
  ...stringFuncs,
};

// Export the Efun object
export default Efun;
