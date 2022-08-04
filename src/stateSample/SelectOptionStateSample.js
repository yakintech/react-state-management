import React, { useState } from 'react'

function SelectOptionStateSample() {

  const [selectedValue, setselectedValue] = useState(0);
  const [selectedIndex, setselectedIndex] = useState(0);
  //Butona bastığında seçili option değerini(value) bana versin
  const getOptionValue = () => {
    alert(selectedValue)
  }


  const getOptionText = () => {


  //  var citySelect =  document.getElementsByTagName('select')[1];
  //  console.log('City text', citySelect[selectedIndex].innerText);


    let cityName = document.getElementById('cityList')[selectedIndex].innerText
    console.log('City text', cityName);

  }


  return (<>

    <div>
      <select onChange={(e) => setselectedValue(e.target.value)}>
        <option value={1}>Türkiye</option>
        <option value={2}>Almanya</option>
        <option value={3}>İran</option>
        <option value={4}>Yunanistan</option>
        <option value={5}>Rusya</option>
      </select>
      <button onClick={() => getOptionValue()}>Get Value</button>
    </div>


    <div>
      <select id='cityList' onChange={(e) => setselectedIndex(e.target.selectedIndex)}>
        <option value={1}>İzmir</option>
        <option value={2}>İstanbul</option>
        <option value={3}>Aydın</option>
        <option value={4}>Diyarbakır</option>
        <option value={5}>Trabzon</option>
      </select>
      <button onClick={() => getOptionText()}>Get Text</button>
    </div>


  </>
  )
}

export default SelectOptionStateSample