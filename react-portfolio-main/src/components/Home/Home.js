import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Card from "react-bootstrap/Card";
import { FaArrowDown, FaPen } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Animations from "../../Animations";
import video from "../../Assets/Video2.mp4"; // Importa el archivo de video

function Home() {
   const { t } = useTranslation();
/*
        useEffect(() => {
           // Cargar la API de IFrame de YouTube
           const tag = document.createElement("script");
           tag.src = "https://www.youtube.com/iframe_api";
           const firstScriptTag = document.getElementsByTagName("script")[0];
           firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
           // Configurar el reproductor de YouTube
           window.onYouTubeIframeAPIReady = () => {
              new window.YT.Player("player", {
                 videoId: "s9n47lkKqVk", // Reemplaza con tu ID de video
                 playerVars: {
                    autoplay: 1,
                    mute: 1,
                    start: 0,
                    end: 100, // 2 minutos
                    loop: 1,
                    playlist: "s9n47lkKqVk", // Reemplaza con tu ID de video para que funcione el loop
                 },
                 events: {
                    onReady: (event) => {
                       event.target.playVideo();
                    },
                    onStateChange: (event) => {
                       if (event.data === window.YT.PlayerState.ENDED) {
                          event.target.seekTo(0); // Reinicia el video al inicio
                       }
                    },
                 },
              });
           };
        }, []);
        */
  return (
     <section>
        <Container fluid className="home-section" id="home">
           <Row className="home-content">
              <Row className="home-row">
                 <div className="video-background">
                    {/* <div id="player" className="y-video"></div> */}
                    <video
                       id="player"
                       className="y-video"
                       src={video} 
                       autoPlay
                       muted
                       playsInline
                       loop
                    ></video>
                 </div>
                 <div className="home-header">
                    <div className="home-first">
                       <h1 style={{ paddingBottom: 15 }} className="heading">
                          {t("welcome")}{" "}
                          <span
                             className="wave"
                             role="img"
                             aria-labelledby="wave"
                          >
                             {t("handshake")}
                          </span>
                       </h1>

                       <h1 className="heading-name">
                          {t("intro")}
                          <strong className="main-name"> {t("name")}</strong>
                       </h1>
                       <div className="heading-type">
                          <TypeWriter />
                       </div>
                       <div className="show-work">
                          <a href="#about">
                             <span className="show-work-text">
                                {t("view_work")}
                                <Animations animationType="shake-animation">
                                   <FaArrowDown style={{ marginLeft: "8px" }} />
                                </Animations>
                             </span>
                          </a>
                       </div>
                    </div>
                 </div>
              </Row>
           </Row>
        </Container>
        <Container fluid className="home-about-section" id="about">
           <Row className="about">
              <About />
           </Row>
        </Container>
        <Container
           fluid
           className="home-about-section"
           id="contact"
           data-aos="zoom-in"
           data-aos-duration="1000"
        >
           <Container className="home-social-container">
              <Row>
                 <Col md={12} className="home-about-social">
                    <h1>{t("get_in_touch")}</h1>
                    <p>
                       {" "}
                       {t("contact_message")}
                       <br />
                       <strong>{t("send_message")}</strong>
                    </p>
                    <SocialMedia />
                 </Col>
              </Row>
              <Row>
                 <div className="cta-btn-container">
                    <div className="cta-btn-div">
                       <a
                          className="cta-btn"
                          href="https://docs.google.com/forms/d/e/1FAIpQLScttTC38g4qO3ZFL5hi9E4DnJXgops8htUur4ebKZJGeaOO_Q/viewform?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                       >
                          <span className="arrow-right">
                             <Animations animationType="rotate-animation">
                                <FaPen style={{ marginRight: "8px" }} />
                             </Animations>
                             {t("message_form")}
                          </span>
                       </a>
                    </div>
                 </div>
              </Row>
           </Container>
        </Container>
     </section>
  );
}

export default Home;
