export type ProjectCategory =
  | 'mega-commercial'
  | 'restaurants-cafes'
  | 'industrial-warehouses'
  | 'corporate-administrative';

export type ProjectStatus = 'completed' | 'in-progress';

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  area: string;
  category: ProjectCategory;
  categoryLabel: string;
  scope: string[];
  description: string;
  image: string;
  gallery?: string[];
  isFeatured?: boolean;
  status?: ProjectStatus;
}

export interface Client {
  name: string;
  nameAr: string;
  logo: string;
  category: string;
  desc: string;
  query?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
}

export interface CompanyStat {
  value: string;
  label: string;
  sub: string;
}

export interface CompanyInfo {
  nameAr: string;
  nameEn: string;
  shortName: string;
  crNumber: string;
  vatNumber: string;
  nationalId: string;
  phone: string;
  phoneInternational: string;
  email: string;
  mainAddress: string;
  branchAddress: string;
  whatsappUrl: string;
  stats: CompanyStat[];
}
