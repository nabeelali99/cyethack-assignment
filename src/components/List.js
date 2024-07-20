import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
  cursor: "pointer",
}));

const List = () => {
  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/list/details/${itemId}`);
  };

  // Dummy data

  const items = [
    {
      id: 1,
      name: "Item 1",
      description: "Description 1",
      price: 10,
      quantity: 5,
      category: "Category 1",
    },
    {
      id: 2,
      name: "Item 2",
      description: "Description 2",
      price: 20,
      quantity: 10,
      category: "Category 2",
    },
    {
      id: 3,
      name: "Item 3",
      description: "Description 3",
      price: 30,
      quantity: 15,
      category: "Category 3",
    },
    {
      id: 4,
      name: "Item 4",
      description: "Description 4",
      price: 40,
      quantity: 20,
      category: "Category 4",
    },
    {
      id: 5,
      name: "Item 5",
      description: "Description 5",
      price: 50,
      quantity: 25,
      category: "Category 5",
    },
  ];

  return (
    <div>
      <Navbar />{" "}
      <h2 className="text-3xl font-bold text-red-500 mb-4 mt-4">Items List</h2>
      <div
        style={{
          height: 400,
          width: "100%",
          marginTop: "20px",
          marginleft: "20px",
          marginright: "20px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          overflow: "auto",
          backgroundColor: "#f5f5f5",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "black",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          maxHeight: "70vh",
          overflowY: "auto",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          padding: "20px",
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <StyledTableRow
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                >
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.name}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.description}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default List;
