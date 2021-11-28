import React from 'react';
import { useParams } from 'react-router';

import Sidebar from "../components/Sidebar";
import Container from "../components/Container"
import baseUrl from "../config";

const EditBahanBaku = () => {

  const bahanBakuUrl = baseUrl + '/bahan-baku/';
  const { id } = useParams();
  let bahanBaku = {};

  const editBahanBaku = () => {
    const stok = parseInt(document.getElementById("stok").value);
    // TODO: Ambil token dari cookie
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYzODA4MTQ4OSwiZXhwIjoxNjM4MDg4Njg5fQ.9SB2eEdK_h3XpYgPy6TP6PYjAz1u8e7YdFcY-tVSwI8";

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('PUT', bahanBakuUrl + id, false);
    const body = {
        stok,
        token
    };
    const jsonBody = JSON.stringify(body);
    
    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState === 4){
            if(xmlhttp.status === 200){
                const msg = JSON.parse(xmlhttp.responseText);
                alert(msg.message);
            }
        }
    }

    xmlhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xmlhttp.send(jsonBody);

    window.location.reload();
  }

  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', bahanBakuUrl + id, false);

  xmlhttp.onreadystatechange = () => {
    if(xmlhttp.readyState === 4) {
      if(xmlhttp.status === 200){
        const bahanBakuData = JSON.parse(xmlhttp.responseText);
        bahanBaku.name = bahanBakuData.name;
        bahanBaku.stok = bahanBakuData.stok;
        bahanBaku.unit = bahanBakuData.unit
      }
    }
  }

  xmlhttp.send();

  return (
    <Container>
      <Sidebar/>
      <div className='h3 text-center'>Edit Bahan Baku</div>
      <form className='flex flex-col justify-content-center'>
        <br/><br/>
        <div className='h6'>Nama bahan baku : {bahanBaku.name}</div>
        <div className='h6'>Stok awal : {bahanBaku.stok}</div>
        <div className='item-center text-center'>
          <input id="stok" type="number" className="form-group form-control" placeholder="Stok" min="1" required/>
        </div>
        <div className='h6'>Unit : {bahanBaku.unit}</div>
        <br/>
        <button type="submit" onClick={editBahanBaku}className="form-group btn btn-primary col-3 align-self-center">Edit</button>
      </form>
    </Container>
  )
}

export default EditBahanBaku;
