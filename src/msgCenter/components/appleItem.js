import React from 'react';
import './appleItem.less';

export default class AppleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  // 是否重新渲染
  shouldComponentUpdate(nextProps) {
    return nextProps.state !== this.props.state;
  }
  render() {
    const { state, actions } = this.props;
    if (state.isEaten) return null;

    return (
      <div className="appleItem">
        <div className="apple"><img src="https://gw.alipayobjects.com/zos/rmsportal/siATMpBOibWwIzLpveLZ.png" alt="" /></div>
        <div className="info">
          <div className="name">红苹果 - {state.id}号</div>
          <div className="weight">{state.weight}克</div>
        </div>
        <div className="btn-div"><button onClick={() => actions.eatApple(state.id)}>吃掉</button></div>
      </div>
    );
  }
}
