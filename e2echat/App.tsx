import React, {useState} from 'react'
import Login from "./Login";
import MessagesPage from './MessagesPage'
import AppStore from "./AppStore";
import EmojiMenu from "./EmojiMenu";
import Menu from "./Menu";

const App = () => {

  const switchPage = (nextPage) => {
    setCurrentPage(nextPage);
  }

  const [currentPage, setCurrentPage] = useState(<Menu swapToPage={switchPage}/>);

  return (
      currentPage
  );

}

export default App;