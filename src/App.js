import React, { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Icon from './components/Icon';

const itemArray = new Array(9).fill('empty');

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  const changeItem = (index) => {
    if (itemArray[index] === 'empty' && !winMessage) {
      itemArray[index] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else if (winMessage.includes('wins')) {
      return toast(winMessage, { type: 'success' });
    } else {
      return toast('Already Filled', { type: 'error' });
    }

    checkWinner();
  };

  const checkWinner = () => {
    //! Checking Row 1
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    }
    //! Checking Row 2
    else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== 'empty'
    ) {
      setWinMessage(`${itemArray[3]} wins`);
    }
    //! Checking Row 3
    else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== 'empty'
    ) {
      setWinMessage(`${itemArray[6]} wins`);
    }

    //! Checking Column 1
    else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    }
    //! Checking Column 2
    else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== 'empty'
    ) {
      setWinMessage(`${itemArray[1]} wins`);
    }
    //! Checking Column 3
    else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMessage(`${itemArray[2]} wins`);
    }
    //! Checking Diagonal 1 (\)
    else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    }
    //! Checking Diagonal 2 (/)
    else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMessage(`${itemArray[2]} wins`);
    }
    // ! Checkig for Game Over
    else if (!itemArray.includes('empty')) {
      setWinMessage('Game Over');
    }
  };

  const reload = () => {
    itemArray.fill('empty', 0, 9);
    setIsCross(false);
    setWinMessage('');
  };

  return (
    <Container fluid>
      <ToastContainer position='top-center' />
      <h1>Tic Tac Toe</h1>
      <Row>
        <Col md={6} className='offset-md-3'>
          {winMessage ? (
            <div className='py-3'>
              {winMessage.includes('wins') ? (
                <h1 className='text-center text-success'>{winMessage}</h1>
              ) : (
                <h1 className='text-center text-danger'>{winMessage}</h1>
              )}
              <Button variant='success' block onClick={reload}>
                Reload
              </Button>
            </div>
          ) : (
            <h1 className='text-center text-primary'>
              {isCross ? "cross'" : "circle's"} turn
            </h1>
          )}
          <div className='grid'>
            {itemArray.map((item, index) => (
              <Card bg='info' key={index} onClick={() => changeItem(index)}>
                <Card.Body className='box'>
                  <Icon item={item} />
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
