import { MenuItem, Pagination, TextField, Typography } from "@mui/material";
import React from "react";

const CommonPagination = ({rowperpage , handlesetRowperpageChange , count , page , handleChange}) => {
  return (
    <>
      <div className="setpaginationdiv">
        <div className="setrowperpage">
          <Typography className="setlabelrow">Rows per page :</Typography>
          <TextField size="small" select className="textField" value={rowperpage} onChange={handlesetRowperpageChange} InputLabelProps={{ shrink: false }} margin="normal" variant="outlined">
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="20">20.</MenuItem>
            <MenuItem value="50">50.</MenuItem>
          </TextField>
        </div>
        <Pagination count={count} page={page} onChange={handleChange} variant="outlined" shape="rounded" color="primary" />
      </div>
    </>
  );
};

export default CommonPagination;
