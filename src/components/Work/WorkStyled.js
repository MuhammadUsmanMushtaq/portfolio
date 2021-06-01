import styled from "styled-components";

export const WorkWrapper = styled.div`
  padding: 84px 0;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
   @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;

export const Project = styled.div`
  width:400px;
  margin: 32px;
  background: #ebf6ff;
  padding: 24px;
  font-size: 18px;
  border-radius: 16px;
  &:hover img {
    transform: scale(1.04, 1.04);
  }
  &:hover a {
    color: #100772;
  }
  @media screen and (max-width: 768px) {
    padding:16px;
    width:100%;
    margin:16px 0;
  }
`;

export const Button = styled.a`
  margin-bottom: 8px;
  display: block;
  font-weight: 600;
  font-size: 18px;
  color: #000;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
`;

export const Content = styled.div`
  font-size: 18px;
  padding: 16px 0;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
`;
export const ProjectTitle = styled.h3`
  margin: 0;
  margin-bottom: 8px;
  padding: 0;
`;

export const ProjectImg = styled.div`
  border-radius: 6px;
  // padding: 48px 120px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    transition: all 0.25s ease-in-out;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const Tools = styled.p`
  font-size: 16px;
  color: #777;
  // font-style: italic;
`;
