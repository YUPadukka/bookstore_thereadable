import './App.css';
import Home from './components/Home';
import Banner from './components/banner';
import CustomNavbar from './components/CustomNavbar';
import AllBooks from './components/allBooks';
import InputBooks from './components/inputBooks'
import ContactUs from './components/contactUs'
import RFooter from './components/footer'


function App() {
  return (
    <div className="App">
             
        <Banner />
        <CustomNavbar />
        <AllBooks />
        
        <ContactUs />
        <RFooter />

    </div>
  );
}

export default App;
