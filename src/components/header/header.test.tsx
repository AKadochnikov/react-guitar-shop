import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {history} from '../mockStore';
import Header from './header';
import userEvent from '@testing-library/user-event';

describe('Component: Header', () => {
  it('should render Header component', () => {
    render(<Router history={history}><Header/></Router>);

    expect(screen.getByText(/Начать поиск/)).toBeInTheDocument();
    expect(screen.getByText(/Перейти в корзину/)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('search'), 'Bass');

    expect(screen.getByDisplayValue(/Bass/i)).toBeInTheDocument();
  });
});
