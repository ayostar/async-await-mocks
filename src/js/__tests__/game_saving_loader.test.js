jest.mock('../reader');
import GameSavingLoader from '../game_saving_loader';
import read from '../reader';
const data =
  '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test('Should create Gamesaving Object', async () => {
  const gameSaving = await GameSavingLoader.load();
  expect(gameSaving).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});

test('Should create read Object', async () => {
  expect.assertions(1);
  function testReadResolve() {
    return new Promise((resolve) => {
      setTimeout(() => {
        return ((input) => {
          const buffer = new ArrayBuffer(input.length * 2);
          const bufferView = new Uint16Array(buffer);
          for (let i = 0; i < input.length; i += 1) {
            bufferView[i] = input.charCodeAt(i);
          }
          resolve(buffer);
        })(data);
      }, 1000);
    });
  }
  await expect(read(data)).resolves.toEqual(await testReadResolve());
});
