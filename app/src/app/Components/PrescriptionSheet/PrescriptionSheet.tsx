"use client";
import React from "react";

import { PrescriptionContainer, Header, ProductList, 
  ProductCard, HeaderTitle, HeaderBanner, HeaderLogo, HeaderSpan, 
  HeaderBannerIcon, PacientSpan, PacientIcon, PacientName, PacientIconStyles, 
  PrescriptionContent, ProductSpan, ProductIcon, ProductName, ProductIconStyles, 
  ProductWhyToUseContainer, ProductWhyToUse, WhyToUseList, WhyToUseIconStyles, 
  WhyToUseIconStyleContainer} from "./PrescriptionSheet.styles";
import { PrescriptionSheetProps } from "./PrescriptionSheet.types";
import LogoAssociadas from '@/public/images/logo/logo-rede-associadas.png';

import BlueCheckList from '@/public/images/blue-checklist.png';
import OrangeCheckList from '@/public/images/orange-checklist.png';


export default function PrescriptionSheet({ data }: PrescriptionSheetProps) {
  return (
    <PrescriptionContainer>

      <Header>

        <HeaderSpan>
          <HeaderTitle>PLANO DE<br/> <span>MEDICAÇÃO</span></HeaderTitle>
          <HeaderLogo src={LogoAssociadas} alt='Logo Associadas' />
        </HeaderSpan>
       
        <HeaderBanner>
          <HeaderBannerIcon $displaced={false} src={BlueCheckList} alt='Top Banner Icon'/>
          <HeaderBannerIcon $displaced={true} src={OrangeCheckList} alt='Bottom Banner Icon'/>
        </HeaderBanner>
      </Header>

      <PrescriptionContent>
        <PacientSpan>
          <PacientIcon>
            <PacientIconStyles></PacientIconStyles>
          </PacientIcon>

          <PacientName>{data.clientName}</PacientName>

          



        </PacientSpan>


      <ProductList>
        {data.products.map((product, idx) => (
          <ProductCard key={idx}>

            <ProductSpan>
              <ProductIcon>
                <ProductIconStyles></ProductIconStyles>
              </ProductIcon>

              <ProductName $isNameLong={product.name.length > 56}>{product.name}</ProductName>
            </ProductSpan>

            <ProductWhyToUseContainer>
              {product.why_to_use.map((reason, rIdx) => (

                <WhyToUseList>
                  <WhyToUseIconStyleContainer>
                    <WhyToUseIconStyles />
                  </WhyToUseIconStyleContainer>
                  
                  <ProductWhyToUse key={rIdx}>{reason}</ProductWhyToUse>
                </WhyToUseList>
              ))}


            </ProductWhyToUseContainer>
         

            <p style={{'marginTop': '45px'}}></p>

            <p><strong>How to use:</strong> {product.how_to_use}</p>
            {product.observation && (
              <p><strong>Observation:</strong> {product.observation}</p>
            )}
            {product.alert && (
              <p className="alert">{product.alert}</p>
            )}
          </ProductCard>
        ))}
      </ProductList>
      </PrescriptionContent>
    </PrescriptionContainer>
  );
}
