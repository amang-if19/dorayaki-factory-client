import React from 'react';

import MelihatDaftarData from '../components/MelihatDaftarData';
import Sidebar from "../components/Sidebar";
import Container from "../components/Container"

const Request = () => {
  const request = {
    'Nama Dorayaki' : [],
    'Quantity' : [],
    'Action': [],
  }

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', 'http://localhost:8000/request', false);

  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        const coba = JSON.parse(xmlhttp.responseText);
        console.log(coba);
        coba.forEach((element) => {
          request["Quantity"].push(element.quantity);
          request["Action"].push(element.action);
          var xmlhttp1 = new XMLHttpRequest();
          xmlhttp1.open('GET', 'http://localhost:8000/dorayaki/' + element.dorayakiId, false);

          xmlhttp1.onreadystatechange = () => {
            if(xmlhttp1.readyState === 4) {
              if(xmlhttp1.status === 200) {
                const dorayaki = JSON.parse(xmlhttp1.responseText);
                request["Nama Dorayaki"].push(dorayaki.name);
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
      <div className='h3 text-center'>Request</div>
      <MelihatDaftarData data={request} />
    </Container>
  )
}

export default Request;
