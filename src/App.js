import "./App.css";
import { MainRoutes } from "./routes/Routes";
import { useSelector } from "react-redux";
import { Loading } from "./components/loading/loading";

function App() {
  const { refresh } = useSelector((state) => state.common);

  return (
    <>
      {refresh && <Loading />}

      <div className="App container mx-auto py-4">
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
