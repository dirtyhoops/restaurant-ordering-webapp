import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: #f8e9e0;
  padding: 40px 0;
`;

export const HeaderText = styled.div`
  font-size: 30px;
`;

export const HeaderImage = styled.div`
  position: relative;
  width: 500px;
  height  500px;
  // background-color: pink;
`;

export const ImageBack = styled.div`
  height: 400px;
  width: 300px;
  background-color: yellow;
  border-radius: 35%;
  position: absolute;
  right: 0;
  top: 0;
  background-image: url('/images/foodback.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ImageFront = styled.div`
  height: 300px;
  width: 300px;
  background-color: red;
  border-radius: 50%;
  border: 10px solid #f8e9e0;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
  background-image: url('/images/foodfront.jpeg');
  background-size: 115%;
  background-position: -40px -90px;
  background-repeat: no-repeat;
`;
