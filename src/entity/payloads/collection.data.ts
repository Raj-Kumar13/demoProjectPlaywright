import { faker } from '@faker-js/faker';
import { ICollection } from "../interface/ICollections";
import { stateCode } from "../../types/LegalEntityPersonal";
import { ApplicationTypes, LK_CSD_LIST_TYPE, sourcCollection, UDFKeyCollections } from "../../types/Collections";
import { IRefs, IUserDefinedFields } from '../interface/ICommonFields';

export const collection = (data: {
  refs?: IRefs<sourcCollection>[];
  userDefinedFields?: IUserDefinedFields<UDFKeyCollections>[];
  stateCode: stateCode;
  reportingCodes?: string[];
  typeCode: ApplicationTypes;
  externalReferenceIdentifier?: string;
  nominalCollateralAmount?: string,
  nominalExposureAmount?: string,
  propsalDate?: string;
  expirationDate?: string;
  acceptanceDate?: string;
  acceptanceReviewDate?: string;
  acceptanceDays?: string;
  csdListCollCd?: LK_CSD_LIST_TYPE
}): ICollection => {
  return {
    ifUnmodifiedSince: `UNF-${faker.date.recent().toISOString()}`,
    id: faker.string.uuid(),
    refs: data.refs ?? [
      {
        source: 'CAPACC',
        value: faker.string.alphanumeric(4),
        active: true,
        primary: true,
      },
    ],
    userDefinedFields: data.userDefinedFields ?? [
      {
        key: 'Collection.EventVersionID',
        value: faker.string.alphanumeric(8),
      },
      {
        key: 'Collection.NatureOfApplication',
        value: faker.string.alphanumeric(8),
      },
      {
        key: 'Collection.LetterOfOfferIssued',
        value: faker.string.alphanumeric(8),
      }
    ],
    stateCode: data.stateCode ?? 'A' as stateCode,
    reportingCodes: data.reportingCodes ?? [],
    typeCode: data.typeCode ?? ApplicationTypes.SecuritySchedule,
    externalReferenceIdentifier: data.externalReferenceIdentifier ?? faker.string.alphanumeric(12),
    nominalCollateralAmount: data.nominalCollateralAmount ?? faker.finance.amount({ min: 1000, max: 5000, dec: 2 }),
    nominalExposureAmount: data.nominalExposureAmount ?? faker.finance.amount({ min: 500, max: 4000, dec: 2 }),
    propsalDate: data.acceptanceDate ?? faker.date.past().toISOString(),
    expirationDate: data.expirationDate ?? faker.date.future().toISOString(),
    acceptanceDate: data.acceptanceDate ?? faker.date.past().toISOString(),
    acceptanceReviewDate: data.acceptanceReviewDate ?? faker.date.recent().toISOString(),
    acceptanceDays: data.acceptanceDays ?? faker.string.numeric(2),
    csdListCollCd: data.csdListCollCd ?? LK_CSD_LIST_TYPE.Approved,
  };
};
