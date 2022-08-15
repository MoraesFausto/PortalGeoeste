import { Category, Map } from "../types/types";

export interface User{
  id:String,
  email:String
}
export interface DashboardProps {
  id: string;
  url: string;
  downloadPath: string;
  legend: string;
  referency: string;
}

export interface ElementProps {
  ctgs: Category | null;
  id?: string;
}

export interface GraphicProps {
  graphic: Map | null;
  data: any;
}

export interface Dash{
  map: Map | null;
  DashProps: DashboardProps;
}
