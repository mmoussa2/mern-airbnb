
export const selectProperty = ({ properties }, propertyId) => {
  debugger
if(!properties){
  return [];
}
  
  return properties[propertyId];
};

export const selectPropertyImages = (state, property) => {
  if (!property) return [];
  let images = [];
  property.image_ids.forEach((id) => {
    let image = state.entities.images[id];
    if (image) images.push(image);
  })
  return images;

};