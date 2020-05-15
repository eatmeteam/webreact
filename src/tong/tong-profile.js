import React, { Component } from 'react'
import './css/mystyle.css'
import tongpic from './img/tong.jpg'

function AboutMe(){
    return(
        <div className="configBG first">
            <div className="container-fluid centered">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="col-sm-12">
                            <p className="fontPage textTopic">ABOUT ME</p>
                        </div>
                        <div className="col-sm-12" style={{ marginTop: '7px' }}>
                            <p className="fontPage name">PATIPAN BOONSIMMA</p>
                        </div>
                        <div className="col-sm-12" style={{ marginTop: '7px' }}>
                            <p className="fontPage textContent">BORN AUG 30TH, 2000</p>
                            <p className="fontPage textContent">PATHUM THANI, THAILAND</p>
                            <p className="fontPage textContent">NICKNAME: TONG</p>
                            <p className="fontPage textContent">A SOPHOMORE STUDYING COMPUTER SCIENCE</p>
                            <p className="fontPage textContent">KASETSART UNIVERSITY</p>
                        </div>
                    </div>
                    
                    <div className="col-sm-4">
                        <div className="configPicProfile">
                            <img alt="tong profile pic" src={tongpic} className="picProfile"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Ability(){
    return(
        <div className="configBG second">
            <p className="fontPage abilityTopic">ABILITY</p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <p className="fontPage configAbilitySection">COMPUTER LANGUAGES</p>
                    </div>
                    <div className="col-md-6">
                        <p className="fontPage configAbilitySection">HOBBIES and INTEREST</p>
                    </div>
                </div>

            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                            <table className="configTable">
                                <tr>
                                    <td> <i className="fab fa-python icon"></i>
                                        <span className="fontPage levelScale_lang">INTERMEDIATE</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <i className="far fa-copyright icon"></i>
                                        <span className="fontPage levelScale_for_c_lang">INTERMEDIATE</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td> <i className="fab fa-html5 icon"></i>
                                        <span className="fontPage levelScale_lang">INTERMEDIATE</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td> <i className="fab fa-css3-alt icon"></i>
                                        <span className="fontPage levelScale_lang">INTERMEDIATE</span>
                                    </td>
                                </tr>
                            </table>
                    </div>
                    <div className="col-sm-6">
                        <table className="configTable">
                            <tr>
                                <td> <i className="fas fa-music icon"></i>
                                    <span className="fontPage levelScale_hobbies">LISTENING TO MUSIC</span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <i className="fas fa-film icon"></i>
                                    <span className="fontPage levelScale_hobbies">WATCHING MOVIES</span>
                                </td>
                            </tr>

                            <tr>
                                <td> <i className="fas fa-book icon"></i>
                                    <span className="fontPage levelScale_for_reading_icon">READING BOOKS</span>
                                </td>
                            </tr>

                            <tr>
                                <td> <i className="fas fa-desktop icon"></i>
                                    <span className="fontPage levelScale_for_playing_icon">PLAYING GAMES</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Contact(){
    return(
        <div className="configBG third">
            <p className="fontPage abilityTopic contactTopic">CONTACT</p>
            <div className="container">
                <div className="row"> 
                    <table className="configTable">
                        <tr>
                            <td>
                                <i className="fab fa-facebook contactIcon"></i>
                                <span className="fontPage contactText"><a href="https://www.facebook.com/patisx.b" style={{ color: 'black' }} target="_blank" rel="noopener noreferrer">PATIPAN BOONSIMMA</a></span>
                             </td>
                        </tr>
            
                    <tr>
                        <td>
                    <i className="fab fa-instagram contactIcon"></i>
                    <span className="fontPage contactText"><a href="https://www.instagram.com/txngthesec" style={{ color: 'black' }} target="_blank" rel="noopener noreferrer">TXNGTHESEC</a></span>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                    <i className="fab fa-line contactIcon"></i>
                    <span className="fontPage contactText">IITONG30</span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                    <i className="far fa-envelope contactIcon"></i>
                    <span className="fontPage contactText">IITONG@OUTLOOK.COM</span>
                    </td>
                </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default class tongProfile extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://kit.fontawesome.com/d7bee25b49.js";
        this.div.appendChild(script);
      }
    render() {
        return (
        <div className="App" ref={el => (this.div = el)}>
            <AboutMe/>
            <Ability/>
            <Contact/>
        </div>
        )
    }
}
