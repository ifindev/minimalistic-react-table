import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  it("should show correct current active page and total pages", () => {
    const activePage = 1;
    const totalRows = 9;
    const rowsPerPage = 3;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    render(
      <Pagination
        activePage={activePage}
        totalRows={totalRows}
        rowsPerPage={rowsPerPage}
        totalPages={totalPages}
        changeActivePage={vi.fn}
      />
    );

    expect(screen.getAllByText("Page 1 of 3"));
  });

  describe("Displaying rows range", () => {
    it("should display correct rows range numbers in first page for multiple pages pagination", () => {
      const activePage = 1;
      const totalRows = 9;
      const rowsPerPage = 3;
      const totalPages = Math.ceil(totalRows / rowsPerPage);
      render(
        <Pagination
          activePage={activePage}
          totalRows={totalRows}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          changeActivePage={vi.fn}
        />
      );

      expect(screen.getAllByText("Rows: 1 - 3 of 9"));
    });

    it("should display correct rows range numbers when active page is not 1", () => {
      const activePage = 2;
      const totalRows = 9;
      const rowsPerPage = 3;
      const totalPages = Math.ceil(totalRows / rowsPerPage);
      render(
        <Pagination
          activePage={activePage}
          totalRows={totalRows}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          changeActivePage={vi.fn}
        />
      );

      expect(screen.getAllByText("Rows: 4 - 6 of 9"));
    });

    it("should display correct rows numbers when last page has only one data", () => {
      const activePage = 3;
      const totalRows = 7;
      const rowsPerPage = 3;
      const totalPages = Math.ceil(totalRows / rowsPerPage);
      render(
        <Pagination
          activePage={activePage}
          totalRows={totalRows}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          changeActivePage={vi.fn}
        />
      );

      expect(screen.getAllByText("Rows: 7 of 7"));
    });
  });

  describe("Pagination buttons", () => {
    it("should display correct pagination button", () => {
      const activePage = 1;
      const totalRows = 9;
      const rowsPerPage = 3;
      const totalPages = Math.ceil(totalRows / rowsPerPage);
      render(
        <Pagination
          activePage={activePage}
          totalRows={totalRows}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          changeActivePage={vi.fn}
        />
      );

      const firstPageButton = screen.getByRole("button", {
        name: "go to first page button",
      });
      const previousPageButton = screen.getByRole("button", {
        name: "go to previous page button",
      });

      const nextPageButton = screen.getByRole("button", {
        name: "go to next page button",
      });
      const lastPageButton = screen.getByRole("button", {
        name: "go to last page button",
      });

      expect(firstPageButton).toBeInTheDocument();
      expect(firstPageButton.textContent).toBe("⏮️ First");

      expect(previousPageButton).toBeInTheDocument();
      expect(previousPageButton.textContent).toBe("⬅️ Previous");

      expect(nextPageButton).toBeInTheDocument();
      expect(nextPageButton.textContent).toBe("Next ➡️");

      expect(lastPageButton).toBeInTheDocument();
      expect(lastPageButton.textContent).toBe("Last ⏭️");
    });

    it("should correctly disabled go to first & previous page buttons on first page", () => {
      const activePage = 1;
      const totalRows = 9;
      const rowsPerPage = 3;
      const totalPages = Math.ceil(totalRows / rowsPerPage);
      const mockChangeActivePage = vi.fn();
      render(
        <Pagination
          activePage={activePage}
          totalRows={totalRows}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          changeActivePage={mockChangeActivePage}
        />
      );

      const firstPageButton = screen.getByRole("button", {
        name: "go to first page button",
      });
      const previousPageButton = screen.getByRole("button", {
        name: "go to previous page button",
      });
      const nextPageButton = screen.getByRole("button", {
        name: "go to next page button",
      });
      const lastPageButton = screen.getByRole("button", {
        name: "go to last page button",
      });

      fireEvent.click(firstPageButton);
      expect(mockChangeActivePage).toBeCalledTimes(0);

      fireEvent.click(previousPageButton);
      expect(mockChangeActivePage).toBeCalledTimes(0);

      fireEvent.click(nextPageButton);
      expect(mockChangeActivePage).toBeCalledTimes(1);

      fireEvent.click(lastPageButton);
      expect(mockChangeActivePage).toBeCalledTimes(2);

      expect(firstPageButton).toBeDisabled();
      expect(previousPageButton).toBeDisabled();
      expect(nextPageButton).toBeEnabled();
      expect(lastPageButton).toBeEnabled();
    });

    it("should correctly disabled go to next & last page buttons on last page", () => {
      const activePage = 3;
      const totalRows = 9;
      const rowsPerPage = 3;
      const totalPages = Math.ceil(totalRows / rowsPerPage);
      const mockChangeActivePage = vi.fn();
      render(
        <Pagination
          activePage={activePage}
          totalRows={totalRows}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          changeActivePage={mockChangeActivePage}
        />
      );

      const firstPageButton = screen.getByRole("button", {
        name: "go to first page button",
      });
      const previousPageButton = screen.getByRole("button", {
        name: "go to previous page button",
      });
      const nextPageButton = screen.getByRole("button", {
        name: "go to next page button",
      });
      const lastPageButton = screen.getByRole("button", {
        name: "go to last page button",
      });

      fireEvent.click(nextPageButton);
      expect(mockChangeActivePage).toBeCalledTimes(0);

      fireEvent.click(lastPageButton);
      expect(mockChangeActivePage).toBeCalledTimes(0);

      fireEvent.click(firstPageButton);
      expect(mockChangeActivePage).toBeCalledTimes(1);

      fireEvent.click(previousPageButton);
      expect(mockChangeActivePage).toBeCalledTimes(2);

      expect(firstPageButton).toBeEnabled();
      expect(previousPageButton).toBeEnabled();
      expect(nextPageButton).toBeDisabled();
      expect(lastPageButton).toBeDisabled();
    });
  });
});
