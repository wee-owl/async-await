import GameSavingLoader from '../gameSavingLoader';
import GameSavingObject from '../gameSavingObject';

test('check GameSavingLoader class', async () => {
  expect.assertions(1);
  const object = new GameSavingObject({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });

  try {
    const saving = await GameSavingLoader.load();
    expect(saving).toEqual(object);
  } catch (e) {
    expect(e).toThrow();
  }
});
