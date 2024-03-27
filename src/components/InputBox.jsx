import React from 'react'
import arrow from '../media/images/icon-arrow.svg'


export default function Input({ onButtonClick }) {

  async function handleQuery() {
    try {
      // Variable declaration
      const json = require('./secret.json');
      let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${json.APIKEY}&ipAddress=`;
      const box = document.getElementById("inputip").value;
      const Ip = document.getElementById("ip");
      const loc = document.getElementById("loc");
      const time = document.getElementById("time");
      const isp = document.getElementById("isp");

      url = url.concat(box);
      const response = await fetch(url);
      const data = await response.json();


      // Formatting output
      Ip.innerHTML = data.ip;
      isp.innerHTML = data.isp;
      time.innerHTML = data.location.timezone;
      loc.innerHTML = `${data.location.city} ${data.location.country}`;

    } catch (error) {
      console.error('Error handling query:', error);
    }
  }
  function combine() {
    handleQuery();
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
        <button onClick={combine}><span className='bg-black text-white inline-flex p-3 m-2 rounded-full'><img className='w-auto' src={arrow} alt="Hero" /></span></button>

      </div>
    </div>
  )
}
