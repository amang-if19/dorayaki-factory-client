import React from 'react';

import Sidebar from "../components/Sidebar";
import Container from "../components/Container";
import baseUrl from '../config';

const CreateResep = () => { 
  const bahanBakuUrl = baseUrl + '/bahan-baku/';
  const resepUrl = baseUrl + '/resep/';
  const dorayakiUrl = baseUrl + '/dorayaki/';
  const bahanBakuInResepUrl = baseUrl + '/bahan-baku-in-resep/';
  const bahanBaku = [];

  const addDorayaki = (resepId, token) => {
    const dorayakiName = document.getElementById('dorayaki').value;
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', dorayakiUrl, false);
    const body = {
      name: dorayakiName,
      resepId,
      token
    };
    const jsonBody = JSON.stringify(body);
    xmlhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xmlhttp.send(jsonBody);
  }

  const addBahanBakuInResep = (resepId, bahanBakuId, amount, token) => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', bahanBakuInResepUrl, false);
    const body = {
      bahanBakuId,
      resepId,
      bahanBakuAmount: amount,
      token
    };
    const jsonBody = JSON.stringify(body);
    xmlhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xmlhttp.send(jsonBody);
  }

  const addResep = () => {
    const resepName = document.getElementById('resep').value;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYzODA4OTc3NSwiZXhwIjoxNjM4MDk2OTc1fQ.peUAL-01368Mi0cMqDpVEShWh-lUK2LQRxO_Uag2TVI";

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', resepUrl, false);
    const body = {
      name: resepName,
      token
    };
    const jsonBody = JSON.stringify(body);

    xmlhttp.onreadystatechange = () => {
      if(xmlhttp.readyState === 4){
        const resepData = JSON.parse(xmlhttp.responseText);
        if(xmlhttp.status === 201){
          // Tambah data di tabel dorayaki
          addDorayaki(resepData.data.id, token);

          // Tambah data di bahanBakuInResep
          bahanBaku.forEach(element => {
            let isCheck = document.getElementById(element.name).checked;
            let amount = document.getElementById('count:'+element.name).value;
            if(isCheck){
              addBahanBakuInResep(resepData.data.id, element.id, amount, token);
            }
          });
        } 
        alert(resepData.message);
      }
    }

    xmlhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xmlhttp.send(jsonBody);

  }

  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', bahanBakuUrl, false);

  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        const bahanBakuData = JSON.parse(xmlhttp.responseText);
        bahanBakuData.forEach(element => {
          bahanBaku.push({
            id: element.id,
            name: element.name
          });
        });
      }
    }
  }
  
  xmlhttp.send()

  return (
    <Container>
      <Sidebar/>
      <div className='h3 text-center'>Tambah Resep</div>
      <br/><br/>
      <form className='flex flex-col justify-content-center'>
        <br/><br/>
        <div className='h6'>Nama resep :</div>
        <div className='item-center text-center'>
          <input id="resep" className="form-group form-control" placeholder="Nama resep" min="1" required/>
        </div>
        <div className='h6'>Nama dorayaki :</div>
        <div className='item-center text-center'>
          <input id="dorayaki" className="form-group form-control" placeholder="Nama dorayaki" min="1" required/>
        </div>
        <div className='h6'>Bahan baku :</div>
        <div className='item-center text-center'> 
            {bahanBaku.map(function (item) {
              return <> <input type="checkbox" id={item.name}/> <label>{item.name}</label> <input id={'count:' + item.name} className="form-group form-control" placeholder="Amount" min="1"/> <br/></>;
            })}
        </div>
        <br/>
        <button type="submit" onClick={addResep} className="form-group btn btn-primary col-3 align-self-center">Tambah</button>
      </form>
    </Container>
  );
}

export default CreateResep;
