import GameSavingObject from './gameSavingObject';
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const response = await json(data);
      return new GameSavingObject(JSON.parse(response));
    } catch (e) {
      return e;
    }
  }
}
