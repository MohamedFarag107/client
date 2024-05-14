"use client";
import React, { useEffect, useState } from "react";

export const Card = () => {
  const location = window.location;
  const [store, setStore] = useState<any>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "error" | "success"
  >("idle");

  useEffect(() => {
    (async () => {
      setStatus("loading");

      const response = await fetch(
        "https://server-test-bkja.onrender.com/api/v1/stores/host",
        {
          cache: "no-cache",
          headers: {
            domain: location.hostname,
          },
        }
      );

      if (!response.ok) {
        return setStatus("error");
      }

      const data = await response.json();
      setStore(data);
      setStatus("success");
    })();
  }, []);
  return (
    <div>
      <h4>{status}</h4>
      <h1>location</h1>
      <h4>
        <pre>{JSON.stringify(location, null, 2)}</pre>
      </h4>
      <h1>store</h1>
      <h4>
        <pre>{JSON.stringify(store, null, 2)}</pre>
      </h4>
    </div>
  );
};
