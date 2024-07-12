import React, { useEffect, useState, useCallback } from "react";
import api from "../utils/api.js";
import Layout from "../layout/Layout.jsx";
import SkeletonGroup from "../components/loadings/SkeletonGroup.jsx";
import CallList from "../components/lists/CallList.jsx";
import NoCallsAvailableMessage from "../components/messages/NoCallsAvailableMessage.jsx";
import ErrorOccurredMessage from "../components/messages/ErrorOccurredMessage.jsx";
import TEXTS from "../utils/texts/en.js";

const Archive = () => {
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
        setListOfCalls(calls.filter((el) => el.is_archived));
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

  const unarchiveAllCalls = () => {
    setIsLoading(true);
    api
      .patch(`reset`)
      .then(() => {
        fetchCalls(); // Refetch calls after unarchiving
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
        <div className="main-header">
          <h1 className="h1">{TEXTS.TITLES.ARCHIVE_PAGE}</h1>
        </div>
        <ErrorOccurredMessage />
      </Layout>
    );
  }

  if (!listOfCalls.length) {
    return (
      <Layout>
        <div className="main-header">
          <h1 className="h1">{TEXTS.TITLES.ARCHIVE_PAGE}</h1>
        </div>
        <NoCallsAvailableMessage />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="main-header">
        <h1 className="h1">{TEXTS.TITLES.ARCHIVE_PAGE}</h1>
        <button onClick={unarchiveAllCalls}>
          {TEXTS.BUTTONS.UNARCHIVE_ALL}
        </button>
      </div>
      <CallList calls={listOfCalls} />
    </Layout>
  );
};

export default Archive;
