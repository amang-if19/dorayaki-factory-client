import React from 'react';
import { Link } from 'react-router-dom';

import MelihatDaftarData from '../components/MelihatDaftarData';
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";
import baseUrl from "../config";

const BahanBaku = () => { 
  const bahanBakuUrl = baseUrl + '/bahan-baku';
  const bahan = {
    'Nama' : [],
    'Stok' : [],
    'Unit': [],
    '': [],
  }

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', bahanBakuUrl, false);

  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        const coba = JSON.parse(xmlhttp.responseText);
        coba.forEach((element) => {
          bahan["Nama"].push(element.name);
          bahan["Stok"].push(element.stok);
          bahan["Unit"].push(element.unit);
          const urlEdit = '/edit-bahan-baku/' + element.id;
          bahan[''].push(<Link to={urlEdit}>Edit</Link>)
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
  );
}

export default BahanBaku;
