export enum ApplicationTypes{
    SecuritySchedule= 'SS',
    FacilityAgreement= 'FA',
    Release = 'REL',
    NewToBankLeanding='NTB'
}

export enum LK_CSD_LIST_TYPE{
    InApplication='IA',
    InAssessment='IS',
    ConditionalPrepared='CA',
    Approved='AP',
    DocumentsPrepared='DP',
    DocumentIssued= 'DI',
    DocumentVerified='DC',
    ReadyForFunding='RF',
    Funded='FN',
    Complete='CM',
    Cancelled='CN',
    Error='ER',
    Declined='DE'
}
export type sourcCollection = 'CAPACC'|'LEXAPP';
export type UDFKeyCollections = 'Collection.EventVersionID' | 'Collection.NatureOfApplication' | 'Collection.LetterOfOfferIssued'