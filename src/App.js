import React, { Component } from 'react';
import Slider from './Slider'
import './App.css';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: '856a49ae384c50aca5ecfcd61037378e4fceaa65b1914cc924a4c6cd3faa2ee7',
  secret: '9e81deea92517885ed3dfc73ef21c58c340ed9f444bf4a3d8c0c05141fa1f75b',
  callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
});

// "https://images.unsplash.com/photo-1542720197-a314c3ad289e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1546415614-d00a3795dbfa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1550626847-1df7517db9cb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1542315291377-a38c9fe57384?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1542785853-cf202360bca0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1489321336462-efe12c02d099?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1542228556-11d73301e280?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1542683549-cf229d5ea6f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1542402972-2d8a2c7df5a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/39/yvDPJ8ZSmSVob7pRxIvU_IMG_40322.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1515948482931-76fc11d130ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1489024091080-de8bc07232d4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1475615787683-f1a161b002b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1480431301262-4cef4b7129e2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1508978053361-f0df91897005?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1484407823139-504dc061ac01?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1518591497912-374ba74e8fb0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1440996906419-1752be8fb1d1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"
// "https://images.unsplash.com/photo-1551904780-575168998951?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MzM5fQ"

/**
   * Slider Component.
   * @prop { boolean } autoPlay - Slider auto play - Deafult: false.
   * @prop { number } duration - Duration for every slide - Deafult: 5000.
   * @prop { number } index - Input index to go to specific index.
   * @prop { boolean } loop - Slider will re-start from the beginnign - Deafult: true.
   * @prop { boolean } transition - Animated transition on change slide - Deafult: true.
   * @prop { boolean } cover - Image style, if false the applyed style is contain. - Deafult: true(cover).
   * @prop { boolean } invert - Dark or Light style - Deafult: false(light).
   * @prop { boolean } swipe - Allow Swipe action - Deafult: false(not allow).
   * @prop { boolean } arrowHover - Show on over - Deafult: false(shown).
   * @prop { object } containerStyle - Style to apply on the container.
   * @prop { object } slideStyle - Style to apply on the single slide.
   * @prop { object } captionStyle - Style to apply on the slide captions.
   * @prop { object } dotStyle - Style to apply on the dots.
   * @prop { object } arrowStyle - Style to apply on the arrows.
   * @prop { string } primary - Color to apply on the default dot - must be valid color ('black', '#000', rgb(0,0,0)).
   * @prop { string } secndary - Color to apply on the active dot - must be valid color ('black', '#000', rgb(0,0,0)).
   * @prop { url } arrowLeftImg - Image for the left arrow.
   * @prop { url } arrowRightImg - Image for the right arrow.
   * @prop { func } callback - Callback function on change slide @param { index }.
   * @prop { url[]! } images - Array of images.
   * @prop { string[]! } captions - Array of captions for each image, if passed shouldn't be null.
   */
class App extends Component {
  state = { images: [], authors: [], description: [] }

  componentDidMount () {
    this.unsplashPhotos('sea')
  }

  unsplashPhotos = (topic) => {
    unsplash.search.photos(topic, 1)
    .then(toJson)
    .then(({results}) => {
      if (results.length) {
        this.setState({
          images: [...this.state.images, ...results.map(img=> img.urls.regular)],
          authors: [...this.state.authors, ...results.map(img=> img.user.name)],
          description: [...this.state.description, ...results.map(img=> img.alt_description)],
        })
      }
    }).catch((err)=>{
      console.error(err);
    });
  }

  render() {
    const { images, authors, description } = this.state
    return (
      <>
      <div className="title">GALLEREACT</div>
      <div className="payoff">Most custom slider ever</div>
      <div className="Container">
        <Slider 
          containerStyle = {{
            width: '100%',
          }}
          slideStyle = {{
            width: '80%',
            height: '90%',
            margin: '5% 10%',
            boxShadow: '0 2px 20px -1px #2222',
            position: 'relative',
          }}
          taglineStyle={{
            background: '#FFF',
          }}
          titleStyle={{
            fontWeight: 800,
            fontSize: '1.2rem',
          }}
          captionStyle={{
            fontWeight: 500,
            fontSize: '.8rem',
          }}
          dotStyle={{
            width: '25px',
            height: '2px',
            borderRadius: 0,
            margin: '0px',
          }}
          images={images}
          titles={authors}
          captions={description}
          swipe
        /> 
      </div>
      </>
    );
  }
}

export default App;