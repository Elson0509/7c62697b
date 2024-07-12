import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "../layout/Header.jsx";
//loading lazy Suspense
import Loading from "../components/loadings/Loading.jsx";
//routes
const FeedLazy = lazy(() => import("../pages/Feed.jsx"));
const DetailLazy = lazy(() => import("../pages/Detail.jsx"));
const ArchiveLazy = lazy(() => import("../pages/Archive.jsx"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<FeedLazy />} />
        <Route path="/archive" element={<ArchiveLazy />} />
        <Route path="/:id" element={<DetailLazy />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
