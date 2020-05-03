import React from 'react'
import './../css/index.css'
import {Link} from 'react-router-dom'
import pp2 from './../pp/img/pp2.jpg';
import tong from './../tong/img/tong.jpg';


export default function home(){
    return(
        <div alt='To return everything in 1 element'>
            <div class="jumbotron">
                <div class="container text-center" >
                    <h1 class="fontIndex">ถ้าผักมันขม กินผมก็ได้ครับ</h1>      
                    <p style={{ color: 'rgb(66, 20, 14)', fontSize: '20px' }} class="fontIndex">ลูกหมูสามตัว</p>
                </div>
            </div>

            <div class="container marketing">
                <div class="row text-center">
                    <div class="col-lg-4">
                    <img class="rounded-circle" style={{ width: '140px' }}  src={pp2} alt='pp-img'></img>
                    <h2 style={{ marginTop: '20px' }}>PP</h2>
                    <p> หล่อสุดในกลุ่ม และ ในมหาลัย</p>
                    <p> ID: 6210402470</p>
                    <p><Link class="btn btn-secondary" to='/pp' role="button">View details &raquo;</Link></p>
                    </div>
                    <div class="col-lg-4">
                    <img style={{ width: '140px' }} class="rounded-circle" src={tong} alt='tong-img' ></img>
                    <h2 style={{ marginTop: '20px' }}>Tong</h2>
                    <p>กินเก่ง นอนเก่ง บ่นเก่ง</p>
                    <p> ID: 6210400710</p>
                    <p><Link class="btn btn-secondary" to='/tong' role="button">View details &raquo;</Link></p>
                    </div>
                    <div class="col-lg-4">
                    <img style={{ width: '140px' }} class="rounded-circle" src="https://instagram.fbkk9-2.fna.fbcdn.net/v/t51.2885-19/s320x320/71510449_561596781262882_7125028557092290560_n.jpg?_nc_ht=instagram.fbkk9-2.fna.fbcdn.net&_nc_ohc=1UyizBDIYHoAX_ZiGpv&oh=7a32822efebce2b722c1033543105616&oe=5ED3CAF3" alt='tim-img'></img>
                    <h2 style={{ marginTop: '20px' }}>Tim</h2>
                    <p>ทิมเองคัฟ</p>
                    <p> ID: 6210402364</p>
                    <p><Link class="btn btn-secondary" to='/tim' role="button">View details &raquo;</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}