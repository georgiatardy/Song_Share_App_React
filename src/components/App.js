import React, { Component } from 'react';

//Imports styling//
import '../styles/App.css';

//Imports PlayList, PlayListForm, and NavBar//
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm';
import NavBar from './NavBar';

//App Component//
class App extends Component {
  render() {
    return (
      <div className="Main_Container">
       <div>
        <NavBar />
       </div>
       <div className="List-Form">
        <PlayList />
        <PlayListForm />
       </div>
      </div>

    )
  };
}

export default App;
