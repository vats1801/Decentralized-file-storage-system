import React from "react";
import { Route, useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : navigate("/login");
}
