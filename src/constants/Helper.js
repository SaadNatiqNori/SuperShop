// If returned Image not available show this dummy image
export function getImage(imageUrl) {
  if (
    imageUrl.lenth < 1 ||
    imageUrl == null ||
    imageUrl == undefined ||
    imageUrl == ""
  ) {
    return "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";
  } else {
    return imageUrl;
  }
}
// Short Long Text With Three Dots
export function longTextCut(text, length) {
  if (text.length >= length) {
    return text.slice(0, length) + "...";
  } else {
    return text;
  }
}
