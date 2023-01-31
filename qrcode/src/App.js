import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App bg-gray-300">
      <div className="px-20 py-12 max-w-md mx-auto"> 
      <div className="bg-white rounded-xl shadow-lg px-4 py-4">
        <div className="">
          <img className="rounded-xl" src="qr.png" />
        </div> 
        <div className="pb-8 mt-4 border">
          <h1 className="sm:text-lg lg:text-xl font-bold">Improve your front-end <br className=""/> skills by building projects</h1>
          <p className="mt-3 text-sm text-gray-500">Scan the QR code to visit Frontend Mentor and take your coding Skills to the next level</p>
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default App;
