export interface Item {
  id: number;
  title: string;
  description: string;
  img: string;
  type: string;
}

export type Items = Array<Item>;
