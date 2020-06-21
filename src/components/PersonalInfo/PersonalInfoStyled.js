import styled from "styled-components";

export const PersonalInfoWrapper = styled.div`
  display: flex;
  padding: 120px;
`;

export const Info = styled.div`
  flex: 1;
  margin-right: 100px;
  font-size: 38px;
  letter-spacing: 2px;
  line-height: 52px;
  font-family: "Calibre", sans-serif;
  font-weight: 500;
  font-style: normal;
`;

export const Image = styled.div`
  width: 300px;
  height: 340px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
