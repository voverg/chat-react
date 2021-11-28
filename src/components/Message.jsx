import React from 'react';

import userImg from 'assets/img/face-50.png';
import catImg from 'assets/img/cat.png';

const Message = ({user, message}) => {
  const messageClass = message.user === user ? 'reverse' : '';
  const messageHeader = message.user === user ? 'reverse' : '';
  const messageTextClass = message.user === user ? 'message__text-right' : 'message__text-left';
  const date = message.date.slice(0, 10);
  const userIcon = message.user.toLowerCase() === 'cat' ? catImg : userImg;

  return (
    <div className={`message ${messageClass}`}>
      <div className="message__icon">
        <img src={userIcon} />
      </div>
      <div className={messageTextClass}>
        <div className={`message__text-header ${messageHeader}`}>
          <p className="message__author">{message.user}</p>
          <p className="message__date">{date}</p>
        </div>
        {message.message}
      </div>
      <div></div>
    </div>
  );
};

export default Message;
