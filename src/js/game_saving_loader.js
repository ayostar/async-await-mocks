import read from './reader';
import json from './parser';
import GameSaving from './game_saving';

export default class GameSavingLoader {
  static async load(
    data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'
  ) {
    const savingData = await json(await read(data));
    const result = JSON.parse(savingData);
    return new GameSaving(result);
  }
}
