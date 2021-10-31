import React, { useState } from 'react';
import Header from './component/Header/Header';
import Card from './component/UI/Card';
import Search from './component/Header/Search';
import SubmitIdea from "./component/ProductIdea/SubmitIdea";
import Navbar from './component/Header/Navbar';
import Footer from './component/Footer/Footer';

const App = () => {
 
  const [closeModal, setCloseModal] = useState(true);

  const closeHandler = () => {setCloseModal(true)};
  const openModal = () => {setCloseModal(false)};
  return (
    <div>
    <Navbar openIdeaForm={openModal}/>
    <Card>
          <Header />
    </Card>
    <Card>
      <Search />
    </Card>
    {!closeModal && <SubmitIdea 
     onClose={closeHandler}/>}
     <Footer />
    </div>
  );
};

export default App;
