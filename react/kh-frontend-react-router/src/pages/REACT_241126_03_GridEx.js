import React from "react";
import { Grid, Paper } from "@material-ui/core";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  && {
    padding: 20px;
    text-align: center;
    background-color: #fafafa;
  }
`;

const GridEx = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <StyledPaper>Grid Item 1</StyledPaper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StyledPaper>Grid Item 2</StyledPaper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StyledPaper>Grid Item 3</StyledPaper>
      </Grid>
    </Grid>
  );
};

export default GridEx;
