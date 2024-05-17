import './App.scss';
import Navbar from './components/Navbar';
import TopSection from './components/TopSection';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopSection />
      <Content />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
