import styled from 'styled-components';
import { Link } from 'gatsby';

export default styled(Link)`
  display: inline-block;
  max-width: 200px;
  svg {
    font-size: 30px;
    path {
      stroke: white;
    }
    max-height: 30px;
    max-width: 30px;
    height: 30px;
    width: 30px;
  }
`;
