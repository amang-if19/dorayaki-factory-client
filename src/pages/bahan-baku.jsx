import React from 'react';

import MelihatDaftarData from '../components/MelihatDaftarData';
import Sidebar from "../components/Sidebar";
import Container from "../components/Container"

const BahanBaku = () => {
  const bahan = {
    'Nama Bahan' : ['Ayam', 'Bebek', 'Cacing'],
    'Banyaknya' : [1,2,3]
  }

  return (
    <Container>
      <Sidebar/>
      <div className='h3 text-center'>Bahan Baku</div>
      <MelihatDaftarData data={bahan} />
    </Container>
  )
}

export default BahanBaku;
