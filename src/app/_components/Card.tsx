"use client";
import React from "react";

export const Card = () => {
  const location = window.location;
  return (
    <div>
      <h4>
        <pre>{JSON.stringify(location, null, 2)}</pre>
      </h4>
    </div>
  );
};
