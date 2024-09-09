export interface StudyMaterial {
  accountingId: string;
  description: string;
  glCode: string;
  imageURL: string;
  isAvailable: boolean;
  isCommingSoon: boolean;
  isCompWithReg: boolean;
  isElectronicDelivery: boolean;
  isPreOrder: boolean;
  isShippable: boolean;
  isShowMore?: boolean;
  price: number;
  orderId?: string;
  productCode: string;
  productId: string;
  relatedPart: string;
  shortDescription: string;
  showInRegStudyMatSelection: boolean;
  sortCode: string;
  title: string;
  downloadURL: string;
  wasOrderedWithReg: boolean;
  isComingSoon: boolean;
  isGARPLearningAddOnOwned: boolean;
  isOutOfStock: boolean;
  isUnPaidOrder: boolean;
  materialType: string;
  selected: boolean;
  wasPurchased: boolean;
  comingSoonDate?: string;
  leadGenURL?: string;
  registrationDate?: string;
  orderDate?: string;
  preOrderShipDate?: string;
  eBook: EBook;
  canPurchase: boolean;
  isOwned: boolean;
}

export interface EBook {
  accountingId: string;
  eBookItems: EBookItems;
  expireDate: number;
  isAPI: boolean;
  key: string;
  keyStatus: string;
  productCode: string;
  provider: string;
  title: string;
  type: string;
  year: number;
}

export interface EBookItems {
  title: string;
  vendorId: number;
}
