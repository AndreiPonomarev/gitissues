import alt from '../alt';
import SearchbarActions from '../actions/SearchbarActions';

class SearchbarStore {
  constructor() {
    this.bindActions(SearchbarActions);
    this.searchQuery = '';
  }

  onFindIssuesSuccess(payload) {
    this.issues = payload;
  }

  onFindIssuesFail(payload) {
    payload.searchForm.classList.add('shake');
    setTimeout(() => {
      payload.searchForm.classList.remove('shake');
    }, 1000);
  }

  onUpdateSearchQuery(event) {
    this.searchQuery = event.target.value;
    console.log(this.searchQuery);
  }

}

export default alt.createStore(SearchbarStore);