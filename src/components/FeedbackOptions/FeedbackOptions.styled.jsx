import styled from 'styled-components';

export const FeedbackGroup = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FeedbackBtn = styled.button`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: transparent;
  text-transform: capitalize;
  box-shadow: -1px 3px 8px 5px #0a3361, 2px 5px 16px 0px #0b325e,
    5px 5px 15px 5px rgba(0, 0, 0, 0);

  &:nth-child(1):hover {
    background-color: #1bcc1b;
    color: white;
  }
  &:nth-child(2):hover {
    background-color: #f5de0b;
    color: white;
  }
  &:nth-child(3):hover {
    background-color: #f5420b;
    color: white;
  }
`;
