import React from 'react';

import MelihatDaftarData from '../components/MelihatDaftarData';
import Sidebar from "../components/Sidebar";
import App from "./App";

const BahanBaku = () => {
  const bahan = {
    'Nama Bahan' : [],
    'Banyaknya' : []
  }

  return (
    <>
      <div className='h3 text-center'>Bahan Baku</div>
      <MelihatDaftarData data={bahan} />
      <App/>
    </>
  )
}

export default BahanBaku;
