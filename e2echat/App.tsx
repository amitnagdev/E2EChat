import React, {useState} from 'react'
import Login from "./Login";
import MessagesPage from './MessagesPage'
import AppStore from "./AppStore";

const App = () => {

  const switchPage = (nextPage) => {
    setCurrentPage(nextPage);
  }

  const [currentPage, setCurrentPage] = useState(<Login swapToPage={switchPage}/>);

  return (
      currentPage
  );

}

export default App;