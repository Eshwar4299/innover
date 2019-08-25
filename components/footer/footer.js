import React from 'react'

const Footer = () => (
  <div className="footer">
    <footer>
      <p className="footer-content">Here comes footer</p>
    </footer>
   <style jsx>{` 
        .footer{
            height:10vh;
            background-color:grey;
            color:white;
            text-align:center;
            vertical-align:middle;
        }

        .footer-content{
            font-size:30px;
        }
    `}</style>
  </div>

)

export default Footer
