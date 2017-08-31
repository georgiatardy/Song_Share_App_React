import React, { Component } from 'react';

//Imports styling//
import '../styles/App.css';

//Imports PlayList, PlayListForm, and NavBar Components//
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm';
import NavBar from './NavBar';

//App Component//
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      <div className="main_page">
        <PlayList />
        <PlayListForm />
       </div>
      </div>

    )
  };
}

export default App;
