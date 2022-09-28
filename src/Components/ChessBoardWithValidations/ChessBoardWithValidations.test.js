import { render} from '@testing-library/react';
import ChessBoardWithValidations from './ChessBoardWithValidations';
import Chessboard from 'chessboardjsx'

test('renders the chess board component', async () => {
  const {getByTestId, debug} = render(
    <ChessBoardWithValidations>
        {
            ({
                position,
                onDrop=jest.fn(),
                onMouseOverSquare,
                onMouseOutSquare,
                squareStyles,
                dropSquareStyle,
                onDragOverSquare,
                onSquareClick,
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
  
});
