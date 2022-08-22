import React, {useEffect, useState} from 'react'
import Navbar from "../../component/Navbar";
import './style.css'
import axios from 'axios'
import {BaseUrl} from "../../component/baseUrl";

const Minicamp = () =>{
    const [miniclassList, setMiniclassList] = useState([]);
    useEffect(()=>{
        const url = `https://fazz-course.herokuapp.com/miniclass`
        axios
        .get(`https://cors-anywhere.herokuapp.com/${url}`,
        {
            headers: {
                'Access-Control-Allow-Origin': "*",
            },
        })
            .then((res) => {
                console.log(res.data.data);
                setMiniclassList(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
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
                                <div className={'textOnline'}> {item.type} </div>
                                <div className={'hiringStatus'}>{item.hiring === true ? ' Disalurkan kerja ' : ''}</div>
                            </div>

                            <div className={'miniclassTitle'}>{item.title}</div>
                            <div className={'miniclassDesc'}>{item.description}</div>
                            <div className={'date'}>{item.date}</div>
                            <div className={'line'}>__________________________________</div>
                            <div className={'rowSection'}>
                                <div><img src={item.trainerProfilePicture} alt='trainerPic' className={'trainerPic'}/> </div>
                                <div>
                                    <div className={'trainerName'}>{item.trainerName}</div>
                                    <div className={'trainerTitle'}>{item.trainerTitle}</div>
                                </div>
                            </div>
                            <div className={'line'}>__________________________________</div>
                            <div className={'rowSection'}>
                                <div className={'price'}>Harga Mini Bootcamp</div>
                                <div className={'priceItem'}>{`Rp${item.price}`}</div>
                            </div>
                            <div className={'line'}>__________________________________</div>
                            <div className={'linkDaftar'}>Daftar Sekarang ---></div>
                        </div>
                    )
                })}
            </div>
                </div>
        </>
    )
}
export default Minicamp