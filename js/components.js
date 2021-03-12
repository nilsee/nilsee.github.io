class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount () {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount () {
        clearInterval(this.timerID);
    }

    tick () {
        this.setState({
            date: new Date()
        });
    }

    render () {
        return (
            <div className="clock">
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

class App extends React.Component {
  render() {
    return (
        <div id="helloworld">
          <HelloWorld />
        </div>
        <div>
          <Clock />
        </div>
    );
  }
}
