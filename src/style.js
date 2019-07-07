import styled from 'styled-components';

export const S_Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const S_Gallery = styled.div`
  height: 90%;
  overflow: hidden;
  margin: 0 auto;
  white-space: nowrap;
`;

export const S_Slider = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  transform: translateX(
    ${({ sliderWidth, index, translateDrag = 0 }) => `${-(index * sliderWidth) + translateDrag}px`}
  );
  transition: ${({ transition, translateDuration = 0.5 }) =>
    transition ? `transform cubic-bezier(1, 1.40, .70, .80) ${translateDuration * 0.5}s` : 'none'};
`;

export const S_Slide = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${({ cover }) => (cover ? 'cover' : 'contain')};
`;

export const S_Tagline = styled.div`
  background: #fffa;
  color: #333;
  text-align: center;
  width: 100.5%;
  position: absolute;
  padding: 15px 20px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const S_Title = styled.div`
  margin: 10px;
  margin-bottom: 5px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const S_Caption = styled.p`
  width: 100%;
  white-space: normal;
`;

export const S_Arrows = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translate(0, -100%);
  user-select: none;
`;

export const S_Arrow = styled.div`
  width: 40%;
  height: 100%;
  cursor: pointer;
  align-items: center;
  display: flex;
  opacity: ${({ hover }) => (hover ? '0' : '1')};
  justify-content: ${({ direction }) => (direction === 'left' ? 'flex-start' : 'flex-end')};
  img {
    width: 40px;
    transform: translate(0, -50%);
    transition: opacity 0.4s;
  }
  &:hover {
    opacity: 1;
  }
`;

export const S_ArrowIcon = styled.div`
  border: solid ${({ primaryColor }) => primaryColor};
  border-width: 0 4px 4px 0;
  display: ${({ displayArrows }) => (displayArrows ? 'flex' : 'none')};
  margin: 20px;
  padding: 7px;
  transform: rotate(${({ direction }) => (direction === 'left' ? '135deg' : '-45deg')});
`;

export const S_DotsContainer = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 10%;
  margin: auto;
  display: ${({ displayDot }) => (displayDot ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 10;
  transform: translate(0, -0%);
`;

export const S_Dot = styled.div`
  background: ${({ active, colors }) => (active ? colors.b : colors.a)};
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 50%;
`;
