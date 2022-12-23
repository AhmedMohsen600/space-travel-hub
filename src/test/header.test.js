import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../components';

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
