import React from "react";
import './About.css';
import foto from '../asset/mufid 1.jpg'

const About=()=>{
    return(
        <section className="about_section" id = "about">
            <h1 className="section-title">About Me</h1>

            <div className="about_container">
                <img src={foto} alt="" className="about_img" />

                <div className="about_data">
                    <p className="about_description">
                    Halo, kenalin aku Mufid, seseorang yang lahir di Bogor dan tinggal di Sukabumi. 
                    Sekarang sedang disibukan dengan Pendidikan S1 di Universitas PendidikanIndonesia, 
                    program studi Pendidikan Ilmu Komputer. Hobiku bermain game, sepertigame casual,
                    competitive,rpg dan masih banyak lagi. saya juga suka nonton film terutama film-film marvel.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;