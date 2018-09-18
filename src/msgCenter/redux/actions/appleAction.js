// const FSA = {
//   type: 'EAT_APPLE',
//   payload: 3, // 负载是3, 说明吃掉3号苹果， 这里也可以写成 { id : 3 }
//   meta: 'This action will eat an apple!', // (不是必须的)
// };

import ajax from '../../../base/ajax'; // 经过封装的加强型 ajax 函数

// 这是名空间，对普通action做划分
const prefix = 'apple/';

const actions = {

  // 初始化
  initApple: () => (dispatch) => {
    // 发送初始化请求
    ajax({
      url: '/appleBasket/init',
      ok: (res) => {
        dispatch(actions.doneInitApple(res.data));
      },
      fail: (xhr) => {
        dispatch(actions.failPickApple(xhr.responseText));
      },
    });
  },

  // 初始化成功
  doneInitApple: item => ({
    type: 'apple/DONE_INIT_APPLE',
    payload: item,
  }),

    // 注意这里需要 () => ... , 不然 pickAppleAction 不是一个actionCreator, 而是一个thunk
  pickApple: () => (dispatch, getState) => {
    // 如果正在摘苹果，则结束这个thunk, 不执行摘苹果
    if (getState().isPicking) { return; }

    // 通知开始摘苹果
    dispatch(actions.beginPickApple());

    // 发送摘苹果请求
    ajax({
      url: '/appleBasket/pickApple',
      ok: (res) => {
        dispatch(actions.donePickApple(res.data));
      },
      fail: (xhr) => {
        dispatch(actions.failPickApple(xhr.responseText));
      },
    });
  },

  // 通知store应用开始摘苹果
  beginPickApple: () => ({
    type: 'apple/BEGIN_PICK_APPLE',
  }),

  // 摘苹果成功
  donePickApple: item => ({
    type: 'apple/DONE_PICK_APPLE',
    payload: item,
  }),


  // 摘苹果失败
  failPickApple: errMsg => ({
    type: 'apple/FAIL_PICK_APPLE',
    payload: new Error(errMsg),
    error: true,
  }),

  // 吃苹果
  eatApple: appleId => ({
    type: 'apple/EAT_APPLE',
    payload: appleId,
  }),

  // 通知吃苹果
  beginEatApple: () => ({
    type: 'eat/BEGIN_EAT_APPLE',
  }),

  // 吃苹果成功

  // eatApple: () => (dispatch, getState) => {

  // },


};

export default actions;
