"use client";

import { ThemeProvider } from "@mui/styles";
import React from "react";
import { theme } from "../common/Theme";

const AdminLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default AdminLayout;
