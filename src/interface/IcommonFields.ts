import { UDFKeyLegalEntityPersonal } from "../types/legalEntityPersonal";

export interface Irefs<T> {
  source: T;
  value: string;
  active?: boolean;
  primary?: boolean;
}

export interface IuserDefinedFields<T> {
  key: T;
  value?: string;
}
