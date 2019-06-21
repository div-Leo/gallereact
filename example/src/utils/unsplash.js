import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: '856a49ae384c50aca5ecfcd61037378e4fceaa65b1914cc924a4c6cd3faa2ee7',
  secret: '9e81deea92517885ed3dfc73ef21c58c340ed9f444bf4a3d8c0c05141fa1f75b',
  callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
});

const unsplashPhotos = topic =>
  unsplash.search.photos(topic, 1)
  .then(toJson)
  .then(({results}) => {
    if (results.length) {
      return results.map( img=> (
        {
          image: img.urls.regular, 
          title: img.user.name, 
          caption: img.alt_description
        }
      ))
    }
  }).catch((err)=>{
    console.error(err);
  });

export default unsplashPhotos;