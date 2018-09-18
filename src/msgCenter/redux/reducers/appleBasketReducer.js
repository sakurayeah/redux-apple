import object from 'lodash/fp/object';

const initialState = {
  isPicking: false,
  newAppleId: 0,
  apples: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'apple/DONE_INIT_APPLE':
      return {
        ...state,
        ...action.payload,
      };

    case 'apple/BEGIN_PICK_APPLE':
      return {
        ...state,
        isPicking: true
      };

    case 'apple/DONE_PICK_APPLE':
      return {
        ...state,
        apples: [
          ...state.apples,
          action.payload,
        ],
        newAppleId: state.newAppleId + 1,
        isPicking: false,
      };

    case 'apple/FAIL_PICK_APPLE':
      // 这里只是简单处理
      return {
        ...state,
        isPicking: false,
      };

    case 'apple/EAT_APPLE':
      let newState = state;
      state.apples.map((val, index) => {
        if (val.id === action.payload) {
          state.apples[index].isEaten = true;
          newState = object.defaultsDeep({}, state);
        }
      });
      return newState;
    default:
      return state;
  }
};
