import styled from 'styled-components';

export const StatList = styled.ul`
  font-size: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StatItem = styled.li`
  color: transparent;
  background: #504747;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(49, 24, 24, 0.452);

  &:nth-last-child(-n + 2) {
    font-weight: bold;
  }
`;
