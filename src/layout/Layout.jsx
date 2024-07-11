import React from "react";
import Header from "./Header.jsx";
import LoadingSuspense from '../components/loadings/LoadingSuspense.js'

const Layout = (props) => {
  return (
    <div>
      <div className="container-div container-fluid">
        <div className='row  justify-content-center p-4 border'>
        <div className='col-5'>
          <Header />
        </div>
        </div>
        <main className="container-view">
            {props.children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
