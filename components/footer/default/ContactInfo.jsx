const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Call us",
      action: "tel:+1 408 777 6665",
      text: "+1 408 777 6665",
    },
    {
      id: 2,
      title: "Need live support?",
      action: "mailto:support@stebr.com",
      text: "support@stebr.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-blue-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
