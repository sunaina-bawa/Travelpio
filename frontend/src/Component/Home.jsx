import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h1
        style={{
          backgroundColor: "pink",
          fontSize: "40px",
          color: "black",
          padding: "10px",
          width: "100%",
          margin: "auto",
          textAlign: "center",
          borderRadius: "20px",
          marginTop: "40px",
        }}
      >
        Travelopia
      </h1>
      <div
        style={{
          display: "flex",
          width: "40%",
          margin: "auto",
          marginTop: "20px",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            background: "black",
            borderRadius: "10px",
            border: "1px solid black",
            padding: "10px",
            width: "100%",
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              fontSize: "15px",
              textDecorationLine: "none",
            }}
          >
            Form
          </Link>
        </button>
        <button
          style={{
            background: "black",
            borderRadius: "10px",
            border: "1px solid black",
            padding: "10px",

            width: "100%",
          }}
        >
          <Link
            to="/dashboard"
            style={{
              color: "white",
              fontSize: "15px",
              textDecorationLine: "none",
            }}
          >
            Dashboard
          </Link>
        </button>
      </div>
    </div>
  );
}
