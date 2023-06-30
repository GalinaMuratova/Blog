import React from 'react';
import './Contacts.css'

const Contacts = () => {
    return (
        <div className="text-center d-flex flex-column contact-block">
            <h2 className='my-5' >Свяжитесь с нами</h2>
            <a className='social telega py-2' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Telegram</a>
            <a className='social whats py-2' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>WhatsApp</a>
            <a className='social insta py-2' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Instagram</a>
            <p className='my-3'><i>PS. Спойлер, продолжения нет, можете не связываться</i></p>
        </div>
    );
};

export default Contacts;