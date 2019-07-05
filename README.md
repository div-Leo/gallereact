# Gallereact - React slider

> Custom image slider

Gallereact is a complete ready to use gallery slider, with lot of possible customizations. It works based on background images, which allows a better ration managing.  Just styling a div that contains the component with a height and a width the images will fit on that.

## Getting started

```bash
npm install gallereact
```

### Example

```jsx
import Gallereact from 'gallereact';

const MyComponent = () => {
  const images = [
    {image: 'http://image.url/1'},
    {image: 'http://image.url/2'}
  ];
  
  const style = {
    container: {
      width: '60vw',
      height: '80vh'
    }
  }
                  
  return (
    <div style={style.container}>
      <Gallereact images={images} />
    </div>
  )
}

```



## Props

| Prop name        |    Type    | Default | Required |                         Description                          |
| ---------------- | :--------: | :-----: | :------: | :----------------------------------------------------------: |
| `index`          |   Number   |    -    |  false   |            Input index to go to a specific slide.            |
| `autoPlay`       |  Boolean   |  false  |  false   |                       Slider auto play                       |
| `duration`       |   Number   |  5000   |  false   |      When auto play determines the transition duration       |
| `transition`     |  Boolean   |  true   |  false   |         Allow animated transition on slide change .          |
| `loop`           |  Boolean   |  true   |  false   | If true, onced reached the end it will re-start from the beginnign. Ignored if `swipe` is true. |
| `cover`          |  Boolean   |  true   |  false   | Bakcground-Image style. If false the applyed style is "*contain*". |
| `swipe`          |  Boolean   |  false  |  false   |                     Allow Swipe action.                      |
| `arrowOnHover`   |  Boolean   |  false  |  false   |                     Show arrow on hover.                     |
| `displayDot`     |  Boolean   |  true   |  false   |                          Show dots.                          |
| `displayArrow`   |  Boolean   |  true   |  false   |                         Show Arrows.                         |
| `primaryColor`   |   String   | '#CCC'  |  false   | Color to apply on the default arrow and dot - must be valid color ('black', '#000', rgb(0,0,0)). |
| `secondaryColor` |   String   | '#333'  |  false   | Color to apply on the default active dot - must be valid color ('black', '#000', rgb(0,0,0)). |
| `containerStyle` |   Object   |    -    |  false   |               Style to apply on the container.               |
| `slideStyle`     |   Object   |    -    |  false   |             Style to apply on the single slide.              |
| `dotStyle`       |   Object   |    -    |  false   |                 Style to apply on the dots.                  |
| `arrowStyle`     |   Object   |    -    |  false   |                Style to apply on the arrows.                 |
| `taglineStyle`   |   Object   |    -    |  false   |                Style to apply on the tagline.                |
| `titleStyle`     |   Object   |    -    |  false   |             Style to apply on the tagline title.             |
| `captionStyle`   |   Object   |    -    |  false   |            Style to apply on the tagline caption.            |
| `arrowLeftImg`   | .png\|.svg |    -    |  false   | Image for the left arrow. It will accepts 'url', .jpeg, .png and  .svg |
| `arrowRightImg`  | .png\|.svg |    -    |  false   | Image for the right arrow. It will accepts 'url', .jpeg, .png and .svg |
| `callback`       |  Function  |    -    |  false   |       Callback function on slide change  *@param {i}*        |
| `images`         |  Image[]!  |    -    |   true   |               Array of objects of type Image.                |



### Image 

| Prop name |  Type   | Default | Required |     Description      |
| --------- | :-----: | :-----: | :------: | :------------------: |
| `image`   | String! |    -    |   true   |   Url of the image   |
| `title`   | String  |    -    |  false   |  Title of the image  |
| `caption` | String  |    -    |  false   | Caption of the image |



## Contributing

To contribue please read the [CONTRIBUTING.md](https://github.com/Leon31/gallereact/blob/master/CONTRIBUTING.md) 

## Contributors

* Leonardo Di Vittorio - [GitHub](https://github.com/Leon31) - [LinkedIn](https://www.linkedin.com/in/leonardo-di-vittorio/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Leon31/gallereact/blob/master/LICENSE) file for details.

