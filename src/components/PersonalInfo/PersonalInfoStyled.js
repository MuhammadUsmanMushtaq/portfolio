import styled from "styled-components";

export const PersonalInfoWrapper = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 400px;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 8px;
`;

export const Image = styled.div`
  & img {
    width: 200px;
    height: 200px;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 12px;
  margin: 16px  16px 0 0 ;
  &:hover {
    color:  #008bf8;
  }
  }
`;
