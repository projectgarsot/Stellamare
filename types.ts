export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  pairing: string;
  image: string;
  variant?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CompanyDetail {
  label: string;
  value: string;
}

export type DocType = 'balance' | 'income';

export interface FinancialDoc {
  id: string;
  year: string;
  type: DocType;
  title: string;
  url: string;
}