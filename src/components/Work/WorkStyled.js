import styled from "styled-components";

export const WorkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 60px 20px;
`;

export const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  padding: 24px;
  &:hover img {
    transform: scale(1.04, 1.04);
  }
`;

export const Button = styled.a`
  margin-bottom: 8px;
  display: block;
  font-weight: 600;
  font-size: 12px;
  color: #000;
  text-decoration: none;
  &:hover {
    color: #008bf8;
  }
`;

export const Description = styled.div`
  font-size: 18px;
  padding-bottom: 16px;
  width: 260px;
  margin-right: 100px;
`;
export const ProjectTitle = styled.h3`
  margin: 0;
  margin-bottom: 16px;
  padding: 0;
`;

export const ProjectImg = styled.div`
  width: 500px;
  height: 400px;
  background: #edf5fc;
  padding: 48px 120px;
  & img {
    width: 100%;
    height: 100%;
    transition: all 0.25s ease-in-out;
  }
`;
