import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { EDButton } from "./EDButton";
import EDStack from "./EDStack";

export default function EDTable({
  rowsArr,
  columnsArr,
  tableHeight,
  tableWidth,
  rowsPerPageArr,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageArr[0]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: tableHeight, width: tableWidth }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow key={`tr-${columnsArr}`}>
              {columnsArr.map((column) => (
                <TableCell
                  key={`td-${column.id}`}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsArr
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columnsArr.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={`tc-${column.id}`} align={column.align}>
                          {column.id === "action" ? (
                            <EDStack spacing={1}>
                              {value.map((item) => {
                                return (
                                  <EDButton
                                    size="small"
                                    key={item.id}
                                    handleChange={() =>
                                      item.handleChange(row["_id"])
                                    }
                                    value={item.text}
                                    variant="contained"
                                  />
                                );
                              })}
                            </EDStack>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageArr}
        component="div"
        count={rowsArr?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
