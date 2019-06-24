import { useEffect, useState } from 'react';

const initialTranslateState = {
  translateDrag: 0,
  translateDuration: 0.5,
  x0: null,
};

const useSwipeAction = (index, sliderWidth, goToSlide) => {
  const [translateState, setTranslateState] = useState(initialTranslateState);

  useEffect(() => {
    document.addEventListener('mouseup', reset, false);
    document.addEventListener('touchend', reset, false);
  },[])

  const reset = () => {
    setTranslateState(initialTranslateState);
  };

  const muve = e => {
    const { clientX } = unify(e)
    if (translateState.x0) {
      const dx = clientX - translateState.x0;
      const s = Math.sign(dx);
      const f = +(s*dx/sliderWidth).toFixed(2);
      if(f > .2) {
        setTranslateState(state => ({
          ...state, x0: null, translateDrag: 0, translateDuration: 1 - f,
        }))
        goToSlide(index - s)
      }
    } else {
      setTranslateState(initialTranslateState);
    }
  };

  const lock = (e) => {
    const { clientX } = unify(e)
    setTranslateState(state => ({...state, x0: clientX, translateDuration: 0}));
  };

  const drag = (e) => {
    if (translateState.x0) {
      const { clientX } = unify(e)
      setTranslateState(state =>({...state, translateDrag: Math.round(clientX - state.x0)}));
    }
  };

  const unify = (e) => e.changedTouches ? e.changedTouches[0] : e;

  const listeners = {
    onTouchStart: lock, 
    onTouchMove: drag, 
    onTouchEnd: muve,
    onMouseDown: lock, 
    onMouseMove: drag, 
    onMouseUp: muve
  }

  return { listeners, translateState }
}

export default useSwipeAction;