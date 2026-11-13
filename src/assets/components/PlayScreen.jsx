import logo from '../images/logo.png'
import data from '../data/index.js'
import Flashcard from './Flashcard.jsx';

export default function PlayScreen() {
    
    const deck = [];

    function createDeck() {
        data.forEach(value => {
            deck.push({...value});
        })
        
        deck.sort(() => Math.random() - 0.5);
    }
    
    createDeck();
    
    

    return (
        <div className="main">
            <div className="header">
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </div>
            <div className="deck">
                {deck.map((value, index) => < Flashcard answer={value.answer} question={value.question} key={index} index={index}/>)}
            </div>
        </div>
    );
}