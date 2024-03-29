import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  padding: 16px 16px;
  // position: fixed;
  align-items: center;
  z-index: 100;
  right: 0;
  top: 0;
  left: 0;
  background-color: #100772;
  a {
    color: #fff;
    padding: 0 8px;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  flex: 1;
  & img {
    width: 90px;
    height: 90px;
  }
`;

export const Links = styled.div`
  flex: 1;
  text-align: right;
`;

export const MenuItems = styled.a`
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
