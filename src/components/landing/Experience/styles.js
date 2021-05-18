import styled from 'styled-components';

import { VerticalTimeline }  from 'react-vertical-timeline-component';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const TimeLine = styled(VerticalTimeline)`
  &::before {
    background: #ddd !important;
  }
`