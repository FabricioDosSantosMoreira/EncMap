export type PrescriptionData = {
  clientName: string;
  
  products: {
    name: string;
    why_to_use: string[];
    how_to_use: string;
    observation: string;
    alert: string;
  }[];
};
