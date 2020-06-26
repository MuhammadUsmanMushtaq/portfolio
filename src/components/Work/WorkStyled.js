import styled from "styled-components";

export const WorkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 16px 0;
`;

export const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  padding: 24px 0;
  &:hover img {
    transform: scale(1.04, 1.04);
  }
  &:hover a {
    color: #008bf8;
  }
  @media screen and (max-width: 800px) {
    padding: 12px 0;
  }
`;

export const Button = styled.a`
  margin-bottom: 8px;
  display: block;
  font-weight: 600;
  font-size: 12px;
  color: #000;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
`;

export const Content = styled.div`
  font-size: 18px;
  padding-bottom: 16px;
  width: 260px;
  margin-right: 100px;

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
  width: 500px;
  height: 400px;
  background: #edf5fc;
  border-radius: 6px;
  padding: 48px 120px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    transition: all 0.25s ease-in-out;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 300px;
    margin: 0;
    padding: 0;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const Tools = styled.p`
  font-size: 12px;
  font-style: italic;
`;
