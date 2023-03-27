import React, { useState } from 'react'
import Dadra from '../Tables/Dadra';
import Jhaptaal from '../Tables/Jhaptaal';
import Kaherwa from '../Tables/Kaherwa';
import Teentaal from '../Tables/Teentaal';

import './SelectTaal.css'
function SelectTaal() {

  const [taal, setTaal] = useState("teentaal");
  let taalno = 1

  if(taal=='teentaal'){
    taalno=1
  }
  if(taal=='jhaptaal'){
    taalno=2
  }
  if(taal=='kaherwa'){
    taalno=3
  }
  if(taal=='dadra'){
    taalno=4
  }





  

  return (
    <div className='taal-section'>
      <div className="select-taal">
        <div className="select-taal-form">
          <form >
              <div className='taal-selection-select'>
                <select onChange={(e)=>{
                  setTaal(e.target.value);
                }}>
                  <option value="teentaal">Teen Taal</option>
                  <option value="jhaptaal">Jhaptaal</option>
                  <option value="dadra">Dadra</option>
                  <option value="kaherwa">Kaherwa</option>
                </select> <br /> <br />
                <button  type="submit">Submit</button>
              </div>
          </form>
        </div>
      </div>
      {
        taalno==1?<><Teentaal/></>:<></>
      }
      {
        taalno==2?<><Jhaptaal/></>:<></>
      }
      {
        taalno==3?<><Kaherwa/></>:<></>
      }
      {
        taalno==4?<><Dadra/></>:<></>
      }
    </div>
  )
}

export default SelectTaal