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
  let resepName = '';
  let dorayakiName = '';
  const resep = {
    'Nama Bahan Baku': [],
    'Jumlah Bahan Baku': [],
  }

  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', dorayakiUrl + id, false);

  xmlhttp.onreadystatechange = () => {
    if(xmlhttp.readyState === 4) {
      const dorayakiData = JSON.parse(xmlhttp.responseText);
      if(xmlhttp.status === 200){
        dorayakiName = dorayakiData.name;

        const xmlhttp1 = new XMLHttpRequest();
        xmlhttp1.open('GET', resepUrl + '/detail/' + dorayakiData.resepId, false);

        xmlhttp1.onreadystatechange = () => {
          if(xmlhttp1.readyState === 4) {
            const resepData = JSON.parse(xmlhttp1.responseText);
            if(xmlhttp1.status === 200) {
              resepName = resepData.name;

              resepData.bahanBaku.forEach(element => {
              resep['Nama Bahan Baku'].push(element.name);
              resep['Jumlah Bahan Baku'].push(element.bahanBakuAmount);
              });
            }
          }
        }

        xmlhttp1.send();
      } else{
        alert(dorayakiData.message);
      }
    }
  }

  xmlhttp.send();

  return (
    <Container>
      <Sidebar/>
      <div className='h3 text-center'>Resep Detail</div>
      <div className='flex flex-col justify-content-center'>
        <br/><br/>
        <div className='h6'>Nama dorayaki : {dorayakiName}</div>
        <div className='h6'>Nama resep : {resepName}</div>
      <MelihatDaftarData data={resep} />
      </div>
    </Container>
  )
}

export default ResepDetail;
