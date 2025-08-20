'use client';

import React, { useRef } from "react";
import A4Sheet from "@/components/A4Sheet/A4Sheet";
import PrescriptionSheet from "@/components/PrescriptionSheet/PrescriptionSheet";

import { loadPrescriptionData } from "@/lib/utils/utils";
import { PageContainer } from "./page.styles";
import PageLayout from "@/components/Layouts/Page/PageLayout";
import { PrescriptionWrapper } from "@/components/A4Sheet/A4Sheet.styles";

export default function Page() {
  const prescriptions = loadPrescriptionData();
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (!printRef.current) return;
  }

  return (
    <PageLayout>
      <PageContainer>
        {/* <button onClick={handlePrint}>🖨️ Print Prescription</button> */}
       

            {prescriptions.map((p, idx) => (
             
                <PrescriptionSheet key={idx} data={p} />
       
            ))}
   
      </PageContainer>
    </PageLayout>
  );
}
