import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  height: 300px;
  width: 250px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: grid;
  grid-template-rows: 100px 1fr;
  gap: 5px;
  justify-items: center;
  align-items: center;
`;

export const Avatar = styled.div`
  height: 50px;
  width: 50px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background-color: #f5f5f5;
  * {
    font-size: 1.2rem;
  }
`;
