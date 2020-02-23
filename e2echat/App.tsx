import React, {useState} from 'react'
import Login from "./Login";
import MessagesPage from './MessagesPage'
import AppStore from "./AppStore";
import EmojiMenu from "./EmojiMenu";

const App = () => {

  const switchPage = (nextPage) => {
    setCurrentPage(nextPage);
  }

  const [currentPage, setCurrentPage] = useState(<EmojiMenu swapToPage={switchPage}/>);

  return (
      currentPage
  );

}

export default App;