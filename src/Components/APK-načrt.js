import React, { useState,useEffect } from 'react';
import '../css/info.css'
import lzs from '../img/Lzs.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import file from '../public/Nacrt_ravnanja_APK.pdf';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import TextInj from '../data'
import styled from 'styled-components'


const Container = styled.div`
   left: ${({sidebar})=>(sidebar ? '0':'-100%')};
    grid-template-columns: 100%;
    
    background: rgb(0 0 0 / 38%);
    z-index: 99;
    transition:350ms;
    /* position:fixed; */
    height:auto;
    top:0;
`;

const APKnačrt = ()=>{

//*DATA------------------------------------------------
    const history = useHistory();
    const url = history.location.pathname;
    const[Datas,setDatas] = useState(TextInj);
    const [Data,setData] = useState(null);

    
      // use effect
      useEffect(()=>{
        const currentData = Datas.filter((stateData)=> stateData.url === url);
        setData(currentData[0])
        },[Datas,url])
        console.log(Data)
    // WEBPAGE----------------------------------------------------------
    return(
        <>
        {Data&&(
        <div className="container2">
            <Container>
            <div className="title big"><h1>Lovska <br /> Družina <br /> </h1><h2>Pugled</h2></div>
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
                            <Link to="/">Domača stran</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <Link to="/informacije-javnega-značaja">Informacije javnega značaja</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/APK">Afriška prašičja kuga</Link>
                        </li>
                    </ul>
                    
                    </div>
            </Container>
            <div className="container-right">
                   
                    <div className="data_box title small">
                    <div className="box"><h1>{Data.title3}</h1></div>
                    <div className="box-data"><h3>{Data.text3}</h3></div>

                    </div>
                   
                    <div className="all-page-container">
                     <iframe src={file} />
                     </div>
      </div>
    </div>
     
     
        
        )}
</>
    )
}

export default APKnačrt;