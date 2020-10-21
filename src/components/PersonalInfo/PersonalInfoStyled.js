import styled from "styled-components";

export const PersonalInfoWrapper = styled.div`
    padding: 150px;
    margin: 0 auto;
    background-color: #100772;
    text-align: center;
    color: #fff;  
    @media screen and (max-width: 768px) {
      padding:32px 24px;
  }
`;

export const Title = styled.h1`
  margin: 8px auto;
  max-width: 500px;
  
`;

export const Image = styled.div`
  & img {
    width: 200px;
    height: 200px;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 12px;
  margin: 16px  16px 0 0 ;
  &:hover {
    color:  #008bf8;
  }
  }
`;
