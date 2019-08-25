import React from 'react'

const Cards = () => (
    <main className="main-area">
    <div className="centered">
       <section className="cards">
           <article className="card">

               <a href="#">
               <img src="/static/tiles-images/odooTile.png" alt="A banana that looks like a bird" />

                   </a>
           </article>

           <article className="card">
                   <a href="#">
                       <picture className="thumbnail">
                           <img src="/static/tiles-images/productTile.png" alt="Norwegian boller" />
                       </picture>
                   </a>
            </article>

            <article className="card">
                   <a href="#">
                       <picture className="thumbnail">
                           <img src="/static/tiles-images/innoTile.png" alt="A dinosaur wearing an aluminium jacket" />
                       </picture>
                   </a>
            </article>
            
{/* 
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
               </article> */}
               <article className="card">
                   <a href="#">
                       <picture className="thumbnail">
                           <img src="/static/tiles-images/copy.jpg" alt="A dinosaur wearing an aluminium jacket" />
                       </picture>
                   </a>
            </article>
            <article className="card">
                   <a href="#">
                       <picture className="thumbnail">
                           <img src="/static/tiles-images/copy.jpg" alt="A dinosaur wearing an aluminium jacket" />
                       </picture>
                   </a>
            </article>

            <article className="card item4">

<a href="#">
<img src="/static/tiles-images/zorg.jpg" alt="A banana that looks like a bird" />

    </a>
</article>

<article className="card">
    <a href="#">
        <picture className="thumbnail">
            <img src="/static/tiles-images/innoTile.png" alt="A dinosaur wearing an aluminium jacket" />
        </picture>
    </a>
</article>


       </section>

    </div>
       

   <style jsx>{`  

   .main-area{
        margin:auto;
   }
  img {
      display: block;
      border: 0;
      opacity:.8;
      height: 100%;
      width:100%;
  }
  
  img:hover{
    opacity:.5;

  }
  .card {
      display:flex;
      background: white;
      margin-bottom: 2em;
      flex-basis:auto;
      justify-content: space-evenly;
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
      margin-bottom: 0;
      font-weight: bold;
  }
  
  .card-content p {
      font-size: 80%;
  }
  .cards {
    display: flex;
    flex-flow: wrap;
    flex-shrink: 2;
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
    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
      .card {

      }
      .item4{
        width : 66% !important;
    }
  }
`}
   </style>
</main>
)

export default Cards
