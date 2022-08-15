export type Referency = {
  src: string;
  fontes: string;
  elaboracao: string;
}

export type TLegend = {
  atr: string;
  color: string;
}

export type Legend = {
  content: TLegend[];
}

export type Map = {
  map_id: string;
  map_desc: string;
  map_atr: string | null;
  map_ctg: string;
  map_refs: Referency;
  map_legs: Legend;
  choropleth?: number;
}

export type SubCategory = {
  subctg_id: number;
  subctg_desc: string;
  sub_ctg_id: number;
  subctg_maps: Map[];
  sel: boolean;
  transform: string;
}

export type Category = {
  ctg_id: number;
  ctg_desc: string;
  ctg_subs: SubCategory[];
}

export type Member = {
  id:number,
  name:string,
  lattes:string,
  git?: string,
}

export type Team = {
  id:number,
  description:String,
  members:Member[],
}
