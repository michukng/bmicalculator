import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('0.00');
  const [info, setInfo] = useState('');

  const handleChangeHeight = (e) => {
    e > 260 ? setHeight(260) : e < 0 ? setHeight(1) : setHeight(e)
  }

  const handleChangeWeight = (e) => {
    e > 300 ? setWeight(300) : e < 0 ? setWeight(1) : setWeight(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!height && !weight) return;
    const heightToM = height/100
    bmiResult(heightToM, weight)
  }

  const bmiResult = (height, weight) => {
    const bmi = weight/(height*height)    
    setBmi(bmi.toFixed(2));
    bmi < 16 ? setInfo('Wygłodzenie')
    : (bmi > 16 && bmi < 16.99) ? setInfo('Wychudzenie')
    : (bmi > 17 && bmi < 18.49) ? setInfo('Niedowaga')
    : (bmi > 18.5 && bmi < 24.99) ? setInfo('Wartość prawidłowa')
    : (bmi > 25 && bmi < 29.99) ? setInfo('Nadwaga')
    : (bmi > 30 && bmi < 34.99) ? setInfo('I stopień otyłości')
    : (bmi > 35 && bmi < 39.99) ? setInfo('II stopień otyłości')
    : setInfo("III stopień otyłości")
  }

 
  return (
    <div className="App">
      <Header title='BMI CALCULATOR'/>
      <Content
        height={height}
        handleChangeHeight={handleChangeHeight}
        weight={weight}
        handleChangeWeight={handleChangeWeight}
        handleSubmit={handleSubmit}
        bmi={bmi}
        info={info}
      />
      <Footer />
    </div>
  );
}

export default App;
