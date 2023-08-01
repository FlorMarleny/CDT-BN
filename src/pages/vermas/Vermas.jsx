import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './Vermas.css';

const Vermas = () => {
  const location = useLocation();
  const subprograma = location.state?.subprograma || null;

  if (!subprograma) {
    return <div>Subprograma no encontrado</div>;
  }

  return (
    <div className="prueba container mt-4">
      <Helmet>
        <title>{subprograma.nombre}</title>
      </Helmet>
      <div className="row">
        <div className="col-md-6">
          <h2>{subprograma.nombre}</h2>
          <p>{subprograma.texto}</p>
          <p>Modalidad: {subprograma.modalidad}</p>
          <p>Horas Académicas: {subprograma.horasAcademicas}</p>
          <h4>Descripción:</h4>
          <p>{subprograma.descripcion}</p>


          <h4>Contenidos:</h4>
          <Tabs className="Tabs">
            <TabList className="TabList">
              <Tab className="Tab">{subprograma.Contenido1}</Tab>
              <Tab className="Tab">{subprograma.Contenido2}</Tab>
              <Tab className="Tab">{subprograma.Contenido3}</Tab>
              <Tab className="Tab">{subprograma.Contenido4}</Tab>
              <Tab className="Tab">{subprograma.Contenido5}</Tab>
              <Tab className="Tab">{subprograma.Contenido6}</Tab>
              <Tab className="Tab">{subprograma.Contenido7}</Tab>
            </TabList>

            <TabPanel className="TabPanel" >
              <p>{subprograma.Contenido1}</p>
            </TabPanel>
            <TabPanel className="TabPanel">
              <p>{subprograma.Contenido2}</p>
            </TabPanel>
            <TabPanel className="TabPanel">
              <p>{subprograma.Contenido3}</p>
            </TabPanel>
            <TabPanel className="TabPanel">
              <p>{subprograma.Contenido4}</p>
            </TabPanel>
            <TabPanel className="TabPanel">
              <p>{subprograma.Contenido5}</p>
            </TabPanel>
            <TabPanel className="TabPanel">
              <p>{subprograma.Contenido6}</p>
            </TabPanel>
            <TabPanel className="TabPanel">
              <p>{subprograma.Contenido7}</p>
            </TabPanel>
          </Tabs>
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src={subprograma.imagen}
            alt={subprograma.nombre}
            className="img-fluid"
          />
        </div>
   
      </div>
    </div>
  );
};

export default Vermas;
