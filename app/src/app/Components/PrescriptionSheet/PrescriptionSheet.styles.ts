
import styled, { css } from "styled-components";
import { Orientation } from "../A4Sheet/A4Sheet.types";
import Image from "next/image";


export const PrescriptionContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 530px;
  height: 680px;


  background-color: #f16d1e;
  

  background-color: #adb4bd;

  border-radius: 12px;
`;

export const Header = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  height: 112px;

  background-color: #04bfad;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  &:after {
    content: '';

    position: absolute;
    bottom: 0;
    left: 0;

    width: 264px;
    height: 6px;

    background-color: #f16d1e;
  }
`;

export const HeaderSpan = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  
  margin-left: 30px;
  margin-top: 30px;
`;

export const HeaderTitle = styled.h1`
  
  font-size: 1.8rem;
  color: #fafad3;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.hvd_comic};
 
  line-height: 32px;

  transform: translateY(-4px);

  z-index: 2;

  span {
    letter-spacing: 1px;
  }
`;

export const HeaderLogo = styled(Image)`
  position: absolute;

  top: 0;
  right: 0;

  height: 36px;
  width: 36px;

  transform: translate(8px, -6px);

  z-index: 1;
`;







export const HeaderBanner = styled.h1`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #505050;

  height: 100%;
  width: 96px;

  margin-right: 36px;

  &:after {
    content: '';

    position: absolute;
    bottom: -48px;

    width: 100%;
    height: 75%;

    border-radius: 45%;

    background-color: #505050;
  }
`;

export const HeaderBannerIcon = styled(Image)<{$displaced: boolean}>`
  position: absolute;

  bottom: -24px;
  left: 12px;

  


  height: 64px;
  width: 64px;

  z-index: 1;

  
  ${({ $displaced }) => $displaced && css`
     
    z-index: 2;

    transform: translate(2px, 4px);
  `}
`;

export const PrescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin-top: 24px;
  margin-left: 24px;

  height: calc(100% - 136px);
  width: calc(100% - 24px - 36px);

`

export const PacientSpan = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  gap: 6px;

  width: 100%;
  height: 24px;
`

export const PacientIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 24px;
  height: 24px;
`

export const PacientIconStyles = styled.div`
  position: relative;
  top: 6px;

  width: 24px;
  height: 12px; 

  border: 4px solid #fafad3;
  border-bottom: none; 
  border-radius: 36px 36px 0 0;

  &:after {
    content: '';

    position: absolute;
    top: -16px;

    width: 8px;
    height: 8px;

    border-radius: 50%;
    border: 4px solid #fafad3;
  }
  
`


export const PacientName = styled.h2`
  
  font-size: 1.6rem;
  color: #fafad3;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.tilt_neon};
 
  transform: translateY(4px);
`


export const ProductCard = styled.div`
  background: #fff;

  
  //padding-left: 6px;
  padding-top: 6px;
`


export const ProductList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  overflow-y: none;
`;


export const ProductSpan = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  //margin-left: 12px;

  gap: 12px;
`;

export const ProductName = styled.h3<{$isNameLong: boolean}>`
  
  font-size: 1rem;
  color: #000000;

  font-family: ${({ theme }) => theme.fonts.tilt_neon};
 

  line-height: 16px;

  
  ${({ $isNameLong }) => !$isNameLong && css`
    transform: translateY(8px);
  `}
`;


export const ProductIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 20px;
  height: 20px;
`;

export const ProductIconStyles = styled.div`
  position: relative;
  top: 0px;

  width: 20px;
  height: 16px; 

  border: 3px solid #000000;
  border-radius: 0 0 0 12px;

  border-top-width: 0px;
  border-right-width: 0px;

  &::after {
    content: '';

    position: absolute;
    right: -3px; /* alinhada ao fim da linha horizontal */
    bottom: -8px;

    width: 0;
    height: 0;

    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 7px solid #000; /* cor da seta */
  }
`