import React from "react";
import { useState } from "react";
import Contact from "./Contact/Contact";
import "./Home.css"
import boxImg from "./image-box.png";

const Home = ()=>{
    const [from, setFrom]= useState(false)
    return(
        <section className="hero">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-box">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                    <div className="section-content text-center">
                                        <h1 className="section-title">
                                        ЗАГОЛОВОК ПРО ГЕНЕРАТОР
                                        </h1>
                                        <p className="section-deccription">
                                        Ідейні міркування вищого ладу, а також постійне інформаційно-пропагандистське забезпечення нашої діяльності забезпечує широкому колу (фахівців) участь у формуванні подальших напрямів розвитку.   
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="time-box">
                                <p>До кінця акції</p>
                                <h4>00:02:56</h4>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box-image text-center">
                                <div className="top-btn">
                                    <a className="btn m-2" href="/home">Потужність: 230</a>
                                    <a className="btn m-2" href="/about">Дизель</a>
                                </div>
                                <div className="box--image-l">
                                    <img  src={boxImg} alt="Box Image" width={200} height={244}/>
                                </div>
                                <button onClick={()=>setFrom(!from)} className="btn btn-light box-btn">Замовити</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box-image text-center">
                                <div className="top-btn">
                                    <a className="btn m-2" href="/">Потужність: 230</a>
                                    <a className="btn m-2" href="/">Дизель</a>
                                </div>
                                <div className="box--image-r">
                                    <img  src={boxImg} alt="Box Image" width={200} height={244}/>
                                </div>
                                <button onClick={()=>setFrom(!from)} className="btn btn-light box-btn">Замовити</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          {
            from&&<Contact></Contact>
          }
        </section>
    )
}

export default Home;