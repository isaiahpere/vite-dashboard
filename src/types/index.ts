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
