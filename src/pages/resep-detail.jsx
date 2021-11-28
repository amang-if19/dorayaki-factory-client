import React from 'react';
import { useParams } from 'react-router';

import MelihatDaftarData from '../components/MelihatDaftarData';
import Sidebar from "../components/Sidebar";
import Container from "../components/Container"
import baseUrl from "../config";

const ResepDetail = () => {

  const dorayakiUrl = baseUrl + '/dorayaki/';
  const resepUrl = baseUrl + '/resep/';
  const { id } = useParams();
  const resep = {
    'Nama Dorayaki' : [],
    'Nama Resep' : [],
    'Nama Bahan Baku': [],
    'Jumlah Bahan Baku': [],
  }

  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', dorayakiUrl + id, false);

  xmlhttp.onreadystatechange = () => {
    if(xmlhttp.readyState === 4) {
      if(xmlhttp.status === 200){
        const dorayakiData = JSON.parse(xmlhttp.responseText);
        resep['Nama Dorayaki'].push(dorayakiData.name);

        const xmlhttp1 = new XMLHttpRequest();
        xmlhttp1.open('GET', resepUrl + '/detail/' + dorayakiData.resepId, false);

        xmlhttp1.onreadystatechange = () => {
          if(xmlhttp1.readyState === 4) {
            if(xmlhttp1.status === 200) {
              const resepData = JSON.parse(xmlhttp1.responseText);
              resep['Nama Resep'].push(resepData.name);
              resep['Nama Bahan Baku'].push(null);
              resep['Jumlah Bahan Baku'].push(null);

              resepData.bahanBaku.forEach(element => {
              resep['Nama Dorayaki'].push(null);
              resep['Nama Resep'].push(null);
              resep['Nama Bahan Baku'].push(element.name);
              resep['Jumlah Bahan Baku'].push(element.bahanBakuAmount);
              });
            }
          }
        }

        xmlhttp1.send();
      }
    }
  }

  xmlhttp.send();

  return (
    <Container>
      <Sidebar/>
      <div className='h3 text-center'>Resep Detail</div>
      <MelihatDaftarData data={resep} />
    </Container>
  )
}

export default ResepDetail;
