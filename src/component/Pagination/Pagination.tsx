import React from "react";
import { rowBeginning, rowEnd } from "../../utils/table/tableRowRange.util";

type Props = {
  activePage: number;
  totalRows: number;
  rowsPerPage: number;
  totalPages: number;
  changeActivePage: (page: number) => void;
};

export default function Pagination({
  activePage,
  totalRows,
  rowsPerPage,
  totalPages,
  changeActivePage,
}: Props) {
  const beginning = rowBeginning(activePage, rowsPerPage);
  const end = rowEnd(activePage, totalPages, beginning, totalRows, rowsPerPage);

  return (
    <>
      <div className="pagination">
        <button
          aria-label="go to first page button"
          disabled={activePage === 1}
          onClick={() => changeActivePage(1)}
        >
          ⏮️ First
        </button>
        <button
          aria-label="go to previous page button"
          disabled={activePage === 1}
          onClick={() => changeActivePage(activePage - 1)}
        >
          ⬅️ Previous
        </button>
        <button
          aria-label="go to next page button"
          disabled={activePage === totalPages}
          onClick={() => changeActivePage(activePage + 1)}
        >
          Next ➡️
        </button>
        <button
          aria-label="go to last page button"
          disabled={activePage === totalPages}
          onClick={() => changeActivePage(totalPages)}
        >
          Last ⏭️
        </button>
      </div>

      <p>
        Page {activePage} of {totalPages}
      </p>
      <p>
        Rows: {beginning === end ? end : `${beginning} - ${end}`} of {totalRows}
      </p>
    </>
  );
}
