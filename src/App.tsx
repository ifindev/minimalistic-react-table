import React from "react";
import Table from "./component/Table/Table";
import { columns, rows } from "./data/data";
import "./styles.css";

function App() {
  return <Table rows={rows} columns={columns} rowsPerPage={3} />;
}

export default App;
