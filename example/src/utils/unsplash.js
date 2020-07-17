import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_APPLICATION_ID,
  secret: process.env.REACT_APP_SECRET,
  callbackUrl: process.env.REACT_APP_CALLBACK_URL,
});

const unsplashPhotos = topic =>
  unsplash.search
    .photos(topic, Math.random() * 10)
    .then(toJson)
    .then(({ results }) => {
      if (results.length) {
        return results.map(img => ({
          image: img.urls.regular,
          title: img.user.name,
          caption: img.alt_description,
        }));
      }
    })
    .catch(err => {
      console.error(err);
    });

export default unsplashPhotos;
