import './App.css';
import React,{useState} from "react";
function App(){
  const[Confirmed,setConfirmed]=useState(false);
  const[name,setName]=useState('');
  const[cardNo,setCardNo]=useState('');
  const[expiryMonth,setExpiryMonth]=useState('');
  const[expiryYear,setExpiryYear]=useState('');
  const[cvc,setCvc]=useState('');

  const nameHandleChange=(event)=>{
    setName(event.target.value);
  }
  const accNoHandleChange=(event)=>{
    setCardNo(event.target.value);
  }
  const expiryMonthHandleChange=(event)=>{
     setExpiryMonth(event.target.value);
  }
  const expiryYearHandleChange=(event)=>{
    setExpiryYear(event.target.value);
  }
  const cvcHandleChange=(event)=>{
    setCvc(event.target.value);
  }
    return(
        <div className='body'>
            <div className='section'>
               <div className="card-front">
                <div className='top'>
                    <div id='white'></div>
                    <div id='blank'></div>
                </div>
                <div className='bottom'>
                    <p id='card-n'>{cardNo}</p>
                    <div id='card-e'>  
                        <div id='name'>{name}</div>
                        <div id='ex'>{expiryMonth}/{expiryYear}</div>
                    </div>
                </div>
               </div>
               <div  className="card-back">
                 <div className='black'></div>
                 <div id="cvc-no"><p>{cvc}</p></div>
               </div>
            </div>
            <div className='aside'>
              {!Confirmed && <form className='form'>
                <div>
                  <label >CARDHOLDER NAME</label>
                  <input type="text" id="text" placeholder="e.g. Jane Applessed" value={name} onChange={nameHandleChange}/>
                </div>
                <br/>
                <div id="card">
                  <label >CARD NUMBER</label> 
                  <input type="number" id="number" placeholder="e.g. 1234 5678 9123 4567" maxLength="1" value={cardNo}
                  onChange={accNoHandleChange}/>
                </div>
                <br/>
                <div className="dates">
                    <div className="left-dates">
                      <label>EXP.DATE(MM/YY)</label> 
                      <div className="exp">
                        <div id="mm"><input 
                        type="number" id='Mm' placeholder="MM" value={expiryMonth} onChange={expiryMonthHandleChange}/></div>
                        <div id="yy"><input  type="number" id='Yy' placeholder="YY" value={expiryYear} onChange={expiryYearHandleChange}/></div>
                      </div>
                    </div>
                    <div className="right-dates"> 
                      <label>CVC</label>
                      <input id="cv" type="number" placeholder="e.g. 123" value={cvc} onChange={cvcHandleChange}/>
                    </div>
                </div>
                <br/>
                <button className="submit"  onClick={()=>setConfirmed(true)}>Confirm</button>
                </form>}
                {Confirmed && <Thankyou setConfirmed={setConfirmed}/>}
             
            </div>
        </div>
    )
}
function Thankyou(setConfirmed){
  return(
    <div className='thanx'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Purple_check.svg/1024px-Purple_check.svg.png' width='50px' alt=""/>
      <h2>Thank You!</h2>
      <p>We've added your card details</p>
      <button onClick={()=>setConfirmed.setConfirmed(false)}>Continue</button>
    </div>
  )
}
export default App;  
