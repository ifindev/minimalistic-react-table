import React, { ReactNode, useMemo, useState } from "react";
import { TableColumn } from "../../types/type";
import Pagination from "../Pagination/Pagination";

type Props<TData extends { id: number | string }> = {
  rowsPerPage: number;
  columns: TableColumn<TData, keyof TData>[];
  rows: TData[];
  initialActivePage?: number;
};

export default function Table<TData extends { id: number | string }>({
  rowsPerPage = 10,
  columns,
  rows,
  initialActivePage = 1,
}: Props<TData>) {
  const [activePage, setActivePage] = useState(initialActivePage);

  const totalRows = useMemo(() => rows.length, [rows]);
  const totalPages = useMemo(
    () => Math.ceil(totalRows / rowsPerPage),
    [totalRows, rowsPerPage]
  );
  const paginatedRows = useMemo(
    () => rows.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage),
    [rows, activePage, rowsPerPage]
  );

  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor.toString()}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedRows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => {
                const value = row[column.accessor];
                const formattedValue = column.format
                  ? column.format(value)
                  : value;
                return (
                  <td key={column.accessor.toString()}>
                    {formattedValue as ReactNode}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        activePage={activePage}
        totalRows={totalRows}
        rowsPerPage={rowsPerPage}
        totalPages={totalPages}
        changeActivePage={setActivePage}
      />
    </>
  );
}
