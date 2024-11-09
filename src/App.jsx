import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Military from './components/Military/Military';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import ContactsPage from './components/ContactsPage/ContactsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <Military />
            <News />
            <Footer />
          </>
        } />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
