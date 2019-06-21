const filterImages = (images, titles, captions) => {
  return images.map(currImage => (
    {
      image: currImage.image,
      title: titles ? currImage.title : undefined, 
      caption: captions ? currImage.caption : undefined, 
    }
  ))
}

export default filterImages;