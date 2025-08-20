
import path from "path";
import jsonData from "@/../data.json";

import { PrescriptionData } from "@/types/PrescriptionData";

export function loadPrescriptionData(): PrescriptionData[] {

  return jsonData;
}
