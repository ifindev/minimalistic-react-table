import { rowBeginning, rowEnd } from "./tableRowRange.util";

describe("tableRowRange util functions", () => {
  describe("calculate beginning of rows range", () => {
    it("should return 1 if current activePage is 1", () => {
      const activePage = 1;
      const rowsPerPage = 3;
      const beginning = rowBeginning(activePage, rowsPerPage);

      expect(beginning).toBe(1);
    });

    it("should return correct row beginning if current activePage is not 1", () => {
      const activePage = 2;
      const rowsPerPage = 3;
      const beginning = rowBeginning(activePage, rowsPerPage);

      expect(beginning).toBe(4);
    });
  });

  describe("calculate end of rows range", () => {
    it("should return totalRows if current activePage is the last page", () => {
      const activePage = 3;
      const totalPages = 3;
      const rowBeginning = 7;
      const totalRows = 9;
      const rowsPerPage = 3;

      const ending = rowEnd(
        activePage,
        totalPages,
        rowBeginning,
        totalRows,
        rowsPerPage
      );
      expect(ending).toBe(totalRows);
    });

    it("should return correct number if current activePage is not the last page", () => {
      const activePage = 2;
      const totalPages = 3;
      const rowBeginning = 4;
      const totalRows = 9;
      const rowsPerPage = 3;

      const correctEnding = 6;

      const ending = rowEnd(
        activePage,
        totalPages,
        rowBeginning,
        totalRows,
        rowsPerPage
      );
      expect(ending).toBe(correctEnding);
    });
  });
});
