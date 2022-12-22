import { Table } from '../components';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

jest.mock('react-redux');

describe('Test table component', () => {
  test('Should render table component', () => {
    useSelector.mockReturnValue([
      {
        mission_id: '1',
        mission_name: 'first mission',
        description: 'lorem ipsum',
        activeMission: true,
      },
    ]);
    const tree = render(<Table />);
    expect(tree).toMatchSnapshot();
  });
});
