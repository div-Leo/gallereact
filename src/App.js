import React, { Component, useEffect } from 'react';
import Slider from './Slider'
import './App.css';
import Unsplash, { toJson } from 'unsplash-js';
import Prism from "prismjs";
import 'prismjs/components/prism-jsx.min';
import "./lightSyntax.css";


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
   * @prop { number } index - Input index to go to specific index.
   * @prop { number } duration - Duration for every slide - Deafult: 5000.
   * @prop { boolean } autoPlay - Slider auto play - Deafult: false.
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
   * @prop { string } secondary - Color to apply on the active dot - must be valid color ('black', '#000', rgb(0,0,0)).
   * @prop { url } arrowLeftImg - Image for the left arrow.
   * @prop { url } arrowRightImg - Image for the right arrow.
   * @prop { func } callback - Callback function on change slide @param { index }.
   * @prop { url[]! } images - Array of images.
   * @prop { string[]! } titles - Array of title for each image, if passed shouldn't be null.
   * @prop { string[]! } captions - Array of captions for each image, if passed shouldn't be null.
   */

const defaultState = {
  images: [], 
  authors: [], 
  descriptions: [], 
  index: 0, 
  swipe: false, 
  cover: true, 
  invert: false, 
  arrowHover: false, 
  transition: true, 
  loop: true, 
  autoPlay: false, 
  titles: true, 
  captions: false, 
  duration: 5000,
};

const style = {
  containerStyle: {
    width: '100%',
  },
  slideStyle: {
    width: '80%',
    height: '90%',
    margin: '5% 10%',
    boxShadow: '0 2px 20px -1px #2222',
    position: 'relative',
    borderRadius: '2px',
  },
  taglineStyle: {
    background: '#FFF',
  },
  titleStyle: {
    fontWeight: 800,
    fontSize: '1.2rem',
  },
  captionStyle: {
    fontWeight: 500,
    fontSize: '.8rem',
  },
  dotStyle: {
    width: '25px',
    height: '2px',
    borderRadius: 0,
    margin: '0px',
  },
}

class App extends Component {
  state = defaultState

  componentDidMount () {
    this.unsplashPhotos('sea')
    this.setState({swipe:true})
  }

  unsplashPhotos = topic => {
    unsplash.search.photos(topic, 1)
    .then(toJson)
    .then(({results}) => {
      if (results.length) {
        this.setState({
          images: [...this.state.images, ...results.map(img=> img.urls.regular)],
          authors: [...this.state.authors, ...results.map(img=> img.user.name)],
          descriptions: [...this.state.descriptions, ...results.map(img=> img.alt_description)],
        })
      }
    }).catch((err)=>{
      console.error(err);
    });
  }

  handleCheckbox = e => {
    const { name, checked } = e.target;
    this.setState({[name]: checked})
  }

  render() {
    const { index, swipe, cover, invert, arrowHover, transition, loop, autoPlay, primary, secondary, duration } = this.state;
    const { images, authors, descriptions, titles, captions, ...output } = this.state;
    return (
      <>
      <div className="title">GALLEREACT</div>
      <div className="payoff">Most custom slider ever</div>
      <div className="container">
        <Slider
          {...style}
          images={images}
          titles={titles ? authors : []}
          captions={captions ? descriptions : []}
          {...{index, swipe, cover, invert, arrowHover, transition, loop, autoPlay, primary, secondary, duration}}
          arrowLeftImg='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/white-left-pointing-backhand-index_1f448.png'
          arrowRightImg='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/white-right-pointing-backhand-index_1f449.png'
        />
        <div className="checks">
          <label htmlFor="swipe">Swipe <input onChange={this.handleCheckbox} type="checkbox" checked={swipe} name="swipe"/></label>
          <label htmlFor="cover">Cover <input onChange={this.handleCheckbox} type="checkbox" checked={cover} name="cover"/></label>
          <label htmlFor="arrowHover">Arrow hover <input onChange={this.handleCheckbox} type="checkbox" checked={arrowHover} name="arrowHover"/></label>
          <label htmlFor="transition">Transition <input onChange={this.handleCheckbox} type="checkbox" checked={transition} name="transition"/></label>
          <label htmlFor="loop">Loop <input onChange={this.handleCheckbox}  type="checkbox" checked={loop} name="loop"/></label>
          <label htmlFor="autoPlay">Auto play <input onChange={this.handleCheckbox} type="checkbox" checked={autoPlay} name="autoPlay"/></label>
          <label htmlFor="titles">Titles <input onChange={this.handleCheckbox} type="checkbox" checked={titles} name="titles"/></label>
          <label htmlFor="captions">Captions <input onChange={this.handleCheckbox} type="checkbox" checked={captions} name="captions"/></label>
        </div>
        <CodeBlock {...output}/>
        {/* <label htmlFor="index">index <input onChange={this.handleChange} type="number" name="index"/> </label>*/}
        {/* <label htmlFor="primary">primary <input onChange={this.handleChange} type="color" name="primary"/> </label>*/}
        {/* <label htmlFor="secondary">secondary <input onChange={this.handleChange} type="color" name="secondary"/> </label>*/}
        {/* <label htmlFor="duration">duration <input onChange={this.handleChange} type="range" min="1" max="10000" name="duration"/> </label>*/}
      </div>
      </>
    );
  }
}

const CodeBlock = props => {
  useEffect(()=> Prism.highlightAll())
  return (
    <pre>
      <code className="language-jsx">
        {`<Slider images={[]} ${Object.entries(props).reduce((a,[k,v]) => 
            v !== defaultState[k] ? a + `${k}={${v}} ` : a
          ,'')}${Object.entries(style).reduce((a,[k,v]) =>
            a + `${k}={${JSON.stringify(v).replace(/"([^(")"]+)":/g,"$1:")}} `, '')} />`}
      </code>
    </pre>
  )
}

export default App;
