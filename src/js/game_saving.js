export default class GameSaving {
  constructor(data) {
    this.id = Number(data.id);
    this.created = Date.now().toLocaleString;
    this.userInfo = {
      id: Number(data.userInfo.id),
      name: String(data.userInfo.name),
      level: Number(data.userInfo.level),
      points: Number(data.userInfo.points),
    };
  }
}
