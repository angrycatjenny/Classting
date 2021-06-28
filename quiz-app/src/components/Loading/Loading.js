import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loading() {
  return (
    <div className="center">
      <CircularProgress color="secondary" />
    </div>
  );
}
