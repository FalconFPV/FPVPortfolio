import React from "react";
import Card from "react-bootstrap/Card";
import Drone5inch from "../../Assets/Drones/fpv.jpeg";
import Drone3inch from "../../Assets/Drones/diatone.webp";
import MavicPro from "../../Assets/Drones/mavic.jpg";
import Neo from "../../Assets/Drones/neo.png";
import { useTranslation } from "react-i18next";
import CircularGallery from "./CircularGallery";

function DroneFleet() {
   const { t } = useTranslation();

      const DronesNew = [
         {
            text: t("fpv_5"),
            image: Drone5inch,
            desc: t("fpv_5_desc"),
         },
         {
            text: t("fpv_3"),
            image: Drone3inch,
            desc: t("fpv_3_desc"),
         },
         {
            text: t("mavic_pro"),
            image: MavicPro,
            desc: t("mavic_pro_desc"),
         },
         {
            text: t("dji_neo"),
            image: Neo,
            desc: t("dji_neo_desc"),
         },
      ];

   return (
      <Card
         className="quote-card-view"
         id="fleet"
         data-aos="fade-up"
         data-aos-duration="2000"
      >
         <Card.Body>
            <div className="drone-card-container">
               <div className="drones">
                  <h1>{t("fleet_title")}</h1>
                  <div className="cert-container">
                     <div className="drones-container">
                        <div className="drones-info">
                           <div
                              dangerouslySetInnerHTML={{
                                 __html: t("drones_desc"),
                              }}
                           />
                        </div>
                        <div
                           className="droneGallery-container"
                           style={{ width: "100%", height: "500px" }}
                        >
                           <CircularGallery
                              items={DronesNew}
                              bend={0.5}
                              textColor="#ffffff"
                              borderRadius={0.05}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Card.Body>
      </Card>
   );
}

export default DroneFleet;
