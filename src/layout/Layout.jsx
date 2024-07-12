import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = (props) => {
  return (
    <div>
      <div className="container-div container-fluid">
        <div className='row  justify-content-center p-4 border'>
        <div className='col-5'>
          <Header />
        </div>
        </div>
        <main className='row'>
            {props.children}
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
