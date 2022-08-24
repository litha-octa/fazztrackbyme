import React from 'react'
import './style.css'
import {logoFazz} from "../../asset/image";

const Footer = () =>{
    return(
        <div className={'bodyFooter'}>
            <div className={'rowFooter'}>
                {/*FAZZTRACK SECTION*/}
                    <div className={'fazztrackSec'}>
                        <img src={logoFazz} alt='logo fazztrack' className={'logoFazz'}/>
                        <div className={'textFazz'}>
                            Fazztrack adalah program pelatihan yang berkomitmen untuk mencetak developer yang profesional dan memberikan kesempatan untuk berkarir di perusahaan ternama.
                        </div>
                    </div>
                {/*CLASS SECTION*/}
                <div className={'classSec'}>
                    <div className={'titleClassSec'}>Kelas</div>
                    <div className={'textFazz'}>
                        Fullstack Mobile<br/>
                        Fullstack Website <br/>
                        Backend Javaspring <br/>
                        Backend Golang <br/>
                        Lihat Semua <br/>
                        Lihat Semua <br/>
                    </div>
                </div>
                {/*DUKUNGAN SECTION*/}
                <div className={'dukunganSec'}>
                    <div className={'titleClassSec'}>Dukungan</div>
                    <div className={'textFazz'}>
                        Cicil Setelah Kerja (ISA)<br/>
                        Career Ready<br/>
                        FAQ <br/>
                        Hire Our Graduates <br/>
                    </div>
                </div>
                {/*TENTANG SECTION*/}
                <div className={'tentangSec'}>
                    <div className={'titleClassSec'}>Tentang</div>
                    <div className={'textFazz'}>
                       Cerita Alumni<br/>
                        Sekilas Fazztrack<br/>
                    </div>
                </div>
                {/*SOSMED SECTION*/}
                <div className={'sosmedSec'}>
                    <div className={'titleClassSec'}>Sosial Media</div>
                    <div className={'textFazz'}>
                        Instagram<br/>
                        Facebook<br/>
                        You Tube<br/>
                    </div>
                </div>
            </div>
            <div className={'line'}></div>
            <div className={'rowFooter'}>
            <div className={'leftText'}>© 2022 Fazztrack. All Rights Reserved</div>
            <div className={'rightText'}>+6281132010888

                hello@fazztrack.com</div>
            </div>
        </div>
    )
}
export default Footer