import React, {Component} from 'react';

import LeftArrow from './arrows/left-arrow';
import RightArrow from './arrows/right-arrow';
import Dots from './dots';

import * as s from './style.js';

/** Image slider */
class Slider extends Component {
  /**
   * Initial state.
   * @param { number } index - of the current slide.
   * @param { number(px) } translateValue - px to transalte the image.
   */
  state = {
    index:0,
    translateValue: 0,
    translateDrag: 0,
    translateDutation: 0.5,
    x0: null,
  };

  componentDidMount () {
    const { autoPlay, duration=5000 } = this.props
    autoPlay && (setInterval(this.goToNextSlide, duration));
  }

  componentDidUpdate () {
    if (this.Slider) {
      this.Slider.addEventListener('mousedown', this.lock, false);
      this.Slider.addEventListener('touchstart', this.lock, false);
      this.Slider.addEventListener('mouseup', this.muve, false);
      this.Slider.addEventListener('touchend', this.muve, false);
      this.Slider.addEventListener('mousemove', this.drag, false);
      this.Slider.addEventListener('touchmove', this.drag, false);
      this.Slider.addEventListener('touchmove', e => {e.preventDefault()}, false)
      document.addEventListener('touchend', this.reset, false);
      document.addEventListener('mouseup', this.reset, false);
    }
  }

  reset = e => {
    this.setState({x0: null, translateDrag: 0})
  }

  muve = (e) => {
    const { index, x0 } = this.state;
    if(x0) {
      let dx = this.unify(e).clientX - x0
      let s = Math.sign(dx);
      let f = +(s*dx/this.Slider.offsetWidth).toFixed(2); 
      if((index > 0 || s < 0) && (index < this.props.images.length - 1 || s > 0) && f > .2)
        this.setState({
          index: index - s,
          translateValue: -(this.getWidth(this.Slider) * (index - s)),
        }, () => this.props.callback && this.props.callback(index));
      this.setState({x0: null, translateDrag: 0, translateDutation: 1 - f,})
    } 
  }

  lock = (e) => {
    this.setState({x0: this.unify(e).clientX})
    this.setState({translateDutation: 0})
  }

  drag = (e) => {
    const { x0 } = this.state;
    e.preventDefault();
    if(x0 || x0 === 0)  
      this.setState({
        translateDrag: Math.round(this.unify(e).clientX - x0),
      });
  };

  unify = (e) => e.changedTouches ? e.changedTouches[0] : e;

  /**
   * Translate toward the prev slide.
   * Set the state with the index and translateValue.
   * If it's the first slide go to the last.
   */
  goToPreviousSlide = () => {
    const { index, translateValue } = this.state;
    if (index > 0) {
      this.setState({
        index: index - 1,
        translateValue: translateValue + this.getWidth(this.Slider)
      },() => this.props.callback && this.props.callback(this.state.index));
    } else if (this.props.loop) {
      this.setState({
        index: this.props.images.length - 1,
        translateValue: -(this.getWidth(this.Slider) * (this.props.images.length - 1))
      },() => this.props.callback && this.props.callback(this.state.index));
    }
  }

  /**
   * Translate toward the next slide.
   * Set the state with the index and translateValue.
   * If it's the last slide go to the first.
   */
  goToNextSlide = () => {
    const { index, translateValue } = this.state;
    if (index < this.props.images.length - 1) {
      this.setState({
        index: index + 1,
        translateValue: translateValue - this.getWidth(this.Slider)
      },() => this.props.callback && this.props.callback(this.state.index));
    } else if (this.props.loop) {
      this.setState({
        index: 0,
        translateValue: 0
      },() => this.props.callback && this.props.callback(this.state.index));
    }
  }

  /**
   * Translate toward the selected slide.
   * Set the state with the corrispondent 
   * index to the dot and translateValue.
   */
  handleDotClick = id => {
    const { index } = this.state;
    if (id === index) return;
    this.setState({
      index: id,
      translateValue: -(this.getWidth(this.Slider) * id)
    },() => this.props.callback && this.props.callback(this.state.index));
  }

  getWidth = node => node.getBoundingClientRect().width

  /**
   * Initial state.
   * @return { component } single slide component.
   */
  renderSlides = (images, cover) => ( 
    images.map((curr, i) =>{ 
      return <s.Slide style={this.props.slideStyle} cover={cover} key={i} image={curr} />;}
    )
  )
  
  /**
   * Render the entire slide with arrows and dots.
   * @return { component } Container component.
   */
  render () {
    const { translateValue, translateDrag, translateDutation, index } = this.state;
    const {
      cover=true,
      invert=false,
      loop=true,
      arrowHover=false,
      swipe=false,
      transition=true,
      containerStyle,
      dotStyle,
      arrowStyle,
      arrowLeftImg,
      arrowRightImg,
      images = [] } = this.props;

    return (
      !!images.length && 
        <s.Container>
          <s.Gallery cover={cover} style={containerStyle}>
            <s.Slider translateDutation={translateDutation} transition={transition} translateDrag={translateDrag} translateValue={translateValue} ref={r => this.Slider = r}>
              {this.renderSlides(images, cover)}
            </s.Slider>
          </s.Gallery>
          <Dots
            index={index}
            images={images}
            dotClick={this.handleDotClick}
            dotStyle={dotStyle}
            invert={invert}
            />
          {!swipe && <s.Arrows>
            <LeftArrow arrowStyle={arrowStyle} arrowLeftImg={arrowLeftImg} arrowHover={arrowHover} prevSlide={this.goToPreviousSlide}/>
            <RightArrow arrowStyle={arrowStyle} arrowRightImg={arrowRightImg} arrowHover={arrowHover} nextSlide={this.goToNextSlide} />
          </s.Arrows>}
        </s.Container>
    );
  }
}

export default Slider;
