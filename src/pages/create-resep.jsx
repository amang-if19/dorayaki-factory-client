import React from 'react';

import Sidebar from "../components/Sidebar";
import Container from "../components/Container";

const CreateResep = () => { 
  return (
    <Container>
      <Sidebar/>
      <div className='h3 text-center'>Tambah Resep</div>
    </Container>
  );
}

export default CreateResep;
