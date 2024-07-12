import React, { useEffect, useState } from "react";
import api from "../utils/api.js";
import Layout from "../layout/Layout.jsx";
import SkeletonGroup from "../components/loadings/SkeletonGroup.jsx";
import CallList from "../components/lists/CallList.jsx";

const Feed = () => {
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
        setListOfCalls(calls.filter((el) => !el.is_archived));
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const archiveAllCalls = async () => {
    try {
      await Promise.all(
        listOfCalls.map(call =>
          api.patch(`activities/${call.id}`, { is_archived: true })
        )
      );
      fetchCalls(); // Refetch calls after archiving
    } catch (error) {
      setHasError(true);
    }
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
        <h1>Recents</h1>
        {!!listOfCalls.length && (
          <button onClick={archiveAllCalls}>Archive All</button>
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

export default Feed;
