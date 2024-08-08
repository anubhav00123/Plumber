import Footer from "@/components/Footer";
import NavbarCustom from "@/components/Navbar";
import { host, siteId } from "@/static";
import axios from "axios";
import Head from "next/head";
import React from "react";
import { Col, Container } from "react-bootstrap";

const index = ({ service_name, response, responseall }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{response.title}</title>
        <meta name="description" content={response.description} />
        <meta name="keywords" content={response.keywords} />
        <meta name="title" content={response.title} />
      </Head>
      <div>
        <NavbarCustom response={responseall} />
        <section class="location-banner">
          <h1 className="text-white banner-text">
            {service_name.toUpperCase()}
          </h1>
        </section>
        <Container>
          <Col>
            <div dangerouslySetInnerHTML={{ __html: response.content }} />
          </Col>
        </Container>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const { service_name } = context.query;

  const optionsforall = {
    method: "GET",
    url: `${host}dynamic/get-pages-by-siteid/${siteId}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const fetchapii = await axios.request(optionsforall);
  const responseall = await fetchapii.data;

  // Logging the response to check the structure and data

  // Make sure to

  const options = {
    method: "GET",
    url: `${host}dynamic/get-pages-by-siteid-url/${siteId}/${service_name}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const fetchapi = await axios.request(options);
  const response = await fetchapi.data;
  return {
    props: {
      response: response.response,
      service_name: service_name,
      responseall: responseall.response,
    },
  };
};

export default index;
