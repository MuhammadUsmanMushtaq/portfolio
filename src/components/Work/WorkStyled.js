import styled from "styled-components";

export const WorkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 60px 20px;
`;

export const Project = styled.div`
  background: #b7fcf04f;
  width: 460px;
  height: 600px;
  margin: 20px;
  border-radius: 10px;
  padding: 24px;
`;
export const Project2 = styled(Project)`
  background: #f4a69036;
`;
export const Project3 = styled(Project)`
  background: #ddeefe;
`;
export const Project4 = styled(Project)`
  background: #e5de6f4f;
`;
export const Project5 = styled(Project)`
  background: #a571ae24;
`;
export const Project6 = styled(Project)`
  background: #d7cec636;
`;

export const Button = styled.button`
border 1px solid black;
padding: 8px 16px;
background: #FFF;
margin-right: 16px;
width:120px;
`;
export const DemoButton = styled(Button)`
  background: #fff;
`;

export const Description = styled.div`
  font-size: 18px;
  padding-bottom: 16px;
`;

export const ProjectImg = styled.div`
  & img {
    width: 100%;
    height: 100%;

    padding-bottom: 16px;
  }
`;
