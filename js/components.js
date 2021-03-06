class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
        <div>
          <HelloWorld />
        </div>
    );
  }
}
