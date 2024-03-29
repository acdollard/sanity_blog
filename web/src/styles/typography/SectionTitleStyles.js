import styled from 'styled-components';

export const SectionTitleStyles = styled.h2`
  font-size: 3rem;
  font-family: 'Noto Serif JP', sans-serif;
  font-weight: 600;
  color: var(--darkBlue);
  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
export const TitleStyles = styled.h2`
  font-size: 2rem;
  font-family: 'Noto Serif JP', sans-serif;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
  color: var(--primary);
`;
