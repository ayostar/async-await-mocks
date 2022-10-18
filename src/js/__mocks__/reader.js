jest.mock('../reader.js', () => {
  const originalModule = jest.requireActual('../reader.js');

  return {
    __esModule: true,
    ...originalModule,
    default: jest
      .fn()
      .mockImplementationOnce(() => Promise.reject())
      .mockImplementationOnce(() => originalModule.read()),
  };
});
