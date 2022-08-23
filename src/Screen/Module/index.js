import React, {useEffect, useState} from 'react'

import Navbar from "../../component/Navbar";

import {BaseUrl, CorsUrl} from "../../component/baseUrl";
import {Input} from "@chakra-ui/react";

import axios from "axios";

import './style.css'



const Module = () => {
    const [videosList , setVideosList] = useState([])

    useEffect(()=>{
        const url = `${BaseUrl}/videos`
        axios
            .get(`${CorsUrl}/${url}`,
                {
                    headers: {
                        'Access-Control-Allow-Origin': "*",
                    },
                })
            .then((res) => {
                console.log(res.data.data);
                setVideosList(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    },[])
    return(
        <>
            <Navbar/>
        <div className={'bodyModule'}>
        <div className={'titleModule'}>
            Jelajahi modulnya dan ubah masa depanmu
            <Input placeholder='Mau belajar apa hari ini ? Cari topik atau materimu disini ...' />
        </div>
            <div className={'moduleContainer'}>
            {videosList.map((item =>{
                return(
                    <div className={'cardModule'}>
                        <img src={item.banner} alt='banner video' className={'banner'}/>
                        <div className={'cardModuleTitle'}>{item.title}</div>
                        <div className={'cardModuleDesc'}>{item.description}</div>
                        <div className={'rowModule'}>
                            <div className={'starRate'}>
                                {item.star}
                            </div>
                            <div> level {item.level}</div>
                        </div>
                        <div className={'lineModule'}></div>
                        <div className={'rowModule'}>
                            <div className={'hargaModule'}>{'harga module  '}</div>
                            <div className={'itemPrice'}>{item.price}</div>
                        </div>

                    </div>
                )
            }))}
            </div>
        </div>
        </>
    )
}
export default Module
