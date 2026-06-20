import { UDFKeyLegalEntityPersonal } from "../../types/LegalEntityPersonal";

export interface IRefs<T> {
  source: T;
  value: string;
  active?: boolean;
  primary?: boolean;
}

export interface IUserDefinedFields<T> {
  key: T;
  value?: string;
}
