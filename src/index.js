import React from "react";
import ReactDOM from 'react-dom';
import './style';
import Component from '@/components/Component/Component'

const App = () => {
  return (
    <>
      <h1>Local Movies API Service</h1>
      <Component />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));