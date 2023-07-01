import styled from 'styled-components';

export const StyledHeader= styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .ganbiarra{
    width: 20vw;
    height: 5vw;
  }

  .logo{
    width: 5vw;
    height: 5vw;
    background-image: url("./src/assets/dfLogo.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
  }

  .navbar{ 
    display: flex;
    list-style: none;
    color: #213547;
    column-gap: 1vw;
  }

  .navbar li:hover {
    font-weight:600;
    cursor: pointer;
  }
  `;