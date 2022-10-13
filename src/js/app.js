import GameSavingLoader from './game_saving_loader';

(async () => {
  try {
    return await GameSavingLoader.load();
  } catch (error) {
    throw new Error(error);
  }
})();
