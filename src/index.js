import React from 'react'
import ReactDOM from 'react-dom'

import './assets/css/index.css'

import Cover from './assets/images/cover.png'

const App = () => (
  <section className='hero is-success is-fullheight' style={{ backgroundColor: '#202225' }}>
    <div className='hero-body'>
      <div className='container has-text-centered'>
        <h1 className='title'>Hi there <span role='img' aria-label='hands-up'>🙌</span></h1>
        <h2 className='subtitle'>The page has been moved <strong><a href='https://chksnd.github.io/'>here</a></strong>!</h2>
        <a href='https://chksnd.github.io/'>
          <img src={Cover} alt='Logo' />
        </a>
        <small>
          <p>Made by <a href='https://aimazh.github.io/' style={{ color: 'white' }}>@aimazh</a></p>
          <p>&copy; 2020 Aibek Mazhitov</p>
        </small>
      </div>
    </div>
  </section>
)

ReactDOM.render(<App />, document.getElementById('root'))
