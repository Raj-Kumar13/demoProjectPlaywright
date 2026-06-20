export type stateCode = 'A' | 'DR' | 'I' | 'R'

export enum subTypeCode {
  Individual = 'IND',
  SoleTrader = 'SOL',
  Partnership = 'PTRN',
  Trust = 'TST',
  superannuationFund = 'SUP'
}

export enum titleCode {
  Captain = 'Capt',
  Mrs = 'Mrs',
  Miss = 'Miss',
  Professor = 'Prof',
  Doctor = 'Doc'
}

export type UDFKeyLegalEntityPersonal = 'legalEntityP.kycStatus' | 'legalEntityP.kycVerLEvel' | 'legalEntityP.EventVersionID'

export type sourceLegalEntityPersonal = 'CAPCIS';
