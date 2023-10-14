import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center; // center horizontally
    align-items: center;     // center vertically
    height: 100vh;           // take up full viewport height
    background: linear-gradient(to bottom, #e9e9e9, #d3d3d3);
  }
`;

export default GlobalStyles;


export const Grid = styled.div`
  width: 60%;
  height: 80vh; // or whatever height you want
  margin: 0 auto; // This will center the Grid horizontally
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px; 
`;