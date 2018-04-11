import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  name: PropTypes.string
};

const defaultProps = {
  name: 'Hello World'
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="app">
        {this.props.name}
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
