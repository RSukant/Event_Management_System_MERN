import { Box, useColorModeValue } from '@chakra-ui/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import EventCreate from './pages/EventCreatePage';
import Navbar from './components/Navbar';
import SignInPage from './pages/SignInPage';
import ManageAccountPage from './pages/ManageAccount';
import LoginPage from './pages/LoginPage';
import UserEvents from './pages/UserEventsPage';
import UpdateUser from './pages/ProfileUpdate';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUsPage';
import Feedback from './pages/FeedBackPage';
import Terms from './pages/TermsPage';
import PrivacyPolicy from './pages/PrivacyPolicyPage';
import Support from './pages/SupportPage';
import ScrollToTop from './components/ScrollToTop'; 
import LandingPage from './pages/LandingPage';
import ConferenceHomePage from './pages/ConferenceHomePage';
import CulturalsHomePage from './pages/CulturalsHomePage';  
import CompetitionHomePage from './pages/CompetitionHomePage';
import WorkshopHomePage from './pages/WorkshopHomePage';

function App() {
  const location = useLocation();
  
  return (
    <Box minH={'100vh'} display="flex" flexDirection="column" bg={useColorModeValue("gray.100", "gray.900")}>

      <ScrollToTop />
      
      {location.pathname !== '/' && location.pathname !== '/signup' && (<Navbar key={location.key}/>) }

      <Box flex={1}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignInPage />} />
        <Route path="/create" element={<EventCreate />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/conference" element={<ConferenceHomePage />} />
        <Route path="/culturals" element={<CulturalsHomePage />} />
        <Route path="/competition" element={<CompetitionHomePage />} />
        <Route path="/workshop" element={<WorkshopHomePage />} />
        <Route path="/userupdate" element={<UpdateUser />} />
        <Route path="/manage" element={<ManageAccountPage />} />
        <Route path="/userevents" element={<UserEvents />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      </Box>
      {location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/userupdate' && <Footer />}
    </Box>
  );
}

export default App;
