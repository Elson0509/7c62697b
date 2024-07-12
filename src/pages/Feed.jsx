import React, { useEffect, useState, useCallback } from "react";
import api from "../utils/api.js";
import Layout from "../layout/Layout.jsx";
import SkeletonGroup from "../components/loadings/SkeletonGroup.jsx";
import CallList from "../components/lists/CallList.jsx";

const Feed = () => {
  const [listOfCalls, setListOfCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchCalls = useCallback(() => {
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
  }, []);

  useEffect(() => {
    fetchCalls();
  }, [fetchCalls]);

  const archiveAllCalls = async () => {
    try {
      setIsLoading(true);
      await Promise.all(
        listOfCalls.map(call =>
          api.patch(`activities/${call.id}`, { is_archived: true })
        )
      );
      fetchCalls(); // Refetch calls after archiving
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <SkeletonGroup />
      </Layout>
    );
  }

  if (hasError) {
    return (
      <Layout>
        <div>Sorry. An error has occurred.</div>
      </Layout>
    );
  }

  if (!listOfCalls.length) {
    return (
      <Layout>
        <div>No calls available.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="main-header">
        <h1>Recents</h1>
        <button onClick={archiveAllCalls}>Archive All</button>
      </div>
      <CallList calls={listOfCalls} />
    </Layout>
  );
};

export default Feed;