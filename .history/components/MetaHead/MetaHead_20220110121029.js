import Head from "next/head";

import React from "react";

function MetaHead() {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.contentKeyword} />
      <meta name="keywords" content={props.contentDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default MetaHead;
