import React from 'react'
import { logoFazz } from '../../asset/image';
import './styleNav.css'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import {
  ChevronDownIcon,
  ArrowForwardIcon,
} from '@chakra-ui/icons'
import {Link} from "react-router-dom";

const Navbar = () => {
  return(
    <>
      <nav className='shadow'>
        <Link to ='/'  className={'logoNav'}>
        <img src={logoFazz} alt={'fazztrack logo'}/>
        </Link>
          <Menu>
            <MenuButton className={'menuButton'}>
              Kelas <ChevronDownIcon />
            </MenuButton>
            <MenuList className={'rowMenuList'}>
              <MenuGroup>
                <div className={'menuGroup'}>BOOTCAMP</div>
                <MenuItem className={'menuItem'}>
                  <Link to ='/class-detail'>
                  Fullstack Mobile
                  </Link>
                </MenuItem>
                <MenuItem className={'menuItem'}>
                  <Link to ='/class-detail'>
                  Fullstack Website
                  </Link>
                </MenuItem>
                <MenuItem className={'menuItem'}>
                  <Link to ='/class-detail'>
                  Backend Javaspring
                  </Link>
                </MenuItem>
                <MenuItem className={'menuItem'}>
                  <Link to ='/class-detail'>
                  Backend Golang
                  </Link>
                </MenuItem>
              </MenuGroup>
              <MenuGroup>
                <div className={'menuGroup'}>MINI BOOTCAMP</div>
                <MenuItem className={'menuItem'}>Digital Marketing</MenuItem>
                <MenuItem className={'menuItem'}>Cyber Security (Hacker/Bug Bounty)</MenuItem>
                <MenuItem className={'menuItem'}>QA Automation Engineer</MenuItem>
                <MenuItem className={'menuItem'}>
                  <Link to ='/minicamp'>
                  Lihat Semua <ArrowForwardIcon/>
                  </Link>
                  </MenuItem>
              </MenuGroup>
              <MenuGroup>
                <div className={'menuGroup'}>VIDEO BELAJAR</div>
                <MenuItem className={'menuItem'}>
                  <Link to ='/module-belajar'>
                  Lihat Semua <ArrowForwardIcon/>
                  </Link>
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>

        <Menu>
          <MenuButton className={'menuButton'}>
            Dukungan <ChevronDownIcon />
          </MenuButton>
          <MenuList>
              <MenuItem className={'menuItem'}>Cicil Setelah Kerja (ISA)</MenuItem>
              <MenuItem className={'menuItem'}>Career Ready</MenuItem>
              <MenuItem className={'menuItem'}>FAQ</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton className={'menuButton'}>
            Tentang <ChevronDownIcon />
          </MenuButton>
          <MenuList className={'rowMenuList'}>
            <MenuGroup>
            <div className={'menuGroup'}>ALUMNI</div>
            <MenuItem className={'menuItem'}>Cerita Alumni</MenuItem>
            </MenuGroup>
            <MenuGroup>
              <div className={'menuGroup'}>FAZZTRACK</div>
            <MenuItem className={'menuItem'}>Sekilas Fazztrack</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton className={'menuButton'}>
            Hire Our Graduates
          </MenuButton>
        </Menu>

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