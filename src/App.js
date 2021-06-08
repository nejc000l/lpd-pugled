import './css/general.css'
import React, {useState} from 'react'
import Info from './Components/info'
import APK from './Components/APK'
import APKnačrt from './Components/APK-načrt'
import InformacijeJavnegaZnačaja from './Components/informacije_javnega_značaja'
import data from './data'
import {Switch,Route} from 'react-router-dom'


// states

function App() {
  const [text, setText] = useState(data())
  const [currentText, setCurrentText] = useState(text[0])
  return (
    <div className="App">
    <Switch>
    <Route path="/" exact>
      <Info currentText={currentText}/>
    </Route>
    <Route path="/informacije-javnega-značaja">
      <InformacijeJavnegaZnačaja currentText={currentText}/>
    </Route>
    <Route path="/APK">
      <APK currentText={currentText}/>
    </Route>
    <Route path="/APK-načrt">
      <APKnačrt currentText={currentText}/>
    </Route>


    </Switch>
    </div>
  );
}

export default App;
