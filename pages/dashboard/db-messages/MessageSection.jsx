
const chats = [{
    id: 1, name: 'Megan Leib', active: true, msg: '9 pm at the bar if possible 😳', time: '12 sec', imgUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
},
{
    id: 2, name: 'Dave Corlew', msg: "Let's meet for a coffee or something today ?", time: '3 min', imgUrl: 'https://i.pinimg.com/originals/a9/26/52/a926525d966c9479c18d3b4f8e64b434.jpg'
},
{
    id: 3, name: 'Jerome Seiber', msg: "I've sent you the annual report", time: '42 min', imgUrl: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
},
{
    id: 4, name: 'Thomas Dbtn', msg: 'See you tomorrow ! 🙂', time: '2 hour', imgUrl: 'https://card.thomasdaubenton.com/img/photo.jpg'
},
{
    id: 5, name: 'Elsie Amador', msg: 'What the shit is going on ?', time: '32 hour', imgUrl: 'https://images.unsplash.com/photo-1553514029-1318c9127859?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
},
{
    id: 6, name: 'Billy Southard', msg: 'Ahahah 😂', time: '1 day', imgUrl: 'https://images.unsplash.com/photo-1435348773030-a1d74f568bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
},
{
    id: 7, name: 'Paul Walker', msg: 'text message 😳', time: '2 day', imgUrl: 'https://images.unsplash.com/photo-1541747157478-3222166cf342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80'
},
{
    id: 8, name: 'Paul Walker1', msg: 'text message try 😳', time: '3 day', imgUrl: 'https://images.unsplash.com/photo-1541747157478-3222166cf342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80'
}]

const MessagingSupport = () => {
    return (
        <div className="msg-container bg-white">
            <div className="row" >

                <section className="discussions" >
                    {chats.map((item, index) => <div key={`${index}-${item.id}`} className={`discussion ${item.active ? "message-active" : ''}`}>
                        <div className="photo"
                            style={{ backgroundImage: `url(${item.imgUrl})` }}>
                            <div className="online"></div>
                        </div>
                        <div className="desc-contact">
                            <p className="name text-16 lh-16 text-dark-1">{item.name}</p>
                            <p className="message text-12 lh-16 text-dark-1">{item.msg}</p>
                        </div>
                        <div className="timer text-10 text-light-1 lh-14">{item.time}</div>
                    </div>)}

                </section>

                <section className="chat">
                    <div className="header-chat bg-white shadow-2">
                        <div className="photo ml-10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")' }}>
                            <div className="online"></div>
                        </div>
                        <p className="name text-18 text-dark-1 fw-500">Megan Leib</p>
                    </div>
                    <div className="messages-chat">
                        <div className="message">
                            <p className="text text-dark-1 lh-16 text-14"> Hi, how are you ? </p>
                        </div>
                        <div className="message">
                            <p className="text text-dark-1 lh-16 text-14"> What are you doing tonight ? Want to go take a drink ?</p>
                        </div>
                        <p className="time text-10 text-light-1 lh-14"> 14:58</p>
                        <div className="message text-only">
                            <div className="response">
                                <p className="text text-light-1 lh-16 text-14"> Hey Megan ! It's been a while</p>
                            </div>
                        </div>
                        <div className="message text-only">
                            <div className="response">
                                <p className="text text-light-1 lh-16 text-14"> When can we meet ?</p>
                            </div>
                        </div>
                        <p className="response-time time text-10 text-light-1 lh-14"> 15:04</p>
                        <div className="message">
                            <p className="text text-dark-1 lh-16 text-14"> 9 pm at the bar if possible</p>
                        </div>
                        <p className="time text-10 text-light-1 lh-14"> 15:09</p>
                        <div className="message text-only">
                            <div className="response">
                                <p className="text text-light-1 lh-16 text-14"> Hey Megan ! It's been a while</p>
                            </div>
                        </div>
                        <div className="message text-only">
                            <div className="response">
                                <p className="text text-light-1 lh-16 text-14"> When can we meet ?</p>
                            </div>
                        </div>
                        <p className="response-time time text-10 text-light-1 lh-14"> 15:04</p>
                    </div>
                    <div className="footer-chat">
                        <input type="text" className="write-message" placeholder="Type your message here"></input>
                        <div className="send-icon clickable">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                            </svg>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    )
}

export default MessagingSupport;