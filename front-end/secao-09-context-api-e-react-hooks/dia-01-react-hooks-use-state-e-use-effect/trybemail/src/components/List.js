import React, { useEffect, useState } from 'react';
import { HiOutlineMailOpen, HiOutlineMail } from 'react-icons/hi';
import emailsList from '../data/EmailsList';

function List() {
  const [list, setList] = useState(emailsList);

  useEffect(() => {
    const allRead = list.every((email) => email.status === 1);
    if (allRead) {
      alert('Parabéns! Você leu todas suas mensagens!');
    }
  }, [list]);

  const markAllAsRead = () => {
    const newList = list.map((email) => ({ ...email, status: 1 }));
    setList(newList);
  };

  const markAllAsUnread = () => {
    const newList = list.map((email) => ({ ...email, status: 0 }));
    setList(newList);
  };

  const markAsRead = (id) => {
    const newList = list.map((email) => {
      if (email.id === id) {
        return { ...email, status: 1 };
      }
      return email;
    });

    setList(newList);
  };

  const markAsUnread = (id) => {
    const newList = list.map((email) => {
      if (email.id === id) {
        return { ...email, status: 0 };
      }
      return email;
    });

    setList(newList);
  };

  return (
    <div className="emailsContent">
      <div className="markAllButtons">
        <button onClick={ markAllAsRead }>
          <HiOutlineMailOpen />
          Marcar todas como lida
        </button>
        <button onClick={ markAllAsUnread }>
          <HiOutlineMail />
          Marcar todas como não lida
        </button>
      </div>
      <div className="emailsList">
        {
          list.map((email) => (
            <div key={ email.id } className="email">
              <p className={ email.status === 0 ? 'unread' : 'read' }>{email.title}</p>
              <div className="emailButtons">
                <button
                  type="button"
                  onClick={ () => markAsRead(email.id) }
                >
                  <HiOutlineMailOpen />
                </button>
                <button
                  type="button"
                  onClick={ () => markAsUnread(email.id) }
                >
                  <HiOutlineMail />
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default List;
