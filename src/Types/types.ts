import { ReactNode } from "react";

export interface InputTypesProps {
  required: boolean;
  type: string;
  placeholder: string;
  label: string;
  errorMessage: string;
  authCard: any;
  setAuthCard: any;
}
