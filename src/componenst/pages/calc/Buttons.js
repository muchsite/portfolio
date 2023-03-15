import React, { useState } from "react";

export default function Buttons({
  prev,
  setPrev,
  setCurr,
  setResu,
  curr,
  opperation,
  setopperation,
}) {
  const del = () => {
    if (prev && !opperation && !curr) {
      setPrev(prev.slice(0, prev.length - 1));
    }
    if (opperation && !curr) {
      setopperation("");
    }
    if (curr) {
      setCurr(curr.slice(0, curr.length - 1));
    }
  };
  const addDec = () => {
    if (!opperation && prev && !prev.includes(".")) {
      setPrev(prev + ".");
    }
    if (opperation && curr && !curr.includes(".")) {
      setCurr(curr + ".");
    }
  };
  const addNum = (number) => {
    if (!opperation) {
      setPrev(prev + number);
      setResu("");
    } else {
      setCurr(curr + number);
    }
  };
  const addOp = (op) => {
    if (prev) {
      setopperation(op);
    }
  };
  const sum = () => {
    const first = parseFloat(prev);
    const second = parseFloat(curr);
    if (opperation === "+") {
      setResu(first + second);
      setCurr("");
      setPrev("");
      setopperation("");
    }
    if (opperation === "-") {
      setResu(first - second);
      setCurr("");
      setPrev("");
      setopperation("");
    }
    if (opperation === "/") {
      setResu(first / second);
      setCurr("");
      setPrev("");
      setopperation("");
    }
    if (opperation === "*") {
      setResu(first * second);
      setCurr("");
      setPrev("");
      setopperation("");
    }
  };
  const reset = () => {
    setCurr("");
    setPrev("");
    setopperation("");
    setResu("");
  };
  return (
    <>
      <div className="main_buttons">
        <button onClick={() => addNum(7)} className="main_btn">
          7
        </button>
        <button onClick={() => addNum(8)} className="main_btn">
          8
        </button>
        <button onClick={() => addNum(9)} className="main_btn">
          9
        </button>
        <button className="main_btn_del" onClick={del}>
          DEL
        </button>
        <button onClick={() => addNum(4)} className="main_btn">
          4
        </button>
        <button onClick={() => addNum(5)} className="main_btn">
          5
        </button>
        <button onClick={() => addNum(6)} className="main_btn">
          6
        </button>
        <button onClick={() => addOp("+")} className="main_btn">
          +
        </button>
        <button onClick={() => addNum(1)} className="main_btn">
          1
        </button>
        <button onClick={() => addNum(2)} className="main_btn">
          2
        </button>
        <button onClick={() => addNum(3)} className="main_btn">
          3
        </button>
        <button onClick={() => addOp("-")} className="main_btn">
          -
        </button>
        <button onClick={addDec} className="main_btn">
          .
        </button>
        <button onClick={() => addNum(0)} className="main_btn">
          0
        </button>
        <button onClick={() => addOp("/")} className="main_btn">
          /
        </button>
        <button onClick={() => addOp("*")} className="main_btn">
          *
        </button>
      </div>
      <div className="second_buttons">
        <button onClick={reset} className="reset">
          RESET
        </button>
        <button onClick={sum} className="sum">
          =
        </button>
      </div>
    </>
  );
}
