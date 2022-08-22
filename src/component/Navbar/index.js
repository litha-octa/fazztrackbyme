import React from 'react'
import { logoFazz } from '../../asset/image';
import './styleNav.css'
import { Button } from '@chakra-ui/react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return(
    <>
      <nav className='shadow'>
        <Link to ='/'>
        <img src={logoFazz} alt={'fazztrack logo'} className={'logoNav'}/>
        </Link>
        <div className={'menuNav'}>
          <Link to = '/minicamp'>
          Kelas
          </Link>
          </div>
        <div className={'menuNav'}>Dukungan</div>
        <div className={'menuNav'}>Tentang</div>
        <div className={'menuNav'}>Hire Our Graduates</div>
        <div  className={'btnNavContainer'}>
          <Link to={'/Login'}>
        <Button colorScheme='gray' variant='outline' className={'btnNav'}>Masuk</Button>
          </Link>
        <Button colorScheme='facebook' className={'btnNav'}>Daftar</Button>
        </div>
      </nav>
    </>
  )
}
export default Navbar