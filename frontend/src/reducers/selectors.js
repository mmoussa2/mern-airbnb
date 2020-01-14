
export const selectProperty = ({ properties }, propertyId) => {
 
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

// export const selectCommentsForProperty = ({ comments }, property) => {

//   if (Object.keys(comments).length === 0 && comments.constructor === Object) {
//     return [];
//   }
//   else {
//     let com = [];
//     image.comment_ids.forEach((commentId) => {
//       if (comments[commentId]) {
//         com.push(comments[commentId]);
//       }
//     });
//     return com;
//   }
// };