import logo from '../images/logo.png'
import data from '../data/index.js'
import Flashcard from './Flashcard.jsx';
import Sidebar from './Sidebar.jsx';
import {useState} from 'react';

export default function PlayScreen() {
    const [myAnswers, setMyAnswers] = useState([]);
    const deck = [];

    function createDeck() {
        data.forEach(value => {
            deck.push({...value});
        })
        
        deck.sort(() => Math.random() - 0.5);
    }
    
    createDeck();
    
    function whenAnswered (chosenAnswer) {
        setMyAnswers([...myAnswers, chosenAnswer]);
    }

    return (
        <div className="main">
            <div className="header">
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </div>
            <div className="deck">
                {deck.map((value, index) => < Flashcard 
                answer={value.answer} 
                question={value.question} 
                key={index} 
                index={index} 
                whenAnswered={whenAnswered}
                />)}
            </div>
            <Sidebar questions={deck} myAnswers={myAnswers}/>
            
        </div>
    );
}