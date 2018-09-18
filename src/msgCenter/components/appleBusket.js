import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import '../../base/style/reset.less';
import './appleBusket.less';
import AppleItem from './appleItem';
import actions from '../redux/actions/appleAction';

class AppleBusket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.initApple());
  }
  render() {
    const { state, dispatch } = this.props;

    // 对 state 做显示级别的转化
    const stats = {
      // 当前的苹果数量
      appleNow: {
        quantity: 0,
        weight: 0,
      },
      // 已经吃掉的苹果数量
      appleEaten: {
        quantity: 0,
        weight: 0,
      },
    };

    state.apples.map((apple) => {
      // appleNow 当前，appleEaten已经吃掉
      const selector = apple.isEaten ? 'appleEaten' : 'appleNow';
      // 数量
      stats[selector].quantity += 1;
      // 重量
      stats[selector].weight += apple.weight;
    });

    return (
      <div>
        <div className="appleBusket">
          <div className="title">苹果篮子</div>

          <div className="stats">
            <div className="section">
              <div className="head">当前</div>
              <div className="content">
                {stats.appleNow.quantity}个苹果，
              {stats.appleNow.weight}克
            </div>
            </div>
            <div className="section">
              <div className="head">已吃掉</div>
              <div className="content">
                {stats.appleEaten.quantity}个苹果，
              {stats.appleEaten.weight}克
            </div>
            </div>
          </div>

          <div className="appleList">
            { state.apples.map((apple, index) =>
              <AppleItem
                key={index}
                state={apple}
                actions={{ eatApple: id => dispatch(actions.eatApple(id)) }}
              />,
          ) }
          </div>

          <div className="btn-div">
            <button onClick={() => dispatch(actions.pickApple())}>摘苹果</button>
          </div>
        </div>
      </div>
    );
  }
}
function select(state) {
  return {
    state: state.appleBasket,
  };
}

export default connect(select)(AppleBusket);


// function selectState(state) {
//   return {
//     state: state.appleBusket,
//   };
// }
// export default connect(selectState)(AppleBusket);


// class AppleBusket extends React.Component {
//     render() {
//         let { state, actions} = this.props;
//         ...
//         return (
//           ...
//           <div className="appleList">
//               { state.apples.map(apple =>
//                   <AppleItem
//                       state ={apple}
//                       actions={{eatApple: actions.eatApple}}
//                       key={apple.id}
//                   />
//               ) }
//           </div>

//           <div className="btn-div">
//               <button onClick={actions.pickApple}>摘苹果</button>
//           </div>
//           ...
//        )
//     }
// }

// function buildActionDispatcher(dispatch) {
//   return {
//       actions: bindActionCreators(actions, dispatch)
//     }
// }

// export default connect(selectState, buildActionDispatcher)(AppleBusket);
