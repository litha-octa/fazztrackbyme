import React from 'react';
import { Button } from '@chakra-ui/react';
import { faq } from '../../asset/data';
import './styleFaq.css'

const FAQ = () => {

  return(
    <>
      <h4>Pertanyaan yang Sering Ditanyakan</h4>
      {faq.map(item => {
        return(
          <div className={'card'}>{item.question}</div>
        )
      })}
      <Button className={'seeMoreBtn'}>
      Lihat Selengkapnya
      </Button>
    </>
  )
}
export default FAQ