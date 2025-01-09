import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const WebsiteMeta: React.FC<{ title: string, description: string }> = ({ title, description }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta property="og:image" content="/rafi-abiyyu-airlangga.jpeg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index" />
        <meta name="description" content={description} />
        <meta name="og:title" content={`${title}`} />
        <meta name="og:description" content={`${description}`} />
        <meta name="og:image" content="/favicon.ico?url" />
        <meta name="twitter:title" content={`${title}`} />
        <meta name="twitter:description" content={`${description}`} />
        <meta name="twitter:image" content="/favicon.ico?url" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico?url" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+US+Trad:wght@100..400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Helmet>
    </HelmetProvider>
  );
};