
//This its the code to make the content box of the quotes,im calling the quote and the author.
//The quote in the funcion brackets its calling the quote of the UseState.
const QuoteBox=({quote}) => {
    return(
     <div>
             <h2>{quote.quote}</h2>
             <h3>{quote.author}</h3>                 
     </div>



    )
}



export default QuoteBox;

