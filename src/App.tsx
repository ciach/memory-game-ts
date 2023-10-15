import React from 'react';
import Card from './components/Card/Card';
// setup
import { createBoard } from './setup';
import { shuffleArray} from './utils';

// types
import { CardType } from './setup';

// Styles
import { Grid } from './App.styles';
import GlobalStyles from './App.styles';

const App = () => {
  const [cards, setCards] = React.useState<CardType[]>(shuffleArray(createBoard()));
  
  // @ts-ignore: Unused for now, will be used in upcoming features
  const [gameWon, setGameWon] = React.useState(false);
  const [matchedPairs, setMatchedPairs] = React.useState(0);
  const [clickedCard, setClickedCard] = React.useState<undefined | CardType>(undefined);
  const [isProcessing, setIsProcessing] = React.useState(false);

  
  React.useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      setGameWon(true);
    }
  }, [matchedPairs]);

  const handleCardClick = (currentClickedCard: CardType) => {
    if (isProcessing || currentClickedCard.id === clickedCard?.id) return;
  
    // flip the card
    setCards(prevState => 
      prevState.map(card => 
        card.id === currentClickedCard.id ? { ...card, flipped: true, clickable: false } : card
      )
    );
  
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }
  
    setIsProcessing(true); // Start processing
  
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs(prevState => prevState + 1);
      setCards(prevState =>
        prevState.map(card => {
          if (card.id === clickedCard.id || card.id === currentClickedCard.id) {
            return { ...card, clickable: false, flipped: true };
          }
          return card;
        })
      );
      // Play the sound
      const audio = new Audio(clickedCard.sound);
      audio.play();
      setClickedCard(undefined);
      setIsProcessing(false); // End processing
    } else {
      setTimeout(() => {
        setCards(prevState =>
          prevState.map(card => {
            if (card.id === clickedCard.id || card.id === currentClickedCard.id) {
              return { ...card, flipped: false, clickable: true };
            }
            return card;
          })
        );
        setClickedCard(undefined);
        setIsProcessing(false); // End processing
      }, 1000);

    }
  };
        

  return (
    <div>
      <GlobalStyles />
      <Grid>
        {cards.map((card) => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </Grid>
    </div>
  );
};

export default App;
