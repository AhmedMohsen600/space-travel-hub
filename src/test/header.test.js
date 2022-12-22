import { render } from '@testing-library/react';
import { Header } from '../components';
import { BrowserRouter } from 'react-router-dom';

describe('Test header', () => {
  test('Should Test header component', () => {
    const tree = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
