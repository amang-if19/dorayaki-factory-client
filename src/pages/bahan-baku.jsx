import React from 'react';

import MelihatDaftarData from '../components/MelihatDaftarData';
import Sidebar from "../components/Sidebar";
import Container from "../components/Container"

const BahanBaku = () => {
  const bahan = {
    'Nama' : [],
    'Stok' : [],
    'Unit': [],
  }

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', 'http://localhost:8000/bahan-baku', false);

  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        const coba = JSON.parse(xmlhttp.responseText);
        console.log(coba);
        coba.forEach((element) => {
          bahan["Nama"].push(element.name);
          bahan["Stok"].push(element.stok);
          bahan["Unit"].push(element.unit);
        });
      }
    }
  }

  xmlhttp.send()

  return (
    <Container>
      <Sidebar/>
      <div className='h3 text-center'>Bahan Baku</div>
      <MelihatDaftarData data={bahan} />
    </Container>
  )
}

export default BahanBaku;
