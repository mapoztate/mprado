/*
To prevent the SVGs masks being used with the same id
*/
var getUniqueId = function getUniqueId() {
  if (typeof window === 'undefined') return;
  var id = Math.random().toString(36).substring(2, 15);
  return id;
};

export default getUniqueId;