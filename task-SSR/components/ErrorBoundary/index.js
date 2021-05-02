import React from "react";
import style from "./style.module";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error) {
    this.setState({error})
  }

  render() {
    if (this.state.error) {
      return (
        <div className={style.warningText}>
          Oops, something went wrong... We are doing our best to fix the issue
        </div>
      )
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;
