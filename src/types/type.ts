export type TableColumn<TData extends object, TKey extends keyof TData> = {
  accessor: TKey;
  label: string;
  format?: (value: TData[TKey]) => string | JSX.Element;
};

export type Employee = {
  id: number;
  name: Nullable<string>;
  age: Nullable<number>;
  is_manager: Nullable<boolean>;
  start_date: Nullable<string>;
};
