import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 16px;
`;

export const Link = styled.a`
  padding: 0 8px;
  margin-right: 16px;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  font-size: 14px;
  &:hover {
    color: red;
  }
`;
