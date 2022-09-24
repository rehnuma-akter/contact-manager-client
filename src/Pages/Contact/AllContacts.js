import React, { useEffect, useState } from 'react';
import ContactItem from './ContactItem';


const AllContacts = ({ contact }) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/contacts")
        .then((res) => res.json())
        .then((data) => setContacts(data));
    }, []);
    

    return (
        <div>
            <h2 className='text-3xl text-center my-5'>Manage All Contacts</h2>
            <div className='grid grid-cols-3 gap-10 mx-8 my-14'>
                {
                    contacts.map((contact) => (
                        <ContactItem key={contact._id} contact={contact}></ContactItem>
                    ))}
            </div>
        </div>
    );
};

export default AllContacts;