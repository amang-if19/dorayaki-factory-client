import React from 'react';

import MelihatDaftarData from '../components/MelihatDaftarData';
import Sidebar from "../components/Sidebar";
import Container from "../components/Container"

const Resep = () => {
  const resep = {
    'Nama Dorayaki' : [],
    'Nama Resep' : []
  }
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', 'http://localhost:8000/dorayaki', false);

  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        const coba = JSON.parse(xmlhttp.responseText);
        coba.forEach((element) => {
          resep["Nama Dorayaki"].push(element.name);
          var xmlhttp1 = new XMLHttpRequest()
          xmlhttp1.open('GET', 'http://localhost:8000/resep/' + element.resepId, false);

          xmlhttp1.onreadystatechange = () => {
            if (xmlhttp1.readyState === 4) {
              if(xmlhttp1.status === 200) {
                const dataResep = JSON.parse(xmlhttp1.responseText);
                resep["Nama Resep"].push(dataResep.name);
              }
            }
          }

          xmlhttp1.send();
          
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
