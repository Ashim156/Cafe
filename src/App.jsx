
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/layout"
import HomePage from "./components/HomePage"
import Menu from "./components/Menu"
import First from "./items/first"
import Second from "./items/Second"
import Slider from "./components/Slider"
import VideoBg from "./components/VideoBg"
import Info from "./components/Info"

function App() {

  return (
    <>
      <Layout>

        <HomePage />
        <Menu />
        <div className="h-[78vh]">
          <Routes>

            <Route path="/" element={<First />} />
            <Route path="/esperesso" element={<Second />} />

          </Routes>
        </div>
        <VideoBg />
        <Slider />
        <Info />
      </Layout>
    </>
  )
}

export default App
