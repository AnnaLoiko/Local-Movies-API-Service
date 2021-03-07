import React from "react";

const MyContext = React.createContext('test');

class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.context = {
            // MyContext
        };
    }
    componentDidMount() {
      let value = this.context;
      /* выполнить побочный эффект на этапе монтирования, используя значение MyContext */
    }
    componentDidUpdate() {
      let value = this.context;
      /* ... */
    }
    componentWillUnmount() {
      let value = this.context;
      /* ... */
    }
    render() {
      let value = this.context;
      return (
        <>
          <div>{value}</div>
        </>
      )
    }
}

MyClass.contextType = MyContext;