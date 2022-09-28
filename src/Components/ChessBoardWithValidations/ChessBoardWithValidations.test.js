import { render, screen, fireEvent } from '@testing-library/react';
import {} from '@testing-library/jest-dom'
import ChessBoardWithValidations from './ChessBoardWithValidations';
import Chessboard from 'chessboardjsx'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
test('renders learn react link', async () => {
  const wrapper = shallow(
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
