module.exports = {
  'GET /appleBasket/init': {
    stat: "ok",
    responseText: 'ok',
    data: {
      isPicking: false,
      newAppleId: 3,
      apples: [
        {
          id: 0,
          weight: 233,
          isEaten: false,
        },
        {
          id: 1,
          weight: 235,
          isEaten: true,
        },
        {
          id: 2,
          weight: 256,
          isEaten: false,
        },
      ],
    }
  },
  'GET /appleBasket/pickApple': {
    stat: "ok",
    responseText: 'ok',
    data: {
      id: 10,
      weight: 111,
      isEaten: false,
    }
  },
};
