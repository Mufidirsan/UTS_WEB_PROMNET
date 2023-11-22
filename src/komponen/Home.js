import React from 'react';
import './Home.css';
import {useTypewriter,Cursor} from 'react-simple-typewriter'

const Home = () => {

    const [text] = useTypewriter ({
        words:['Mufid Irsan','Pemuda Sukabumi','Suka NgeGame >_<'],
        loop:{},
        typeSpeed: 150,
        deleteSpeed: 80,
    });

    return (
        <div id='Intro'>
            <div className='introContent'>
                <h2 className='introh2'>Hallo,</h2>
                <span className='introim'>I'm<span className='introName'> {text} </span> <Cursor /> </span>
                <p className='introPara'>Pendidikan Ilmu Komputer 2022</p>
                <p className='introPara'>Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam</p>
                <p className='introPara'>Universitas Pendidikan Indonesia</p>
            </div>
        </div>
    );
}

export default Home;

