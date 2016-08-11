import React from 'react';
import {Link} from 'react-router';
import SearchbarStore from '../stores/SearchbarStore';
import SearchbarActions from '../actions/SearchbarActions';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = SearchbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    SearchbarStore.listen(this.onChange);
  }

  componentWillUnmount() {
    SearchbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      SearchbarActions.findIssues({
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm,
      });
    }
  }

  render() {
    return (
      <nav className='navbar'>
        <form ref='searchForm' className='navbar-form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='input-group'>
            <p>{'jquery'}</p>
            <input name='username' type='text' className='form-control' placeholder={'Username...'} />
            {'  '}
            <input name='repo' type='text' className='form-control' placeholder={'Repo...'} onChange={SearchbarActions.updateSearchQuery} />
            <span className='input-group-btn'>
              <button className='btn' onClick={this.handleSubmit.bind(this)}><span className='glyphicon glyphicon-search'></span>Search</button>
            </span>
          </div>
        </form>
      </nav>
    );
  }
}

export default Searchbar;