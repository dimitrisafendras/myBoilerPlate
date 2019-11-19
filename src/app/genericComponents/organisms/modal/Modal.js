import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

class Modal extends Component {
  render() {
    // const { loading, title, texts, actions, ...rest } = this.props;
    // const {
    //   modal,
    //   container,
    //   title: titleStyle,
    //   message,
    //   txt,
    //   btnStyle,
    //   genericContainer,
    // } = styles;

    return (
      <div />
      //   <div style={[genericContainer, modal]}>
      //      <div style={[container]}>
      //       {title && <span style={[txt, titleStyle]}>{title}<span/>}
      //       {texts &&
      //         texts.map(text => (
      //           <span key={uuidv4()} style={[txt, message]}>
      //             {text}
      //           </span>
      //         ))}
      //       {actions &&
      //         actions.map(({ actionText }, index) => (
      //           <button key={uuidv4()} disabled={loading} onPress={rest[`action${index}`]} text={actionText} style={btnStyle} />
      //         ))}
      //      </div>
      //   </div>
    );
  }
}

export default Modal;
