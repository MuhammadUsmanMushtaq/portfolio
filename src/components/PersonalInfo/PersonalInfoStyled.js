import styled from "styled-components";

export const PersonalInfoWrapper = styled.div`
    padding:60px 0 150px;
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

export const LinkContact = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 12px;
  margin: 16px 16px;
  display:inline-block;
  &:hover {
    color:  #008bf8;
  }
  }
`;


export const MyWork = styled.div`
    & a {
      display:block;  
      margin: 32px auto;
      padding:16px 40px;
      width: 100px;
      border: 1px solid #fff;    
      border-radius: 8px;
      cursor: pointer;
    }
`;