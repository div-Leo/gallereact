const options = [
  // OPTION 1 ----------------------------
  {
    checkboxes: {},
    defaultStyle: {
      outerStyle: {
        height: '95vh',
        width: '70vw',
      },
      containerStyle: {},
      slideStyle: {},
      taglineStyle: {},
      titleStyle: {},
      captionStyle: {},
      dotStyle: {},
      arrowStyle: {},
    },
  },
  // OPTION 2 ----------------------------
  {
    checkboxes: {
      swipe: true,
      displayArrows: false,
      loop: false,
      titles: true,
    },
    defaultStyle: {
      outerStyle: {
        height: '95vh',
        width: '70vw',
      },
      containerStyle: {},
      slideStyle: {
        width: '80%',
        height: '90%',
        margin: '5% 10%',
        boxShadow: '0 2px 20px -1px #2222',
        position: 'relative',
      },
      taglineStyle: {
        background: '#FFF',
      },
      titleStyle: {
        fontWeight: 800,
        fontSize: '1.2rem',
      },
      captionStyle: {},
      dotStyle: {
        width: '25px',
        height: '3px',
        borderRadius: 0,
        margin: '0px',
      },
      arrowStyle: {},
    },
  },
  // OPTION 3 ----------------------------
  {
    checkboxes: {
      swipe: false,
      cover: false,
      arrowOnHover: true,
      displayDot: false,
      transition: false,
    },
    defaultStyle: {
      outerStyle: {
        height: '95vh',
        width: '70vw',
      },
      containerStyle: {},
      slideStyle: {
        width: '90%',
        margin: '0% 5%',
        position: 'relative',
      },
      taglineStyle: {},
      titleStyle: {},
      captionStyle: {},
      dotStyle: {},
      arrowStyle: {
        width: '0',
        height: '0',
        margin: '5px',
        padding: '0',
        borderWidth: '0 0 0 0',
        borderTop: '10px solid transparent',
        borderRight: '10px solid #333',
      },
    },
  },
];

export default options;
