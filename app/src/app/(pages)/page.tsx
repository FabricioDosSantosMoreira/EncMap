"use client";

import React, { useRef } from "react";
import A4Sheet from "@/components/A4Sheet/A4Sheet";
import PrescriptionSheet from "@/components/PrescriptionSheet/PrescriptionSheet";

import { loadPrescriptionData } from "../Lib/utils/utils";
import { PageContainer } from "./page.styles";
import PageLayout from "../Components/Layouts/Page/PageLayout";
import { PrescriptionWrapper } from "../Components/A4Sheet/A4Sheet.styles";

export default function Page() {
  const prescriptions = loadPrescriptionData();
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (!printRef.current) return;
  }

  return (
    <PageLayout>
      <PageContainer>
        <button onClick={handlePrint}>🖨️ Print Prescription</button>
        <div ref={printRef}>
          <A4Sheet
            orientation="landscape"
            padding="5mm"
            outline
            gap={"10px"}
          >
            {prescriptions.map((p, idx) => (
              <PrescriptionWrapper key={idx} $orientation="landscape">
                <PrescriptionSheet key={idx} data={p} />
              </PrescriptionWrapper>
            ))}
          </A4Sheet>
        </div>
      </PageContainer>
    </PageLayout>
  );
}
