import React from "react";
import { alumniReview } from '../../asset/data';
import { Box } from '@chakra-ui/react';
import './styleCard.css'
import { logoIg } from '../../asset/image';

const AlumniReview = () => {
  const descInAlumniSec = 'Testimoni alumni Fazztrack tentang bootcamp dan penyaluran kerja yang sudah mereka ikuti.'
  return (
    <>
      <div className={'cardContainer'}>
        <div className={'captionReviewAlumni'}>Alumni FazzTrack</div>
        <div className={'descReviewAlumni'}>{descInAlumniSec}</div>
      {alumniReview.map(item =>{
        return(
          <Box className={'card'}>
            <div className={'review'}>{item.review}</div>
            <section className={'section'}>
              <img src={item.avatar} alt={'profile-pic'} className={'img'}/>
              <div>
              <div className={'name'}>{item.name}</div>
              <div className={'review'}>{item.role}</div>
              <div className={'ig'}>
                <img src={logoIg} alt = {'ig icon'} className={'igIcon'}/>
                {item.ig}
              </div>
              </div>
            </section>
          </Box>
        )})
      }
      </div>
    </>
  )
  }

export default AlumniReview;