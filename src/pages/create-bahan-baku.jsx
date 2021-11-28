import React from 'react';

import Sidebar from "../components/Sidebar";
import Container from "../components/Container";
import baseUrl from "../config";
import token from "../token";

const CreateBahanBaku = () => {
    const bahanBakuUrl = baseUrl + '/bahan-baku';

    const addBahanBaku = () => {
        
        const name = document.getElementById("name").value;
        const stok = parseInt(document.getElementById("stok").value);
        const unit = document.getElementById('unit').value;
        // TODO: Ambil token dari cookie

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', bahanBakuUrl, false);
        const body = {
            name,
            stok,
            unit,
            token
        };
        const jsonBody = JSON.stringify(body);
        
        xmlhttp.onreadystatechange = () => {
            if(xmlhttp.readyState === 4){
              const msg = JSON.parse(xmlhttp.responseText);
              alert(msg.message);
            }
        }

        xmlhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
        xmlhttp.send(jsonBody);

        window.location.reload();
    }

  return (
    <Container>
      <Sidebar/>
      <div className='h3 text-center'>Tambah Bahan Baku</div>
      <br/><br/>
      <form className='flex flex-col justify-content-center'>
        <br/><br/>
        <div className='h6'>Nama bahan baku :</div>
        <div className='item-center text-center'>
          <input id="name" className="form-group form-control" placeholder="Nama bahan baku" min="1" required/>
        </div>
        <div className='h6'>Stok :</div>
        <div className='item-center text-center'>
          <input id="stok" type="number" className="form-group form-control" placeholder="Stok" min="1" required/>
        </div>
        <div className='h6'>Unit :</div>
        <div className='item-center text-center'>
          <input id="unit" className="form-group form-control" placeholder="Unit" min="1" required/>
        </div>
        <br/>
        <button type="submit" onClick={addBahanBaku} className="form-group btn btn-primary col-3 align-self-center">Tambah</button>
      </form>

    </Container>
  );
}

export default CreateBahanBaku;
