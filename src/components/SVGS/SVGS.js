import React from "react";
import FirebaseSvg from "./FirebaseSvg";
import GraphQlSvg from "./GraphQlSvg";
import MongoSvg from "./MongoSvg";
import NextSvg from "./NextSvg";
import NodeSvg from "./NodeSvg";
import ReactSvg from "./ReactSvg";

const SVGS = ({ name }) => {
  switch (name) {
    case "react":
      return <ReactSvg />;
    case "next":
      return <NextSvg />;
    case "firebase":
      return <FirebaseSvg />;
    case "mongodb":
      return <MongoSvg />;
    case "node":
      return <NodeSvg />;
    case "graphql":
      return <GraphQlSvg />;
    default:
      return <ReactSvg />;
  }
};

export default SVGS;
