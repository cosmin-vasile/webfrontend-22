import Header from "./components/Header";
import MainNav from "./components/MainNav";
import ContainerBody from "./components/ContainerBody";
import Sidebar from "./components/SideBar";
import Main from "./components/Main";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
//import ControlledComponent from './components/__ControlledComponent';
//import UncontrolledComponent from './components/__UncontrolledComponent';
import "./App.css";

function App() {
  return (
    <div className="container-app">
      <PersonalDetailsForm />
      {/* <Header />
      <MainNav />
      <ContainerBody>
        <Sidebar />
        <Main />
      </ContainerBody> */}
    </div>
  );
}

export default App;
