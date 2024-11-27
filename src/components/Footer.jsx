import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="text">
        <p>&copy; {currentYear} <span>Twizerimana Olivier</span>. All rights reserved</p>
        <p>Designed & developed by <a href="https://github.com/olivicegodwin467">Twizerimana Olivier</a></p>
      </div>
      <div className="social">
        <a target='_blank' rel='noreferrer' href="#"><i class="fa-brands fa-twitter"></i></a>
        <a target='_blank' rel='noreferrer' href="#"><i class="fa-brands fa-instagram"></i></a>
        <a target='_blank' rel='noreferrer' href="https://github.com/olivicegodwin467"><i class="fa-brands fa-github"></i></a>
        <a target='_blank' rel='noreferrer' href="#"><i class="fa-brands fa-linkedin"></i></a>
      </div>
    </footer>
  )
}

export default Footer
