import { render, fireEvent, screen} from '@testing-library/react';
import ChessBoardWithValidations from './ChessBoardWithValidations';
import Chessboard from 'chessboardjsx'

test('renders the chess board component', () => {
  render(
    <ChessBoardWithValidations>
        {
            ({
                position,
                onDrop=jest.fn(),
                onMouseOverSquare=jest.fn(),
                onMouseOutSquare,
                squareStyles,
                dropSquareStyle,
                onDragOverSquare,
                onSquareClick=jest.fn(),
                onSquareRightClick
              }) => (
                <Chessboard
                  id="ChessGame"
                  width={320}
                  position={position}
                  onDrop={onDrop}
                  onMouseOverSquare={onMouseOverSquare}
                  onMouseOutSquare={onMouseOutSquare}
                  boardStyle={{
                    borderRadius: "5px",
                    boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
                  }}
                  squareStyles={squareStyles}
                  dropSquareStyle={dropSquareStyle}
                  onDragOverSquare={onDragOverSquare}
                  onSquareClick={onSquareClick}
                  onSquareRightClick={onSquareRightClick}
                />
              )
        }
    </ChessBoardWithValidations>
    );

  fireEvent.click(screen.getByTestId('wP-h2') , new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }))
  const onsquareClick = jest.fn();
  expect(onsquareClick.call.length).toBe(1)

  fireEvent.mouseOver(screen.getByTestId('wP-h2') , new MouseEvent('mouseOver', {
    bubbles: true,
    cancelable: true,
  }))
  const onMouseOverSquare = jest.fn();
  expect(onMouseOverSquare.call.length).toBe(1)
});
