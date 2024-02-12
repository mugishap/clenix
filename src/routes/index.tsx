
import MobileNavbar from '@/components/navbar/MobileNavbar';
import { CommonContext } from '@/context';
import NotFound from '@/pages/404/NotFound';
import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const ContactUs = React.lazy(() => import('@/pages/contact/Contact'))
const Home = React.lazy(() => import('@/pages/home/Home'))
const About = React.lazy(() => import('@/pages/about/About'))

const PagesRouter: React.FC<{}> = () => {
  const { showNavbar } = useContext(CommonContext)
  return (
    <BrowserRouter>
        {
          showNavbar && <MobileNavbar />
        }
      <Routes>
        <Route path="/about-us" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRouter;