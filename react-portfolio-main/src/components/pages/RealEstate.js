import React from "react";
import { useTranslation } from "react-i18next";
import realEstateImg from "../../Assets/ServiceImg/realstate.jpg"; // Imagen del servicio
import realEstatemenubg from "../../Assets/ServiceImg/realstate-bg.jpg"; // Imagen de fondo de las preguntas
import realEstatequestionsbg from "../../Assets/ServiceImg/realstate-qbg.jpg"; // Imagen de fondo de las preguntas
import Contact from "../Home/Contact";
import ServiceInfo from "./ServiceInfo";
import Card from "react-bootstrap/Card";

const RealEstate = () => {
   const { t } = useTranslation();

    return (
       <div className="service-container">
          <ServiceInfo
             title={t("real_estate_services")}
             image={realEstatemenubg}
             subtitle={t("real_estate_services_desc")}
             description={t("real_estate_services_desc")}
          />
          <Card
             className="quote-card-view"
             id="service-info-card"
             data-aos="fade-up"
             data-aos-duration="2000"
          >
             <Card.Body>
                <div className="service-info-content-container">
                   <div className="service-info-content">
                      <h3>{t("real_estate_services_subtitle")}</h3>
                      <div
                         dangerouslySetInnerHTML={{
                            __html: t("real_state_services_info"),
                         }}
                      />
                   </div>
                   <div className="service-info-image">
                      <img
                         src={realEstateImg}
                         alt={t("real_estate_services")}
                      />
                   </div>
                </div>
             </Card.Body>
          </Card>
          <div
             className="service-questions"
             style={{ backgroundImage: `url(${realEstatequestionsbg})` }}
          >
             <div className="service-questions-container">
                <div
                   dangerouslySetInnerHTML={{
                      __html: t("real_estate_services_questions"),
                   }}
                />
             </div>
          </div>
          <Contact />
       </div>
    );
};

export default RealEstate;
