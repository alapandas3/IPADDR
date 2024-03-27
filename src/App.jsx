import img from './media/images/pattern-bg-desktop.png';
import './App.css';
import Search from './components/Search';
import Display from './components/Display';
import Map from './components/Map';


function App() {
  return (
    <>
      <div className='m-0 overflow-auto flex justify-center'>
        <img src={img} alt="Back" />
        <div className='absolute z-20 grid justify-items-center text-center'>
          <p className='font-bold text-2xl pt-6 text-white'>
            IP Address Tracker
          </p>
          <Search />
          <Display />
        </div>
      </div>
      <div className='overflow-hidden'>
        <Map />
      </div>

    </>
  );
}

export default App;
