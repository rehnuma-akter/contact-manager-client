import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateContact = () => {
    const { id } = useParams();
    const [contact, setContact] = useState({});
    const url = `https://murmuring-sea-74052.herokuapp.com/contacts/${id}`;
    // let { name,photo,company } = contact;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
            setContact(data);
            });
    }, [url, contact]);
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://murmuring-sea-74052.herokuapp.com/contacts/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result)
            toast.success("Contact is Updated Successfully");
            data.target.reset();
        } )
    };
    
    return (
        <div>
            <h1 className='text-center my-2 text-3xl'>Update Contact</h1>
            <h2 className='text-xl py-5 mx-24'>Selected Contact: {(contact.name)}</h2>
            <div className='grid grid-cols-2 gap-4'>
                <div className='ml-10'>
                    <form className='border-2 ml-24 w-96 h-96 pl-8 pt-5' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-5 w-80' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} /> <br />
                        <input className='mb-5 w-80' placeholder='mobile' type="number" {...register("mobile")} /> <br />
                        <input className='mb-5 w-80' placeholder='email' type="email" {...register("email")} /> <br />
                        <input className='mb-5 w-80' placeholder='company' type="text" {...register("company")} /> <br />
                        <input className='mb-5 w-80' placeholder='title' type="text" {...register("title")} /> <br />
                        <input className='mb-5 w-80' placeholder='groupId' type="text" {...register("groupId")} /> <br />
                        <input className='mb-5 w-80' placeholder='Photo URL' type="text" {...register("photo")} /> <br />
                        <input className='btn px-14 text-white' type="submit" value="Update contact" />
                    </form>
                </div>
                <div>
                    <img className='ml-14 mt-2' src="https://i.ibb.co/Npnbn22/change-contact-desktop.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default UpdateContact;