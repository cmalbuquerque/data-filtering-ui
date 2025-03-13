import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';

const Datatable = (props) => {

    const {data, headers} = props;

    const renderTableHeaders = () => {           
      return(
        <TableHead>
          <TableRow>
            {headers.map((header) => {
              return <TableCell>{header.name}</TableCell>
            })}
          </TableRow>
      </TableHead>);
    };

    const renderTableBody = () => {
      return(
        <TableBody>
          {data.map((product, index) => (
            <TableRow key={index}>
            {headers.map(header => {
              return <TableCell>{product[header.name]}</TableCell>
            })}
            </TableRow>
          ))}
        </TableBody>
      );
    };

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {renderTableHeaders()}
            {renderTableBody()}
        </Table>
        </TableContainer>
  );
};

Datatable.propTypes = {
  data: PropTypes.array,
  headers: PropTypes.array
};

Datatable.defaultProps = {
  data: [],
  headers: []
};

export default Datatable;