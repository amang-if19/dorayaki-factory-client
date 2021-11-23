import React from 'react';
// import styled from "styled-components";
import MelihatDaftarData from '../components/MelihatDaftarData';
import Sidebar from "../components/Sidebar";
import Container from "../components/Container"
// import Navbar from '../components/Navbar';


const Pesanan = () => {
  const pesanan = {
    'Nama pesanan' : ['Ayam', 'Bebek', 'Cacing'],
    'Banyaknya' : [1,2,3]
  }

  return (
    <Container>
      <Sidebar/> 
      <div className='h3 text-center'>Resep</div>
      <MelihatDaftarData data={pesanan} />
    </Container>
  )
}

export default Pesanan;
