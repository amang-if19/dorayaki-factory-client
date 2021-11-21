import React from 'react';

import MelihatDaftarData from '../components/MelihatDaftarData';
import Sidebar from "../components/Sidebar";
import Container from "../components/Container"

const Request = () => {
  const request = {
    'Nama request' : ['Ayam', 'Bebek', 'Cacing'],
    'Banyaknya' : [1,2,3]
  }

  return (
    <Container>
      <Sidebar/>
      <div className='h3 text-center'>Request</div>
      <MelihatDaftarData data={request} />
    </Container>
  )
}

export default Request;
