import React from 'react'
import { Button } from '@chakra-ui/react';
import { AlumniStory } from '../../asset/data';
import './style.css';

const CeritaAlumni = () => {
  return(
    <>

      <div className={'captionAlumniStory'}>Cerita Alumni Bootcamp</div>
      <h5 className={'descAlumniStory'}>Cerita perjalanan heroik alumni bootcamp Fazztrack</h5>
      <Button>Lihat Selengkapnya</Button>
      <div className={'cardStoryContainer'}>
        {AlumniStory.map( item =>{
          return(
            <div className={'itemCardStory'}>
              <img src={item.img} alt={'img'} className={'imgStory'}/>
              <div className={'cardTitle'}>{item.title}</div>
              <div className={'cardStory'}>{item.story}</div>
            </div>
          )
        })

        }
      </div>
    </>
  )
}
export default CeritaAlumni