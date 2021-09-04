import logo from '@/assets/svg/logo.svg'
import React, { Component } from 'react'

class HelloWorld extends Component {
  render () {
    return (
      <div className='hello'>
        <header className='hello-header'>
          <img src={ logo } className='hello-logo' alt='logo' />
          <p className='hello-text'>
            Hello React
          </p>
          <p>
            <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer' >
              Learn React
            </a>
            <a href='https://github.com/Chenxi-Lau/quick-react' target='_blank' rel='noopener noreferrer' >
              项目地址
            </a>
          </p>
        </header>
      </div>
    )
  }
}

export default HelloWorld
