import React, { useState } from 'react';
import '../css/navbar_container.css'
import lzs from '../img/Lzs.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import file from '../public/LAPK.pdf';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
/*import video from '../public/vid.mp4'*/


const Info = ({currentText})=>{


    
    return(
        <div className="container">
     
            <div className="container-left">
                    <div className="title big"><h1>Lovska <br /> Družina <br />Pugled </h1></div>
                    <div className="logo"><a href="https://www.lovska-zveza.si/"><img src={lzs} alt="" /></a>
                    <div className="information">Vidergarjeva ulica 13 Ljubljana <br />
                    1261 LJUBLJANA-DOBRUNJE <br /> <br />
                    <FontAwesomeIcon className="email" icon={faEnvelopeOpen}></FontAwesomeIcon>    
                    <a href="mailto: ld.pugled@gmail.com"> ld.pugled@gmail.com </a><br />
                    <span>Starešina: Edvard Babnik</span>

                    </div>
                    </div>
                    <div className="nav">
                    <ul>
                        <li>
                            <Link to="/informacije-javnega-značaja">Informacije javnega značaja</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="APK">Afriška Prašičja Kuga</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/APK-načrt">Načrt ravnanja upravljalca lovišč</Link>
                        </li>
                    </ul>
                    
                    </div>
            </div>
            <div className="container-right">
                   
                  
      </div>
    </div>
     
     
        
        

    )
}

export default Info;