/* ValueOf example
 * type Foo = { a: string, b: number };
 * type ValueOfFoo = ValueOf<Foo>; // string | number
 */
export type ValueOf<T> = T[keyof T];

export interface IChartData {
  name: string;
  users?: number;
  products?: number;
  revenue?: number;
  ration?: number;
  profit?: number;
  [key: string]: ValueOf<IChartData>;
}

export interface IChartBox {
  color: string;
  icon: string;
  title: string;
  number: string;
  dataKey: string;
  percentage: number;
  chartData: IChartData[];
  [key: string]: ValueOf<IChartBox>;
}

export interface IBarChartBox {
  title: string;
  color: string;
  dataKey: string;
  chartData: IChartData[];
  [key: string]: ValueOf<IBarChartBox>;
}

export interface IInfoUser {
  username: string;
  fullname: string;
  email: string;
  phone: string;
  status: string;
}

export interface IInfoProduct {
  productId: string;
  color: string;
  price: string;
  producer: string;
  export: string;
}

export interface IUserData {
  name: string;
  visits: number;
  clicks: number;
}

export interface IProductData {
  name: string;
  visits: number;
  orders: number;
}
