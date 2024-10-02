import React from 'react';
import Footer from '../composants/Footer';
import Listing from '../composants/Listing';
import Header from '../composants/Header';
import Scroll from '../composants/Scroll';

function List() {
  return (
    <div>
      <Header />
      <Scroll />
      <Listing />
      <Footer />
    </div>
  )
}

export default List