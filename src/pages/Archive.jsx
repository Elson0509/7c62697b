import React, { useEffect, useState } from "react";
import api from "../utils/api.js";
import Layout from "../layout/Layout.jsx";
import SkeletonGroup from "../components/loadings/SkeletonGroup.jsx";
import CallList from "../components/lists/CallList.jsx";

const Archive = () => {
  const [listOfCalls, setListOfCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchCalls();
  }, []);

  const fetchCalls = () => {
    setIsLoading(true);
    setHasError(false);
    api
      .get(`activities`)
      .then((resp) => {
        const calls = resp.data;
        setListOfCalls(calls.filter((el) => el.is_archived));
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const unarchiveAllCalls = async () => {
    api
      .patch(`reset`)
      .then(() => {
        fetchCalls();
      })
      .catch(() => {
        setHasError(true);
      });
  };

  if (isLoading) {
    return (
      <Layout>
        <SkeletonGroup />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="feed-header">
        <h1>Archive</h1>
        {!!listOfCalls.length && (
          <button onClick={unarchiveAllCalls}>Unarchive All</button>
        )}
      </div>
      {hasError ? (
        <div>Sorry. An error has occurred.</div>
      ) : (
        <CallList calls={listOfCalls} />
      )}
      {!hasError && !listOfCalls.length && <div>No calls available.</div>}
    </Layout>
  );
};

export default Archive;
