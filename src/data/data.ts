import { Employee, TableColumn } from "../types/type";

export const rows: Employee[] = [
  {
    id: 1,
    name: "Liz Lemon",
    age: 36,
    is_manager: true,
    start_date: "02-28-1999",
  },
  {
    id: 2,
    name: "Jack Donaghy",
    age: 40,
    is_manager: true,
    start_date: "03-05-1997",
  },
  {
    id: 3,
    name: "Tracy Morgan",
    age: 39,
    is_manager: false,
    start_date: "07-12-2002",
  },
  {
    id: 4,
    name: "Jenna Maroney",
    age: 40,
    is_manager: false,
    start_date: "02-28-1999",
  },
  {
    id: 5,
    name: "Kenneth Parcell",
    age: Infinity,
    is_manager: false,
    start_date: "01-01-1970",
  },
  {
    id: 6,
    name: "Pete Hornberger",
    age: null,
    is_manager: true,
    start_date: "04-01-2000",
  },
  {
    id: 7,
    name: "Frank Rossitano",
    age: 36,
    is_manager: false,
    start_date: null,
  },
  { id: 8, name: null, age: null, is_manager: null, start_date: null },
];

export const columns: Array<TableColumn<Employee, keyof Employee>> = [
  { accessor: "name", label: "Name" },
  { accessor: "age", label: "Age" },
  {
    accessor: "is_manager",
    label: "Manager",
    format: (value) => (value ? "✔️" : "✖️"),
  },
  { accessor: "start_date", label: "Start Date" },
];
