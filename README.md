# 🖼 Gallereact - React slider

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blueviolet.svg?style=flat)](http://makeapullrequest.com) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/gallereact.svg) [![Issues](http://img.shields.io/github/issues/div-Leo/gallereact.svg)](https://github.com/div-Leo/gallereact/issues ) [![license](https://img.shields.io/github/license/div-Leo/gallereact.svg)](https://github.com/div-Leo/gallereact/blob/master/LICENSE) [![Coverage Status](https://coveralls.io/repos/github/div-Leo/gallereact/badge.svg?branch=master)](https://coveralls.io/github/div-Leo/gallereact?branch=master)

Gallereact is a complete ready to use gallery slider, with a lot of possible customizations. It works based on object-fit for img tags, which allows a better ratio management. Just styling the div that contains the component with a height and a width and the images will fit on that.

## Getting started

```bash
npm install gallereact
```

You might need to to install `styled-components` as a peer dependency, and you're ready to go! 

### How to use

Check out the **[live demo here](https://gallereact.netlify.com/)** to get an idea on how it works!

Import the component `Gallereact` from the library and put it inside a **container with a declared height and width**. This is really important, Gallereact is designed to be completely customizable from the user side, so it will adapt itself perfectly to its container.

```jsx
import Gallereact from 'gallereact';

function MyComponent () {
  const images = [
    'http://image.url/1', 
    'http://image.url/2', 
    'http://image.url/3'
  ];
                  
  return (
    <div style={{ width: '60vw', height: '80vh' }}>
      <Gallereact images={images} />
    </div>
  )
}
```



## Props

| Prop name            |    Type    | Default | Required |                         Description                          |
| -------------------- | :--------: | :-----: | :------: | :----------------------------------------------------------: |
| `inputIndex`         |   Number   |    -    |  false   |            Input index to go to a specific slide.            |
| `autoPlay`           |  Boolean   |  false  |  false   |                       Slider auto play                       |
| `duration`           |   Number   |  5000   |  false   |      When auto play determines the transition duration       |
| `transition`         |  Boolean   |  true   |  false   |         Allow animated transition on slide change .          |
| `loop`               |  Boolean   |  true   |  false   | If true, once reached the end it will re-start from the beginnign. Ignored if `swipe` is true. |
| `cover`              |  Boolean   |  true   |  false   | Background-Image style. If false the applied style is "*contain*". |
| `swipe`              |  Boolean   |  false  |  false   |                     Allow Swipe action.                      |
| `arrowOnHover`       |  Boolean   |  false  |  false   |                     Show arrow on hover.                     |
| `displayDot`         |  Boolean   |  true   |  false   | Show dots. If false slider will take the entire available height. |
| `displayArrow`       |  Boolean   |  true   |  false   |                         Show Arrows.                         |
| `displayPreview`     |  Boolean   |  false  |  false   | Show preview of the images below the slider. If true it won't display the dots. |
| `primaryColor`       |   String   | '#CCC'  |  false   | Color to apply on the default arrow and dot - must be valid color ('black', '#000', rgb(0,0,0)). |
| `secondaryColor`     |   String   | '#333'  |  false   | Color to apply on the default active dot - must be valid color ('black', '#000', rgb(0,0,0)). |
| `containerStyle`     |   Object   |    -    |  false   |               Style to apply on the container.               |
| `slideStyle`         |   Object   |    -    |  false   |             Style to apply on the single slide.              |
| `dotContainerStyle`   |   Object   |    -    |  false   |         Style to apply on the container of the dots.         |
| `dotStyle`           |   Object   |    -    |  false   |                 Style to apply on the dots.                  |
| `dotActiveStyle`     |   Object   |    -    |  false   |              Style to apply on the active dot.               |
| `arrowStyle`         |   Object   |    -    |  false   |                Style to apply on the arrows.                 |
| `taglineStyle`       |   Object   |    -    |  false   |                Style to apply on the tagline.                |
| `titleStyle`         |   Object   |    -    |  false   |             Style to apply on the tagline title.             |
| `captionStyle`       |   Object   |    -    |  false   |            Style to apply on the tagline caption.            |
| `previewStyle`       |   Object   |    -    |  false   |            Style to apply on the preview images.             |
| `previewActiveStyle` |   Object   |    -    |  false   |         Style to apply on the active preview image.          |
| `arrowLeftImg`       | .png\|.svg |    -    |  false   | Image for the left arrow. It will accepts 'url', .jpeg, .png and  .svg |
| `arrowRightImg`      | .png\|.svg |    -    |  false   | Image for the right arrow. It will accepts 'url', .jpeg, .png and .svg |
| `callback`           |  Function  |    -    |  false   |       Callback function on slide change  *@param {i}*        |
| `images`             |  Image[]!  |    -    |   true   |               Array of objects of type Image.                |

### Image 

| Prop name |  Type   | Default | Required |     Description      |
| --------- | :-----: | :-----: | :------: | :------------------: |
| `image`   | String! |    -    |   true   |   Url of the image   |
| `title`   | String  |    -    |  false   |  Title of the image  |
| `caption` | String  |    -    |  false   | Caption of the image |

If you don't have any tagline you can pass just the url of the images.


## Other examples



#### Custom Options

It's possible to pass options and style objects to customize the way you prefer. 

```jsx
<Gallereact
  images={[/* array of images */]} 
  swipe={true}
  displayArrows={false} 
  slideStyle={{
    width:"80%",
    height:"90%",
    margin:"5% 10%",  
    boxShadow:"0 2px 20px -1px #2222"
  }} 
  dotStyle={{
    width:"25px",
    height:"3px",
    borderRadius:0,
    margin:"0px"
  }}  
/>
```



#### Callback

You can pass a callback function that is going to be trigger every time that the slide changes. It will pass the current index as single parameter.

```jsx
const [currentSlide, setCurrentSlide] = useState(0)

function onChangeSlide (i) {
  setCurrentSlide(i)
}

return (
  <div style={style.container}>
    <Gallereact 
      images={images} 
      callback={onChangeSlide}
      />
  </div>
)
```



#### Go to slide

You can control the slider passing the property `inputIndex`  which will translate to the targeted slider.

```jsx
const [index, setIndex] = useState(0)

function goToSlide () {
  setIndex(0)
}

return (
    <div style={style.container}>
      <Gallereact 
        images={images} 
        inputIndex={index}
      />
    	<button onClick={goToSlide}> Back to first slide</button>
    </div>
  )
```



## Contributing

To contribute please read the [CONTRIBUTING.md](https://github.com/div-Leo/gallereact/blob/master/CONTRIBUTING.md) 

## Contributors

* Leonardo Di Vittorio - [GitHub](https://github.com/div-Leo) - [LinkedIn](https://www.linkedin.com/in/leonardo-di-vittorio/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/div-Leo/gallereact/blob/master/LICENSE) file for details.

