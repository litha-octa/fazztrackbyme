import React from 'react'
import './style.css'
import {logoFazz, redStar} from "../../asset/image";
import {Link} from "react-router-dom";
import {Checkbox, Input} from "@chakra-ui/react";
import Btn from "../../component/Btn";

const Register = () => {
    const title={
        fontSize : '1.5em',
        fontfamily:'sans-Serif',
        fontWeight:'500',
        margin : '5% 0' ,
        textAlign: 'center',
    }
    const blueText={


    }
    return(
        <div className={'body'}>
            <div className={'container'}>
                <img src={logoFazz}
                     alt={'logo Fazztrack'}
                     className={'logo'}/>
                <div className={'welcome'}>
                Buat Akun Fazztrack
                </div>
                <div className={'row'}>
                    <div>Sudah punya akun Fazztrack ? </div>
                    <Link to = '/Login'>
                        <div className={'orangeText'}> Masuk disini</div>
                    </Link>
                </div>
                    <div className={'fieldName'}>
                        <img src={redStar} alt={'req'} className={'tinyStar'} />
                        Nama Lengkap
                    </div>
                        <Input
                            placeholder='Masukkan nama lengkap ...'
                            size='md'
                            variant='outline'
                            className={'inputField'}
                            _placeholder={{fontFamily: 'arial',fontSize: '13px',color:'grey'}}
                        />

                    <div className={'fieldName'}>
                        <img src={redStar} alt={'req'} className={'tinyStar'} />
                        Email
                    </div>
                        <Input
                                placeholder='Masukkan E-mail ...'
                               size='md'
                               variant='outline'
                                className={'inputField'}
                                _placeholder={{fontFamily: 'arial',fontSize: '13px', color:'grey'}}
                        />

                    <div className={'fieldName'}>
                        <img src={redStar} alt={'req'} className={'tinyStar'} />
                        No. Handphone
                    </div>
                        <Input
                            placeholder='Masukkan No.Handphone ...'
                            size='md'
                            variant='outline'
                            type={'number'}
                            className={'inputField'}
                            _placeholder={{fontFamily: 'arial',fontSize: '13px', color:'grey'}}
                        />

                    <div className={'fieldName'}>
                        <img src={redStar} alt={'req'} className={'tinyStar'} />
                        Kata Sandi
                    </div>
                        <Input placeholder='Masukkan kata sandi ...'
                               size='md'
                               variant='outline'
                               type={'password'}
                               className={'inputField'}
                               _placeholder={{fontFamily: 'arial',fontSize: '13px', color:'grey'}}
                        />

                    <div className={'fieldName'}>
                        <img src={redStar} alt={'req'} className={'tinyStar'} />
                        Konfirmasi Kata Sandi
                    </div>
                         <Input placeholder='Masukkan ulang kata sandi ...'
                                size='md'
                                variant='outline'
                                type={'password'}
                                className={'inputField'}
                                _placeholder={{fontFamily: 'arial',fontSize: '13px', color:'grey'}}
                         />

                <div className={'row2'}>
                    <div className={'checkbox'}>
                    <Checkbox colorScheme='blue' iconColor='white.400' >
                        Saya Menyetujui
                    </Checkbox>
                    </div>

                    <div className={'blueText'}>Syarat dan Ketentuan</div>
                </div>
                <Btn
                    label={'Daftar Fazztrack'}
                    px="43%"
                    bg={'orange'}
                    className={'btn'}
                />

            </div>
        </div>
    )
}
export default Register