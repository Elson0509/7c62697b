import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api.js";
import Layout from "../layout/Layout.jsx";
import SkeletonGroup from "../components/loadings/SkeletonGroup.jsx";
import CallDetail from "../components/infos/CallDetail.jsx";

const Detail = () => {
  const { id } = useParams();
  const [call, setCall] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchActivity = useCallback(() => {
    setIsLoading(true);
    setHasError(false);

    api.get(`activities/${id}`)
      .then((resp) => {
        setCall(resp.data);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  useEffect(() => {
    fetchActivity();
  }, [fetchActivity]);

  const changeArchiveStatus = () => {
    setIsLoading(true);
    api.patch(`activities/${id}`, { is_archived: !call.is_archived })
      .then(() => {
        fetchActivity();
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
        <div>Sorry. An error has occurred.</div>
      </Layout>
    );
  }

  if (!call) {
    return (
      <Layout>
        <div>Invalid call identification.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="main-header">
        <h1>Detail of Call</h1>
        <button onClick={changeArchiveStatus}>
          {call.is_archived ? 'Unarchive' : 'Archive'}
        </button>
      </div>
      <CallDetail call={call} />
    </Layout>
  );
};

export default Detail;