/**
 * @description function to calculate the beginning of range for rows displayed in pagination
 *
 * @param activePage current active page
 * @param rowsPerPage how many rows will be displayed in each page
 * @returns
 */
export function rowBeginning(activePage: number, rowsPerPage: number) {
  if (activePage === 1) return 1;

  return rowsPerPage * (activePage - 1) + 1;
}

/**
 * @description function to calculate the end of range for rows displayed in pagination
 *
 * @param activePage current active page
 * @param totalPages total pages in the pagination
 * @param rowBeginning current row number beginning range  e.g. (rows 3 - 6), then beginning is 3
 * @param totalRows total rows or total data that will be paginated
 * @param rowsPerPage how many rows will be displayed in each page
 * @returns end of row number for the range in pagination
 */
export function rowEnd(
  activePage: number,
  totalPages: number,
  rowBeginning: number,
  totalRows: number,
  rowsPerPage: number
) {
  if (activePage === totalPages) return totalRows;

  return rowBeginning + rowsPerPage - 1;
}
