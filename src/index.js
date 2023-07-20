import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const All = () => (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )

const Header =() =>  (
    <div className='header'>
    <ul>
      <li className='logo'></li>
      <li>Home</li>
      <li>Status</li>
      <li>About us</li>
      <li>Social medias</li>
    </ul>
    <hr />
    </div>
)
const Main = () => (
  <div className='main'>
    <div className='banner'>
      <img src='https://www.komododigital.co.uk/app/uploads/2021/05/React-1-1024x683.jpg' alt='banner' />
    </div>
    <div className='cards'>
      <div className='card1'></div>
      <div className='card2'></div>
      <div className='card3'></div>
    </div>
  </div>
)
const Footer = () => (
  <div className='footer'>
    <a>Twitter</a>
    <a>Instagram</a>
    <a>Youtube</a>

    
  </div>
)
//Footer
root.render(
  <All/>
)