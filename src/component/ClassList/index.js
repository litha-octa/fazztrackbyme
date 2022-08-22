import React from 'react'
import './styleClassList.css'
import { classes } from '../../asset/data';
import { Box } from '@chakra-ui/react';


const ClassList = () => {
  const caption='Pilihan Bootcamp Fazztrack'
  const desc = 'Bootcamp dilaksanakan berdasarkan kurikulum yang telah disusun untuk kamu siap bekerja.'
  return(
<>

  <div className={'caption'}>{caption}</div>
  <div className={'desc'}>{desc}</div>
  <div className={'cardContainer2'}>
    {classes.map(item => {
      return(

        <Box className={'cardItem'}>
          <div className={'flex-row'}>
          <img src={item.img} alt='class-Img' className={'imgClass'} />
          <div>
            <div className={'class-name'}>{item.name}</div>
            <div className={'class-desc'}>{item.desc}</div>
            <div className={'linkToKurikulum'}>Lihat Kurikulum ---></div>
          </div>
          </div>
        </Box>

      )
    })}
  </div>
</>
  )
}
export default ClassList