import alt from '../alt';

class SearchbarActions {
  constructor() {
    this.generateActions(
      'updateSearchQuery',
      'findIssuesSuccess',
      'findIssuesFail'
    );
  }

  findIssues(payload) {
    var _this = this;
    let xhr = new XMLHttpRequest();
    let url = 'https://api.github.com/repos/'+payload.searchForm[0].value+'/'+payload.searchQuery+'/issues';

    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Accept', 'application/vnd.github.v3+json');
    xhr.onload = function () {
      console.log(this);
      _this.actions.findIssuesSuccess(JSON.parse(this.responseText));
    };

    xhr.onerror = function () {
      console.log(this.responseText);
      _this.actions.findIssuesFail();
    };

    xhr.send();
  }

}

export default alt.createActions(SearchbarActions);