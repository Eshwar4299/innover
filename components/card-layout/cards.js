import React from 'react'
import Head from 'next/head'

const Cards = () => (
    <main className="main-area">
    <div className="centered">
       <section className="cards">
           <article className="card">
               <a href="#">
                 <picture className="thumbnail">
                   <img src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg" alt="A banana that looks like a bird" />
                  </picture>
                   <div className="card-content">
                       <h2>Vacation Image 01</h2>
                       <p>TUX re-inventing the wheel, and move the needle. Feature creep dogpile that but diversify kpis but market-facing.</p>
                   </div>
                   </a>
           </article>

           <article className="card">
                   <a href="#">
                       <picture className="thumbnail">
                           <img src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-02.jpg" alt="Norwegian boller" />
                       </picture>
                       <div className="card-content">
                           <h2>Vacation Image 02</h2>
                           <p>Staff engagement synergize productive mindfulness and waste of resources cross sabers, or forcing function shotgun approach drink the Kool-aid.</p>
                           <p>Execute are we in agreeance what do you feel you would bring to the table if you were hired for this position, nor closer to the metal goalposts, are there any leftovers in the kitchen?.</p>
                       </div>
                   </a>
               </article>

               <article className="card">
                   <a href="#">
                       <picture className="thumbnail">
                           <img src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-03.jpg" alt="A dinosaur wearing an aluminium jacket" />
                       </picture>
                       <div className="card-content">
                           <h2>Vacation Image 03</h2>
                           <p>Viral engagement anti-pattern back of the net, for meeting assassin horsehead offer. Loop back design thinking drop-dead date. </p>
                       </div>
                   </a>
               </article>

               <article className="card">
                   <a href="#">
                       <picture className="thumbnail">
                           <img src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-04.jpg" alt="Chocolate filled boller" />
                       </picture>
                       <div className="card-content">
                           <h2>Vacation Image 04</h2>
                           <p>We need a paradigm shift get all your ducks in a row. I just wanted to give you a heads-up we need distributors to evangelize the new line to local markets when does this sunset? so waste of resources, yet fire up your browser, or touch base closing these latest prospects is like putting socks on an octopus.</p>
                       </div>
                   </a>
               </article>

       </section>
    </div>
       

   <style jsx>{`  

   .main-area{
       display:flex;
   }
  img {
      display: block;
      border: 0;
      width: 100%;
      height: auto;
  }
  
  
  .card {
      background: white;
      margin-bottom: 2em;	
      flex: 0 1 calc(50% - 1em);

  }
  
  .card a {
      color: black;
      text-decoration: none;
  }
  
  .card a:hover {
      box-shadow: 3px 3px 8px hsl(0, 0%, 80%);
  }
  
  .card-content {
      padding: 1.4em;
  }
  
  .card-content h2 {
      margin-top: 0;
      margin-bottom: .5em;
      font-weight: bold;
  }
  
  .card-content p {
      font-size: 80%;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
  
  /* Flexbox stuff */
  
  @media screen and (min-width: 40em) {
      .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
      }
  
      .card {
          flex: 0 1 calc(50% - 1em);
      }
  }
  
  @media screen and (min-width: 60em) {
  
      .card {
          flex: 0 1 calc(25% - 1em);
      }
  }
`}
   </style>
</main>
)

export default Cards
