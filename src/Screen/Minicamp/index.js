import React, {useEffect, useState} from 'react'
import Navbar from "../../component/Navbar";
import './style.css'
import axios from 'axios'
import {BaseUrl} from "../../component/baseUrl";

const Minicamp = () =>{
    const [miniclassList, setMiniclassList] = useState([]);
    useEffect(()=>{
        axios
        .get(`${BaseUrl}/miniclass`)
            .then((res) => {
                console.log(res.data.data);
                setMiniclassList(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[])
    return(
        <>
        <Navbar/>
            <div className={'bodyMinicamp'}>
            <div className={'titleMinicamp'}>Belajar bersama expert dan creator terpercaya</div>
            <div className={'minicampContainer'}>
                {miniclassList.map((item)=>{
                    return(
                        <div className={'cardMiniclass'}>
                            <div className={'rowSection'}>
                                <div className={'textOnline'}>{item.type}</div>
                                <div className={'hiringStatus'}>{item.hiring === true ? 'Disalurkan kerja' : ''}</div>
                            </div>

                            <div className={'miniclassTitle'}>{item.title}</div>
                            <div className={'miniclassDesc'}>{item.description}</div>
                            <div className={'date'}>{item.date}</div>
                            <div className={'rowSection'}>
                                <div><img src={item.trainerProfilePicture} alt='trainerPic' className={'trainerPic'}/> </div>
                                <div>
                                    <div>{item.trainerName}</div>
                                    <div>{item.trainerTitle}</div>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
                </div>
        </>
    )
}
export default Minicamp