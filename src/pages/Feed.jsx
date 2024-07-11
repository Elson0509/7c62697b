import React, { useEffect } from "react";
import api from "../utils/api.js";
import Layout from "../layout/Layout.jsx";

const Feed = () => {
  useEffect(() => {
    api
      .get(`activities`)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        //setLoading(false)
      });
  }, []);

  return <Layout>Feed</Layout>;
};

export default Feed;
