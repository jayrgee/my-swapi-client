import axios from 'axios';
import config from './config';

jest.mock('axios');

describe('config', () => {
  const mockData = { data: { foo: 'bar' } };

  test('get returns null', () => {
    expect(config.get()).toBeNull();
  });

  test('load returns expected data', async () => {
    axios.get.mockResolvedValue(mockData);
    expect(config.get()).toBeNull();
    await expect(config.load()).resolves.toEqual(mockData.data);
    expect(config.get()).toEqual(mockData.data);
  });

  test('get returns expected', () => {
    expect(config.get()).toEqual(mockData.data);

});
});
