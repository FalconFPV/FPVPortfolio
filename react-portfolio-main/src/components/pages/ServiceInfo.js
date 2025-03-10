import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

const ServiceInfo = ({ title, subtitle, image, description }) => {
    const { t } = useTranslation();
    
    return (
       <div className="service-info">
          <div
             style={{ backgroundImage: `url(${image})` }}
             className="service-info-container"
          >
             <h2 className="service-info-title">{title}</h2>
             <h3 className="service-info-subtitle">{subtitle}</h3>
          </div>
          <div className="page-breadcrumb">
             <a href="/PortfolioFalcon">{t("home")}</a>
             <span>/</span>
             <span>{title}</span>
          </div>
       </div>
    );
};

ServiceInfo.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ServiceInfo;