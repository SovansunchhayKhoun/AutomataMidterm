import Axios from "axios";
Axios.defaults.baseURL = import.meta.env.VITE_APP_URL;

console.log(import.meta.env.VITE_APP_URL)
function App() {
  return (
    <>
      <div>
        My React App
      </div>
    </>
  )
}

export default App
