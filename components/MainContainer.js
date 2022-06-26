import Head from "next/head";
import React from "react";
import A from "./A";

const MainContainer = ({ children, keywords, title }) => {
  return (
    <>
      <Head>
        <meta keywords={"ulbi.tv, next.js" + keywords}></meta>
        <title>{title}</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text={"Main page"} />
        <A href={"/users"} text={"Users"} />
      </div>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          background: orange;
          padding: 15px;
        }
      `}</style>
    </>
  );
};

export default MainContainer;
