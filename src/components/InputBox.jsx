import React from 'react'
import arrow from '../media/images/icon-arrow.svg'
import {initialize} from './Map';


export default function Input() {
  
  function handleQuery() {
    var json = require('./secret.json');
    var url = `https://geo.ipify.org/api/v2/country,city?apiKey=${json.APIKEY}&ipAddress=`;
    var box = document.getElementById("inputip").value;
    var Ip = document.getElementById("ip");
    var loc = document.getElementById("loc");
    var time = document.getElementById("time");
    var isp = document.getElementById("isp");

    url = url.concat(box);
    fetch(url).then(
      response => response.text()
    ).then((response) => {
      var i = JSON.parse(response);
      var lati = i.location.lat;
      var long = i.location.lng;
      initialize(lati,long);
      Ip.innerHTML = i.ip;
      isp.innerHTML = i.isp
      time.innerHTML = i.location.timezone;
      loc.innerHTML = `${i.location.city} ${i.location.country}`;
    })


  }
  return (
    <div className='grid m-6 justify-items-center'>

      <div className=" rounded-md shadow-sm">
        <input
          id='inputip'
          type="text"
          className=" rounded-xl w-96  py-3 pl-4 pr-4 text-gray-900  ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder='Search for any IP address or domain'
        />
        <button onClick={handleQuery}><span className='bg-black text-white inline-flex p-3 m-2 rounded-full'><img className='w-auto' src={arrow} alt="Hero" /></span></button>

      </div>
    </div>
  )
}
