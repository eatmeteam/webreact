import React, { Component } from 'react'

function IntroName () {
    return (
            <div className="row" style={{ marginTop: '-40px'}}  >
                <div className="col-lg-2" >
                    <img style={{ borderRadius: '50%', width: '150px', height: '150px' }} alt="timphoto" src="https://instagram.fbkk9-2.fna.fbcdn.net/v/t51.2885-19/s320x320/71510449_561596781262882_7125028557092290560_n.jpg?_nc_ht=instagram.fbkk9-2.fna.fbcdn.net&_nc_ohc=1UyizBDIYHoAX_ZiGpv&oh=7a32822efebce2b722c1033543105616&oe=5ED3CAF3"></img>
                </div>
                <div className="col-lg-10" style={{ marginTop: '40px'}} >
                    <h1>Jinna C.</h1>      
                    <p>Computer Science | ID 6210402364</p>
                </div>
            </div>
    )
}
function Skill() {
    return (
            <div className="row text-left">
                <div className="col-lg-6">
                    <h2>Backend</h2>
                    <ul>
                        <li>Docker Container</li>
                        <li>Cloudflare DNS</li>
                        <li>Nginx, Apache Setup</li>
                        <li>Google Cloud Platform, AWS (instance)</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <h2>Programming</h2>
                    <ul>
                        <li>Python</li>
                        <li>C and C++</li>
                    </ul>
                </div>
            </div>
    )
}

function GoodAndBad(){
    return (
    <div className="container">    
        <div className="row container">
            <div className="col-lg-6 ">
                <h2>จุดเด่น</h2>
                <ul>
                    <li>เรียนรู้ได้เร็ว</li>
                    <li>เข้ากับคนอื่นได้ง่าย</li>
                </ul>
            </div>
            <div className="col-lg-6 ">
                <h2>ข้อเสีย</h2>
                <ul>
                    <li>ไม่ชอบที่เสียงดังสักเท่าไหร่</li>
                    <li>เจอแมวแล้วจะร้องเมี๊ยวๆใส่</li>
                </ul>
            </div>
        </div>
    </div>
    )
}
function SeparatorFluid(){
    return(
        <hr/>
    )
}
function Contact() {
    return (
    <div>
        <h2 className="text-center">Contact</h2>
        <p className="text-center">Feel free to contact me.</p>
        <div className="row">
    
            <div className="col-lg-4 text-center">
                <a href="https://github.com/cjtim" rel="noopener noreferrer" target="_blank">
                <img style={{ width: '80px', height: 'auto', borderRadius: '50%' }} alt="github" src="https://icons-for-free.com/iconfiles/png/512/github+hub+icon+icon-1320194641335079152.png"></img>
            </a><p>Github</p>
            </div>
            
            <div className="col-lg-4 text-center"><a rel="noopener noreferrer" href="https://www.facebook.com/jinnatim" target="_blank">
                <img style={{ width: '80px', height: 'auto', borderRadius: '50%' }} alt="facebook" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"></img>
            </a><p>Facebook</p></div>
        
            <div className="col-lg-4 text-center">
                <a href="mailto:jinna.c@ku.th">
                <img style={{ width: '80px', height: 'auto', borderRadius: '50%' }} alt="Email" src="https://cdn.icon-icons.com/icons2/1182/PNG/512/1490129331-rounded07_82197.png"></img>
            </a><p>Email</p>
            </div>
        </div>
    
    </div>
    )
}

export default class TimProfile extends Component {
    render() {
        return (
            <div className="jumbotron container" style={{ }}>
            < IntroName />
            <SeparatorFluid/>
            <Skill/>
            <SeparatorFluid/>
            <GoodAndBad/>
            <SeparatorFluid/>
            <Contact/>
        </div>
        )
    }
}


