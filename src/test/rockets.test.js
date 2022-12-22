import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { Rocket } from '../components';

jest.mock('react-redux');

describe('Rockets test', () => {
  test('Should test rockets Componenet', () => {
    useSelector.mockReturnValue([
      {
        id: '123',
        flickr_images:
          'https://imgur.com/DaCfMsj.jpg,https://imgur.com/azYafd8.jpg',
        rocket_name: 'Falcon 1',
        description: 'Test',
        reserved: !true,
      },
    ]);
    const tree = render(<Rocket />);
    expect(tree).toMatchSnapshot();
  });
});
