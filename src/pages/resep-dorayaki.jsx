import React from 'react';

import MelihatDaftarData from '../components/MelihatDaftarData';
import Sidebar from "../components/Sidebar";
import Container from "../components/Container"

const Resep = () => {
  const resep = {
    'Nama Dorayaki' : [],
    'Resep id' : []
  }
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', 'http://localhost:8000/dorayaki', false);

  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        const coba = JSON.parse(xmlhttp.responseText);
        console.log(coba);
        coba.forEach((element) => {
          resep["Nama Dorayaki"].push(element.name);
          resep["Resep id"].push(element.resepId);
        });
      }
    }
  }

  xmlhttp.send()
  return (
    <Container>
      <Sidebar/>
      <div className='h3 text-center'>Resep</div>
      <MelihatDaftarData data={resep} />
    </Container>
  )
}

export default Resep;
