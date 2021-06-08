import React, { useState,useEffect } from 'react';
import '../css/info.css'
import lzs from '../img/Lzs.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import file from '../public/LAPK.pdf';
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
const InformacijeJavnegaZnačaja = ({currentText})=>{

    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () =>setSidebar(!sidebar)

    const history = useHistory();
    const url = history.location.pathname;
    const[movies,setMovies] = useState(TextInj);
    const [movie,setMovie] = useState(null);
    

    // use effect
    useEffect(()=>{
        const currentMovie = movies.filter((stateMovie)=> stateMovie.url === url);
        setMovie(currentMovie[0])

        },[movies,url])
        console.log(movie)
    
 
    
    return(
<>
{movie &&(
        <div className="container2">
            <Container sidebar={sidebar}>
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
                            <Link to="/">Domača stran</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="APK">Afriška Prašičja Kuga</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="APK-načrt">Načrt ravnanja upravljalca lovišč</Link>
                        </li>
                    </ul>
                    
                    </div>
            </Container>
            <div className="container-right">
                   
                    <div className="data_box title small">
                       <div className="box">
                        <h1>{movie.title}</h1>
                        </div>    
                        <div className="box-data">
                        <h3>{currentText.text}</h3>
                        </div>
                     
                    </div>
                    <div className="content smaller-text">
                    <div className="all-page-container">
                     <iFrame src={file} width="1000" height="1000" scrolling="auto" frameborder="" />
                     </div>
                    </div>
         
      </div>
    </div>
    )}
    </>
     )
}

export default InformacijeJavnegaZnačaja;