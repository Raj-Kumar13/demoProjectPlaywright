import { sourceLegalEntityPersonal, stateCode, subTypeCode, titleCode, UDFKeyLegalEntityPersonal } from "../types/legalEntityPersonal";
import { Irefs, IuserDefinedFields } from "./IcommonFields";

export interface IlegalEntitiesPersonal {
  ifmodifiedSince?: string,
  id?: string;
  refs?: Irefs<sourceLegalEntityPersonal>[];
  userDefinedFields?: IuserDefinedFields<UDFKeyLegalEntityPersonal>[];
  stateCode: stateCode;
  subTypeCode?: subTypeCode;
  parentID?: string;
  creditRiskScoreCode?: string;
  csdListLeCd?: string;
  loadedFromExternalSource?: boolean;
  customData?: IcustomData;
  contactDetails?: IcontactDetails[];
  titleCode?: titleCode;
  firstName?: string;
  middleName?: string;
  surName: string;
  initials?: string;
}

export interface IcontactDetails {
  telephoneNumbers?: ItelephoneNumbers[];
  workTelephoneNumber?: string;
  emailAddress?: string;
  preferredMethodOfContactTypeCode?: string;
}

export interface ItelephoneNumbers {
  type: string;
  number: string;
}

export interface IcustomData {
  customeText1?: string;
  customeText2?: string;
  customBoolean1?: boolean;
  customBoolean2?: boolean;
}
