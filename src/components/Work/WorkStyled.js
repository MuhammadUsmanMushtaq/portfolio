import styled from "styled-components";

export const WorkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 60px 20px;
`;

export const Project = styled.div`
  background: #d9f6f1;
  width: 520px;
  height: 600px;
  margin: 20px;
  border-radius: 10px;
  text-align: center;
`;
export const Project2 = styled(Project)`
  background: #f4a690;
`;
export const Project3 = styled(Project)`
  background: #ddeefe;
`;
export const Project4 = styled(Project)`
  background: #e5de6f;
`;
export const Project5 = styled(Project)`
  background: #ed9efa;
  width: 1080px;
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
