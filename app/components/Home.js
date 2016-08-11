import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';
import SearchbarStore from '../stores/SearchbarStore';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    SearchbarStore.listen(this.onChange);
    HomeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    SearchbarStore.listen(this.onChange);
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  	console.log(this.state);
  }

  render() {
    var IssuesNodes = this.state.issues.map((issue) => {
    	console.log(typeof issue.created_at);
      return (
       	<tr key={issue.id} className='issue-row'>
         	<td> {issue.id} </td>
         	<td> {issue.title} </td>
         	<td> {new Date(issue.created_at).toLocaleDateString()}</td>
       	</tr>
      );
    });
		

    return (
      <div className='container'>
        <div className='row'>
        	<table className='isuue-table'>
        		<thead>
        			<tr key='issue-table-head'> <th id="issue-id"> {'ID'} </th> <th id="issue-title"> {'Title'} </th> <th id="issue-date"> {'Date'} </th> </tr>
        		</thead>
        		<tbody>
          		{IssuesNodes}
          	</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;