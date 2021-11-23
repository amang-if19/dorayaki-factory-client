import React from 'react';

import MelihatDaftarData from '../components/MelihatDaftarData';
import Sidebar from "../components/Sidebar";
import Container from "../components/Container"

const axios = require('axios').default;

const BahanBaku = () => {
  const bahan = {
    'Nama Bahan' : [],
    'Banyaknya' : [],
  }

  axios.get('http://localhost:8000/bahan-baku')
    .then((result) => {
      console.log(result);
      bahan['Nama Bahan'].push(result.data[0].name);
      bahan['Banyaknya'].push(result.data[0].stok);
    }); 

  return (
    <Container>
      <Sidebar/>
      <div className='h3 text-center'>Bahan Baku</div>
      <MelihatDaftarData data={bahan} />
    </Container>
  )
}

export default BahanBaku;
