import React from 'react';
import NavHome from '../components/home/NavHome';
import Description from '../components/home/description';
import PourquoiChoisir from '../components/home/PourquoiChoisir';


const Home = () => {
  return (
    <>
      <NavHome />
      <Description />
      <PourquoiChoisir />
    </>
  );
};

export default Home;
