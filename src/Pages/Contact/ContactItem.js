import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactItem = ({ contact }) => {
    const { name, company, photo, email, title, mobile, groupId } = contact;

    //Deleting contact
    const handleDelete = async () => {
        let confirm = window.confirm("Are you sure to delete?");
        if (confirm) {
        let data = await axios.delete(`https://stormy-harbor-75663.herokuapp.com/contacts/${contact._id}`).then((res) => {
            if (res.request.status === 200) {
            toast("Deleted Successfully");
            }
        });
        } else {
        return;
        }
    };
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={photo} alt="Shoes" class="rounded-xl" style={{width:"120px"}} />
                </figure>
                <div class="card-body items-center text-center">
                    <h1 className="card-title font-bold">{name}</h1>
                    <h5>{mobile}</h5>
                    <p className='font-thin'>{email}</p>
                    <p className='font-semibold'>{company}</p>
                    <p className='text-sm'>{title}</p>
                    <p className='font-medium'>Group: {groupId}</p>
                    <div class="card-actions">
                        {/* <Link to={`/view/${contact._id}`}>
                            <button class="btn btn-primary">View</button>
                        </Link> */}
                        <Link to={`/update/${contact._id}`}>
                            <button class="btn btn-primary">Update</button>
                        </Link>
                        <button class="btn btn-error" onClick={() => handleDelete(contact._id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ContactItem;
