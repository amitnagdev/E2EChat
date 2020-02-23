import React, {useState} from 'react'
import MessagesPage from './MessagesPage'

const App = () => {

  const switchPage = (nextPage) => {
    setCurrentPage(nextPage);
  }

  const [currentPage, setCurrentPage] = useState(<MessagesPage swapToPage={switchPage}/>);

  return (
      currentPage
  );

}

export default App;