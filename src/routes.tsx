import { Navigate, useRoutes } from "react-router-dom";
import { DashboardLayout } from "layouts/DashboardLayout";
import { DashboardRoutes } from "views/Admin/routes";
import { Main } from "views/Main/Main";
import { InstructorRoutes } from "views/Instructor/routes";
import { InstructorLayout } from "layouts/InstructorLayout";
import { Login } from "views/Login";

export function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Main></Main>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: DashboardRoutes,
    },
    {
      path: "/instructor",
      element: <InstructorLayout />,
      children: InstructorRoutes,
    },
  ]);
}
