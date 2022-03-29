
import { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox.js';
import Button from './components/Button.js'
import Data from './quotes.json'
// =======================================Begin App==JS Section==============================================================================



function App() {
  //==========================This codes generate a random Quote when the apliccation its refresh.============================================
  //==========================The useState its getting acces to the json file with Data.quotes[]==============================================
  //==========================The i(index) make the function of select a random Quote of the quotes.json======================================
     let i= Math.floor(Math.random()*102);
     const [quote,setquote]=useState(Data.quotes[i])
//================================This is useState for the color change.======================================================================
  
   const [color,setcolor]=useState('blur')


//====================================This function make selection of a random color==========================================================
  function changeColor(){
    let color=Math.floor(Math.random()*6);
    if(color=== 0){setcolor('lightblue')} 
    else if
    (color=== 1){setcolor('lightgrey')}
    else if
    (color=== 2){setcolor('lightorange')}
    else if
    (color=== 3){setcolor('lightgreen')}
    else if
    (color=== 4){setcolor('blur')}
    else if
    (color=== 5){setcolor('lightyellow')}
  }

//=====================This function select a random quote and call the function changeColor()===================================================
  function indexQuote(){
    i = Math.floor(Math.random()*102);
    setquote(Data.quotes[i]);
    changeColor();
  }

//======================End JS=================================================================================================================  



  return (

<div className="App">
      <h1 className='head-h1'>Quote of the day</h1>

      
         <div className={'quote-box ' + color}>                                        {/* This its box container of quotes and recibes the color changer*/}
        
           <QuoteBox quote={quote}/>                                                    {/* This get the quote and author from QuoteBox.js */}
        
        <Button index={indexQuote} color={color} quote={quote.quote}/>                  {/* This its the button to change the quotes and color with the event onClick {index} calling the IndexQuote function  */}
    
       </div>
      

      
      
  </div>

  
  );
}

export default App;
//================================End=========================================================================