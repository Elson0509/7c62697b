import React, { useEffect } from "react";
import api from "../utils/api.js";
import Layout from "../layout/Layout.jsx";

const Archive = () => {
  useEffect(() => {
    api
      .get(`activities/6685b79524326ad725d48041`)
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

  return <Layout>Archive</Layout>;
};

export default Archive;
