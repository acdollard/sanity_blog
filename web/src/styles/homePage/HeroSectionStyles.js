import styled from 'styled-components';

export const HeroSectionStyles = styled.div`
  min-height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--secondaryLight);;
  .container {
    height: 100%;

  }
  h1 {
    color: var(--darkBlue);
  }

  .hero__wrapper {
    width: 100%;
    height: 100%;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;

      z-index: -1;
    }
    .left {
      width: 50%;
      padding: 50px 0;

      .hero__heading {
  
        font-size: 4rem;
        font-family: 'Noto Serif JP', sans-serif;
        font-weight: '700';
        margin: 0.2rem 0;
      }
      .hero__text {
        max-width: 500px;
      }
      .hero__button {
        margin-top: 1.5rem;
      }
    }
    .right {
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      height: 100%;
      .hero__image {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column-reverse;
      padding-top: 80px;
      padding-bottom: 80px;
      &::after {
        width: 100%;
      }
      .right {
        position: initial;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        .hero__image {
          height: 300px;
          margin: 0 auto;
        }
      }
      .left {
        width: 100%;
        margin-top: 1rem;
        padding: 0;
        .hero__heading {
          max-width: 330px;
          font-size: 3rem;
        }
      }
    }
  }
`;
