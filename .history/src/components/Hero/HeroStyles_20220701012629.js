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

export const HeroImageDiv = styled.div`
  border: 5px solid #fff;
  border-radius: 50%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Div2 = styled.div`
  width: 600px;
  object-fit: contain;
`;

export const HeroImage = styled(Image)`
  background-color: black;
  border-radius: 50%;
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
