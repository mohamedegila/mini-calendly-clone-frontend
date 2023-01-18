
import './App.css';
import { MainRoutes } from './routes/Routes';

function App() {
  return (
    <>
 
{/* <div class="isolate bg-white container mx-auto py-4">
 
 <Navbar/>
  <main>
    <div class="relative px-6 lg:px-8">
     
    </div>
  </main>
</div> */}

<div className="App container mx-auto py-4">
      <MainRoutes />
      {/* <ConfirmPage /> */}
    </div>
    </>
  );
}

export default App;
