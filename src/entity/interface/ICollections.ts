import { ApplicationTypes, LK_CSD_LIST_TYPE, sourcCollection, UDFKeyCollections } from "../../types/Collections";
import { stateCode } from "../../types/LegalEntityPersonal";
import { IRefs, IUserDefinedFields } from "./ICommonFields";


export interface ICollection {
    ifUnmodifiedSince?: string,
    id: string;
    refs?: IRefs<sourcCollection>[];
    userDefinedFields?: IUserDefinedFields<UDFKeyCollections>[];
    stateCode: stateCode;
    reportingCodes?: string[];
    typeCode: ApplicationTypes;
    externalReferenceIdentifier?: string;
    nominalCollateralAmount?: string,
    nominalExposureAmount?: string,
    propsalDate?: string;
    expirationDate?: string
    acceptanceDate?: string
    acceptanceReviewDate?: string
    acceptanceDays: string
    csdListCollCd?: LK_CSD_LIST_TYPE
}

export interface ICollectionMandatoryFields
    extends Partial
    <Pick<ICollection, "stateCode" | "id" | "typeCode">> {

}
