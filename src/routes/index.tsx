
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const ContactUs = React.lazy(() => import('@/pages/contact/Contact'))
const Home = React.lazy(() => import('@/pages/home/Home'))
const About = React.lazy(() => import('@/pages/about/About'))

const PagesRouter: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-us" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRouter;