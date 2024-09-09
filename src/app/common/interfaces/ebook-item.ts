export interface EbookItem {
  title: string;
  vendorId: string;
  accessURL?: {
    url?: string;
    statusCode?: number;
    statusMessage?: string;
  };
}
