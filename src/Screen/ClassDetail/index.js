import React, {useEffect, useState} from 'react'
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import './style.css'
import {BaseUrl, CorsUrl} from "../../component/baseUrl";
import axios from "axios";
import {dot, imgClassDetail} from "../../asset/image";
import {Button} from "@chakra-ui/react";

const ClassDetail = () => {
    const [detail, setDetail] = useState({})

    useEffect(()=>{
        const id = Math.floor(Math.random() * (5 - 1)) + 1;
        console.log(id)
        const url = `${BaseUrl}/class/${id}`
        axios
            .get(`${CorsUrl}/${url}`,
                {
                    headers: {
                        'Access-Control-Allow-Origin': "*",
                    },
                })
            .then((res) => {
                console.log(res.data.data);
                setDetail(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    },[])
    return(
        <>
            <Navbar/>
            <div className={'bodyClassDetail'}>
            <div className={'topContainer'}>
                <div className={'left'}>
                    <div className={'className'}>{detail.title}</div>
                    {detail.syllabus?.map((index)=>
                        <div className={'silabus'}>
                            <div style={{display:'flex',flexDirection:'row' }}>
                            <img src={dot} alt={'dot'} className={'dot'}/>
                            {index}
                            </div>
                        </div>
                    )}
                    <br/>
                    <Button
                        colorScheme='orange'
                        className={'daftarBtn'}
                    >Daftar Sekarang
                    </Button>
                </div>
                <div className={'right'}>
                    moving craousell here
                </div>
            </div>
                <div className={'section2'}>
                    <img src={imgClassDetail} alt={'justImage'} className={'justImage'}/>
                    <div>
                        <div className={'titleSection2'}>Lebih dari sekedar bootcamp</div>
                        <div className={'descSection2'}>Di bootcamp Fazztrack, kamu akan belajar bersama dengan teman teman yang passionate dan mentor yang akan membimbing kamu ke tujuan kamu. Kamu juga bisa membangun networking yang baik untuk masa depanmu dari teman setim dan mentor kami yang berasal dari industri.
                        </div>
                    </div>


                </div>

            </div>
            <Footer/>
        </>
    )
}
export default ClassDetail