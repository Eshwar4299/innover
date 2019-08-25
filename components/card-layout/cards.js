import React from 'react'

const Cards = () => (

    <
    main className = "main-area" >
    <
    div className = "centered" >
    <
    section className = "cards" >
    <
    article className = "card" >

    <
    a href = "#" >
    <
    img src = "/static/tiles-images/odooTile.png"
    alt = "A banana that looks like a bird" / >

    <
    /a>  < /
    article >

    <
    article className = "card" >
    <
    a href = "#" >
    <
    picture className = "thumbnail" >
    <
    img src = "/static/tiles-images/productTile.png"
    alt = "Norwegian boller" / >
    <
    /picture>  < /
    a >

    <
    /article>

    <
    article className = "card" >
    <
    a href = "#" >
    <
    picture className = "thumbnail" >
    <
    img src = "/static/tiles-images/innoTile.png"
    alt = "A dinosaur wearing an aluminium jacket" / >
    <
    /picture> < /
    a > <
    /article>

    <
    article className = "card item4" >

    <
    a href = "#" >
    <
    img src = "/static/tiles-images/zorg.jpg"
    alt = "A banana that looks like a bird" / >

    <
    /a> < /
    article >

    <
    article className = "card" >
    <
    a href = "#" >
    <
    picture className = "thumbnail" >
    <
    img src = "/static/tiles-images/innoTile.png"
    alt = "A dinosaur wearing an aluminium jacket" / >
    <
    /picture> < /
    a > <
    /article>

    <
    article className = "card" >

    <
    a href = "#" >
    <
    img src = "/static/tiles-images/productTile.png"
    alt = "A banana that looks like a bird" / >

    <
    /a> < /
    article >

    <
    article className = "card item4" >

    <
    a href = "#" >
    <
    img src = "/static/tiles-images/zorg.jpg"
    alt = "A banana that looks like a bird" / >

    <
    /a> < /
    article >


    <
    /section>

    <
    /div>


    <
    style jsx > {
        `  

   .main-area{
        margin:auto;
   }
  img {
      display: block;
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
      margin-bottom: 1em;
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
        justify-content: space-evenly;
    }
      .item4{
        width : 62%;
    }
  }
`
    } <
    /style> < /
    main >
)

export default Cards