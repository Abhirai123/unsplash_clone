import React from 'react';
import './ImageList.css';


class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <div className="logo_section">
          <img src="img/logo.png" alt="logo"  />
        </div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            
            <input
              type="text"
              placeholder="Search images here..."
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
