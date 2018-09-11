import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  name: PropTypes.string
};

const defaultProps = {
  name: 'Hello from React and Bulma'
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
        <div className="bulma-content">
          <p class="subtitle">
            Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
          </p>

          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Input" />
            </div>
          </div>

          <div class="field">
            <p class="control">
              <span class="select">
                <select>
                  <option>Select dropdown</option>
                </select>
              </span>
            </p>
          </div>
          <div class="buttons">
            <a class="button is-primary">Primary</a>
            <a class="button is-link">Link</a>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
