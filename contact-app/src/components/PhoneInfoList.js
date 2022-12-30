import React, {Component} from 'react';
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data, onRemove, onUpdate } = this.props;

    const list = data.map(info => (<PhoneInfo info={info} onRemove={onRemove} onUpdate={onUpdate} key={info.id}/>));

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default PhoneInfoList;