import React, { useEffect, useState } from "react";
import api from "../utils/api.js";
import Layout from "../layout/Layout.jsx";
import SkeletonGroup from "../components/loadings/SkeletonGroup.jsx";

const Feed = () => {
  const [listOsCalls, setListOfCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get(`activities`)
      .then((resp) => {
        setListOfCalls(resp.data)
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false)
      });
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <SkeletonGroup/>
      </Layout>
    );
  }

  return <Layout>Feed</Layout>;
};

export default Feed;
