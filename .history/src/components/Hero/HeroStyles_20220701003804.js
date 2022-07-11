import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80vh;
  padding: 0 100px;
`;

export const Div1 = styled.div`
  width: fit-content;
  margin-right: 100px;
`;

export const Div2 = styled.div`
  border-radius: 50%;
  width: 600px;
  background-color: white;
`;
export const HeroImage = styled(Image)`
  border-radius: 50%;
  background-color: white;
`;

export const Hero_P = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  max-width: 800px;
  height: fit-content;
  padding: 20px 0;
  font-size: 14px;
  line-height: 20px;
  color: #bebebe;
`;
