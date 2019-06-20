# Gallereact

> Custom image slider



| Prop name      | Default |    Type    |                                                  Description | Required |
| -------------- | :-----: | :--------: | -----------------------------------------------------------: | :------: |
| autoPlay       |  false  |  Boolean   |                                             Slider auto play |  false   |
| duration       |  5000   |   Number   |            When auto play determines the transition duration |  false   |
| transition     |  true   |  Boolean   |                  Allow animated transition on slide change . |  false   |
| cover          |  true   |  Boolean   | Bakcground-Image style. If false the applyed style is "*contain*". |  false   |
| swipe          |  false  |  Boolean   |                                          Allow Swipe action. |  false   |
| arrowHover     |  false  |  Boolean   |                                         Show arrow on hover. |  false   |
| containerStyle |    -    |   Object   |                             Style to apply on the container. |  false   |
| slideStyle     |    -    |   Object   |                          Style to apply on the single slide. |  false   |
| dotStyle       |    -    |   Object   |                                  Style to apply on the dots. |  false   |
| arrowStyle     |    -    |   Object   |                                Style to apply on the arrows. |  false   |
| taglineStyle   |    -    |   Object   |                               Style to apply on the tagline. |  false   |
| titleStyle     |    -    |   Object   |                         Style to apply on the tagline title. |  false   |
| captionStyle   |    -    |   Object   |                       Style to apply on the tagline caption. |  false   |
| index          |    -    |   Number   |                       Input index to go to a specific slide. |  false   |
| loop           |  true   |  Boolean   |  Onced reached the end  will re-start from the beginnign. If |  false   |
| primary        | '#CCC'  |   String   | Color to apply on the default arrow and dot - must be valid color ('black', '#000', rgb(0,0,0)). |  false   |
| secondary      | '#333'  |   String   | Color to apply on the default active dot - must be valid color ('black', '#000', rgb(0,0,0)). |  false   |
| arrowLeftImg   |    -    | .png\|.svg | Image for the left arrow. It will accepts 'url', .jpeg, .png and  .svg |  false   |
| arrowRightImg  |    -    | .png\|.svg | Image for the right arrow. It will accepts 'url', .jpeg, .png and .svg |  false   |
| callback       |    -    |  Function  |              Callback function on slide change  *@param {i}* |  false   |
| titles         |    -    | string![]  | Array of title for each image, if it's passed, any index can be null. |  false   |
| captions       |    -    | string![]  | Array of captions for each image, if it's passed, any index can be null. |  false   |
| images         |    -    |   url[]!   |                                             Array of images. |   true   |

