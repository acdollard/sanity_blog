import styled from 'styled-components';

export const ParagraphTextStyles = styled.p`
font-family: 'Noto Serif JP';
color: var(--darkBlue);
  font-size: 1.8rem;
  line-height: 1.5;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }

  .homepageText { 
    color: var(--white);
  }
`;
