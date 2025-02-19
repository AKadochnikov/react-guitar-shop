import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {AppRoute} from '../../const';
import Cart from './cart';
import {store} from '../../mock-store';

describe('Component: Cart', () => {
  it('should render Cart component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[AppRoute.Cart]}>
          <Cart/>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('cart')).toBeInTheDocument();
  });
});
