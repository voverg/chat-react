import React from 'react';

import userIcon from 'assets/img/face-50.png'

const Message = ({user, message}) => {
  const messageClass = message.user === user ? 'message message-reverse' : 'message';
  const messageTextClass = message.user === user ? 'message__text-right' : 'message__text-left';

  return (
    <div className={messageClass}>
      <div className="message__icon">
        <img src={userIcon} />
      </div>
      <div className={messageTextClass}>
        <p className="author">{message.user}</p>
        {message.message}
      </div>
      <div></div>
    </div>
  );
};

export default Message;
