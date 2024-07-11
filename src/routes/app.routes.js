import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

//loading lazy Suspense
import LoadingSuspense from "../components/loadings/LoadingSuspense.js";
//routes
const FeedLazy = lazy(() => import("../pages/Feed.jsx"));
const DetailLazy = lazy(() => import("../pages/Detail.jsx"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSuspense />}>
      <Routes>
        <Route path="/" element={<FeedLazy />} />
        <Route path="/detail" element={<DetailLazy />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
