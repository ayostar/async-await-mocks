import read from './reader';
import json from './parser';
import GameSaving from './game_saving';

export default class GameSavingLoader {
  static async load() {
    const result = await json(await read());
    const parsedData = JSON.parse(result);
    return new GameSaving(parsedData);
  }
}
