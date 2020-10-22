import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  padding: 16px 16px;
  // position: fixed;
  align-items:center;
  z-index:100;
  right:0;
  top:0;
  left:0;
  background-color: #100772;
  a {
    color:#fff;
    padding:0 16px; 
    cursor:pointer;
  }
`;

export const Logo = styled.div`
  width:90px;
  height:90px;
  & img {
    width: 100%;
    height: 100%;
  }
`;


export const Links = styled.div`
  flex:1;
  text-align: right;
`;

export const Link = styled.a`
  padding: 0 8px;
  margin: 0 32px;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  font-size: 14px;
  &:hover {
    color: red;
  }
`;
