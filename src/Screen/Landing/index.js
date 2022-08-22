import React from "react";
import { Link } from "react-router-dom";
import {Button, Box} from '@chakra-ui/react';
import "./style.css";
import '../../component/AlumniReview/styleCard.css';
import {imgGroup} from '../../asset/image';
import AlumniReview from '../../component/AlumniReview';
import ClassList from '../../component/ClassList';
import Navbar from '../../component/Navbar';
import Benefit from '../../component/Benefit';
import CeritaAlumni from '../../component/CeritaAlumni';
import FAQ from '../../component/FAQ';


function Landing() {
    const caption = 'ubah hidupmu sekarang juga'
    const description = 'Belajar menjadi software engineer secara online/remote selama 3 - 6 bulan sampai diterima kerja, tanpa bayar di depan (Cicil Setelah Kerja).'
    const captionInPartnerSec = '500 lebih lulusan sudah dipercaya di lebih dari 500 perusahaan'
    const descInPartnerSec = 'Fazztrack menjamin lulusan mendapat kesempatan membagun karir diperusahaan impian'

  return (
      <Box className='body'>
      <Navbar />
        {/*SECTION 1*/}
            <div className='section1'>
              <div className='section1-left'>
                <div className='caption-sec-1'>{caption}</div>
                <div className={'description-sec-1'}>{description}</div>
                    <Button colorScheme='orange' className={'btnOrange'}>Daftar Sekarang</Button>
              </div>
              <div className='section1-right'>
                moving carrousell here
              </div>
            </div>
        {/*PARTNER SECTION*/}
          <div className={'partnerSection'}>
            <div className={'styleCapSec2'}>{captionInPartnerSec}</div>
            <div className={'styleDescSec2'}>{descInPartnerSec}</div>
  <div className={'imgContainer'}>
              {imgGroup.map(i => {
                return(
                  <div className={'imgItem'}>
                <img src={i.url} className={'img'} alt={'logo'}/>
                  </div>
                )
              })
              }
  </div>

          </div>
        {/*SECTION ALUMNI*/}
        <div className={'sectionPadding'}>
          <AlumniReview />
          <ClassList />
        </div>
        {/*BENEFIT SECTION*/}
      <div className={'benefitSection'}>
        <Benefit />
      </div>
        {/*STORY ALUMNI SECTION*/}
        <div className={'sectionPadding'}>
          <CeritaAlumni />
        </div>
        {/*FAQ SECTION*/}
        <div className={'sectionPadding'}>
          <FAQ />
        </div>
      </Box>
  );
}

export default Landing;
