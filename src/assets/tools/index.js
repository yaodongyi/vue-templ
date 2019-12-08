/**
 * router component
 * @param { string } url
 */
export const component = function(url) {
  return () => import(`@/views/${url}`);
};
