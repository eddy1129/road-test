import React from "react";

export default function Question() {
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "15vh",
        }}
      >
        Question
      </h1>
      <img src="/img/Q1.jpeg" style={{ width: 500,borderRadius:30 ,height:300, marginBottom:15 }} alt="test" /> <br />
      <img src="/img/Q2.jpeg" style={{ width: 500,borderRadius:30 ,height:300, marginBottom:15 }} alt="test" /> <br />
      <img src="/img/Q3.jpeg" style={{ width: 500,borderRadius:30 ,height:300, marginBottom:15 }} alt="test" /> <br />
      <img src="/img/Q4.jpeg" style={{ width: 500,borderRadius:30 ,height:300, marginBottom:15 }} alt="test" />
    </>
  );
}
