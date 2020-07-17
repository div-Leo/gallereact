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
    return () => {
      document.removeEventListener('mouseup', reset);
      document.removeEventListener('touchend', reset);
    };
  }, []);

  const reset = () => {
    setTranslateState(initialTranslateState);
  };

  const move = e => {
    if (translateState.x0) {
      const { clientX } = unify(e);
      const dragX = clientX - translateState.x0;
      let sign = Math.sign(dragX);
      const difference = +((sign * dragX) / sliderWidth).toFixed(2);
      setTranslateState({ x0: null, translateDrag: 0, translateDuration: 1 - difference });
      if (difference > 0.2) {
        goToSlide(index - sign);
      } else if (difference === 0) {
        const { x, width } = e.target.getBoundingClientRect();
        const positionX = clientX - x;
        sign = Math.sign(width / 2 - positionX);
        goToSlide(index - sign);
      }
    } else {
      setTranslateState(initialTranslateState);
    }
  };

  const lock = e => {
    const { clientX } = unify(e);
    setTranslateState(state => ({ ...state, x0: clientX, translateDuration: 0 }));
  };

  const drag = e => {
    if (translateState.x0) {
      const { clientX } = unify(e);
      setTranslateState(state => ({ ...state, translateDrag: Math.round(clientX - state.x0) }));
    }
  };

  const unify = e => (e.changedTouches ? e.changedTouches[0] : e);

  const listeners = {
    onTouchStart: lock,
    onTouchMove: drag,
    onTouchEnd: move,
    onMouseDown: lock,
    onMouseMove: drag,
    onMouseUp: move,
  };

  return { listeners, translateState };
};

export default useSwipeAction;
