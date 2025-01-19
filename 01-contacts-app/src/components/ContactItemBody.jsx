function ContactItemBody({ name, username }) {
  return [
    <div className="contact-item__body" key={username}>
      <h3 className="contacts-item__name">{name}</h3>
      <p className="contacts-item__username">@{username}</p>
    </div>,
  ];
}

export default ContactItemBody;
