import React from 'react';
import { Link } from 'react-router-dom';

import MelihatDaftarData from '../components/MelihatDaftarData';
import Sidebar from "../components/Sidebar";
import Container from "../components/Container"
import baseUrl from "../config";

const Resep = () => {
	const dorayakiUrl = baseUrl + '/dorayaki/';
	const resepUrl = baseUrl + '/resep/';
  const resep = {
    'Nama Dorayaki' : [],
    'Nama Resep' : [],
    '': [],
  }
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', dorayakiUrl, false);

  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        const coba = JSON.parse(xmlhttp.responseText);
        coba.forEach((element) => {
          resep["Nama Dorayaki"].push(element.name);
          var xmlhttp1 = new XMLHttpRequest()
          xmlhttp1.open('GET', resepUrl + element.resepId, false);

          xmlhttp1.onreadystatechange = () => {
            if (xmlhttp1.readyState === 4) {
              if(xmlhttp1.status === 200) {
                const dataResep = JSON.parse(xmlhttp1.responseText);
                resep["Nama Resep"].push(dataResep.name);
              }
            }
          }
          const urlDetail = '/resep-detail/' + element.id;
          resep[''].push(<Link to={urlDetail}>Detail</Link>);

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
