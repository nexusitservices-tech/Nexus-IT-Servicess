/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { RouteProgressBar } from '@/components/ui/PageLoader';
import MarketingLayout from '@/layouts/MarketingLayout';
import Home from '@/pages/marketing/Home';
import About from '@/pages/marketing/About';
import Services from '@/pages/marketing/Services';
import Solutions from '@/pages/marketing/Solutions';
import SolutionDetail from '@/pages/marketing/SolutionDetail';
import Contact from '@/pages/marketing/Contact';
import Portal from '@/pages/marketing/Portal';
import Privacy from '@/pages/marketing/Privacy';
import Terms from '@/pages/marketing/Terms';
import CaseStudies from '@/pages/marketing/CaseStudies';
import Careers from '@/pages/marketing/Careers';
import FAQ from '@/pages/marketing/FAQ';
import Estimator from '@/pages/marketing/Estimator';
import ITServicesPage from '@/pages/marketing/ITServicesPage';
import SoftwareDevelopmentPage from '@/pages/marketing/SoftwareDevelopmentPage';

import AuthLayout from '@/layouts/AuthLayout';
import Login from '@/pages/auth/Login';

import AppLayout from '@/layouts/AppLayout';
import Dashboard from '@/pages/app/Dashboard';
import CRM from '@/pages/app/CRM';
import Tickets from '@/pages/app/Tickets';
import Finance from '@/pages/app/Finance';
import Projects from '@/pages/app/Projects';
import Documents from '@/pages/app/Documents';
import AI from '@/pages/app/AI';
import Settings from '@/pages/app/Settings';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteProgressBar />
      <Routes>
        {/* Marketing Site */}
        <Route path="/" element={<MarketingLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<SolutionDetail />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="solutions/:slug" element={<SolutionDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portal" element={<Portal />} />
          <Route path="admin" element={<Portal />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="portfolio" element={<CaseStudies />} />
          <Route path="careers" element={<Careers />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="estimator" element={<Estimator />} />
          <Route path="it-services" element={<ITServicesPage />} />
          <Route path="software-development" element={<SoftwareDevelopmentPage />} />
        </Route>

        {/* Authentication */}
        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
        
        {/* Application / OS */}
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="crm" element={<CRM />} />
          <Route path="projects" element={<Projects />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="finance" element={<Finance />} />
          <Route path="documents" element={<Documents />} />
          <Route path="ai" element={<AI />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
