import React from 'react'

function Modal({showModal, toggleModal}) {
    if(!showModal){
        return null;
    }

    function handleModal(){
        toggleModal()
    }
  return (
    <div className='modal'>
        <nav className='modal-nav'>
            <img src="/images/logo.svg" alt="logo" />
            <button onClick={handleModal} className='hamburger'>
              <img  src="/images/icon-close.svg" alt="close" />
            </button>
        </nav>
        <div className='modal-body'>  
            <a href='/' className='modal-option'>Home</a>
            <a href='/' className='modal-option'>About</a>
            <a href='/' className='modal-option'>Contact</a>
            <a href='/' className='modal-option'>Blog</a>
            <a href='/' className='modal-option'>Careers</a>
        </div>
    </div>
  )
}

export default Modal
