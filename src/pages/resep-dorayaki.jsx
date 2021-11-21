import React from 'react';

import MelihatDaftarData from '../components/MelihatDaftarData';
import Sidebar from "../components/Sidebar";
import Container from "../components/Container"

const Resep = () => {
  const resep = {
    'Nama resep' : ['Ayam', 'Bebek', 'Cacing'],
    'Banyaknya' : [1,2,3]
  }

  return (
    <Container>
      <Sidebar/>
      <div className='h3 text-center'>Resep</div>
      <MelihatDaftarData data={resep} />
    </Container>
  )
}

export default Resep;
