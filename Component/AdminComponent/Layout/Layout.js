import React from "react";
import Sidebar from "../common/sidebar/Sidebar";
import { useRouter } from "next/router";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  const Layout = pathname.startsWith("/online-admin/dashboard");

  return (
    <>
        {Layout && <Sidebar />}
        <div style={{width:"100%"}}>{children}</div>
    </>
  );
};

export default AdminLayout;
