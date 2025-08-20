import styled, { css } from "styled-components";
import { Orientation } from "./A4Sheet.types";



const sheetSize = (o: Orientation) =>
    o === "portrait"
    ? css`
        width: 210mm;
        height: 297mm;
      `
    : css`
        width: 297mm;
        height: 210mm;
      `;
      
export const Sheet = styled.div<{
  $orientation: Orientation;
  $gap: string;
  $margin: string;
  $padding: string;
  $bgColor: string;
  $outline: boolean;
}>`


  flex-direction: row;
  ${({ $orientation }) => $orientation === "portrait" && css`
    flex-direction: column;
  `}


  ${({ $orientation }) => sheetSize($orientation)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ $gap }) => $gap};
  padding: 0;
  box-sizing: border-box;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);

  background-color: ${({ $bgColor }) => $bgColor};

  @media print {
    box-shadow: none;
    @page {
      size: A4 ${({ $orientation }) => $orientation};
      margin: 0;
    }
  }
`;



export const PrescriptionWrapper = styled.div<{
  $orientation: Orientation;
}>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $orientation }) =>
    $orientation === "portrait" &&
    css`
      transform: rotate(90deg);
      transform-origin: center;
    `}
`;

