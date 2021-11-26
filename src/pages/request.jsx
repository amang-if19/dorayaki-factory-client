import React from 'react';

import MelihatDaftarData from '../components/MelihatDaftarData';
import Sidebar from "../components/Sidebar";
import Container from "../components/Container"

const Request = () => {
  const request = {
    'Dorayaki ID' : [],
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
          console.log(element);
          request["Dorayaki ID"].push(element.dorayakiId);
          request["Quantity"].push(element.quantity);
          request["Action"].push(element.action);
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
