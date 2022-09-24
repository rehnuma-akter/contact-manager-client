import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddContact = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const url = `https://stormy-harbor-75663.herokuapp.com/contacts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result)
            toast.success("Added Successfully");
        } )
    };


    return (
        <div>
            <h2 className='text-center my-5 text-3xl'>Please add a Contact here</h2>
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <form className='border-2 ml-24 mt-12  w-96 h-96 pl-8 pt-5' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-5 w-80' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} /> <br />
                        <input className='mb-5 w-80' placeholder='mobile' type="number" {...register("mobile")} /> <br />
                        <input className='mb-5 w-80' placeholder='email' type="email" {...register("email")} /> <br />
                        <input className='mb-5 w-80' placeholder='company' type="text" {...register("company")} /> <br />
                        <input className='mb-5 w-80' placeholder='title' type="text" {...register("title")} /> <br />
                        <input className='mb-5 w-80' placeholder='groupId' type="text" {...register("groupId")} /> <br />
                        <input className='mb-5 w-80' placeholder='Photo URL' type="text" {...register("photo")} /> <br />
                        <input className='btn px-14 text-white' type="submit" value="Add contact" />
                    </form>
                </div>
                <div>
                    <img className='mt-14 w-96' src="https://i.ibb.co/jg8Jq4j/business-application-addmale-useradd-insert-add-user-client-2312.png" alt="add-icon" />
                </div>
            </div>
        </div>
    );
};

export default AddContact;