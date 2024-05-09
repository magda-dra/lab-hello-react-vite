import './App.css'
import MyButton from './MyButton';
import IronhackLogo from './assets/ironhack-logo-xs.png';
import Menu from './assets/menu-top-xs.png';
import Icon1 from './components/icon1';
import Icon2 from './components/icon2';
import Icon3 from './components/icon3';
import Icon4 from './components/icon4';

function App() {
  return (
    
      <div className="App">
        <img src={IronhackLogo} alt="logo" />
        <img src={Menu} alt="menu" />
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library,
        and become a super Ninja developer</p>
        <MyButton />
        <Icon1 />
        <Icon2 />
        <Icon3 />
        <Icon4 />
      </div>
    
  );
}

export default App
