export interface ExpensesByCategory{
    salaries: number;
    supplies: number;
    services: number;
}
export interface Month{
    id: string;
    month: string;
    revenue: string;
    nonOperationalExpenses: number;
    operationalExpenses: number;
    expenses: number;
}
export interface Day {
  id: string;
  date: string;
  revenue: string;
  expenses: number;
}
export interface GetKpisResponse{
    id: string;
    _id: string;
    __v: number;
    totalPoint: number;
    totalRevenue: number;
    totalExpenses: number;
    expensesByCategory:ExpensesByCategory
    monthlyData:Array<Month>
}
export interface GetProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}
export interface GetTransactionsResponse {
  id: string;
  _id: string;
  __v: number;
  buyer: string;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}