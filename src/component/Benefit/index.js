import React from 'react'
import './styleBenefit.css'
import { BenefitList } from '../../asset/data';

const Benefit = () => {
  return(
    <>
      <div className={'captionBenefit'}>Keunggulan Bootcamp Fazztrack</div>
      <div className={'descBenefit'}>
        Bootcamp Fazztrack akan membimbing kamu menjadi Software Engineer
        profesional sampai di salurkan kerja dengan berbagai keunggulan seperti
        berikut:
      </div>
      <div className={'cardContainerBenefit'}>
      {BenefitList.map(item=>{
        return(
          <div className={'cardBenefit'}>
          <img src={item.img} alt={'img-beneft'} className={'imgBenefit'}/>
          <div className={'captionCardBenefit'}>{item.list}</div>
          <div className={'descCardBenefit'}>{item.desc}</div>
            <div>{item.list === 'Kurikulum Yang Mendukung' ? 'Daftar Sekarang -->' : 'Pelajari Lebih Lanjut -->'}</div>
          </div>
        )
      })}
      </div>
    </>
  )
}
export default Benefit