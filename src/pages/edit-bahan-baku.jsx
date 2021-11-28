import React from 'react';
import { useParams } from 'react-router';

import Sidebar from "../components/Sidebar";
import Container from "../components/Container"
import baseUrl from "../config";
import token from '../token';

const EditBahanBaku = () => {

  const bahanBakuUrl = baseUrl + '/bahan-baku/';
  const { id } = useParams();
  let bahanBaku = {};

  const editBahanBaku = () => {
    const stok = parseInt(document.getElementById("stok").value);
    // TODO: Ambil token dari cookie

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
      const bahanBakuData = JSON.parse(xmlhttp.responseText);
      if(xmlhttp.status === 200){
        bahanBaku.name = bahanBakuData.name;
        bahanBaku.stok = bahanBakuData.stok;
        bahanBaku.unit = bahanBakuData.unit
      } else{
        alert(bahanBakuData.message);
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
