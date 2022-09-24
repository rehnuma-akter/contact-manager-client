import React from 'react';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <div
                class="hero min-h-screen"
                style={{
                    backgroundImage: `url("https://i.ibb.co/zVCMm0v/contacting.jpg")`,
                }}
                >
                <div class="hero-overlay bg-opacity-70"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold text-white">Stay Connected.</h1>
                    <p class="mb-5 text-white text-sm">
                        Your scattered contact info finally organized !!! Now you can have a full view of people who matters in one place.
                    </p>
                    </div>
                </div>
            </div>
            {/* what we do  section */}
            <div className='h-screen'>
                <h2 className='text-4xl font-medium text-center mt-3 pt-10'>Why choose us</h2>
                <p className='text-sm text-center'>Put your whole faith in us, we strive to provide the best services ever and make your life easy day by day.</p>
                <div className="grid grid-cols-3 gap-4 pt-14 mx-5">
                    <div class="card w-96 bg-primary text-primary-content">
                        <div class="card-body">
                        <h2 class="card-title">Contact Management</h2>
                        <p>
                                Know what you need to for every contact. We let you categorize contacts by type.
                                Access anyone just within a matter of minutes.
                        </p>
                        </div>
                    </div>
                    <div class="card w-96 bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">Favorites</h2>
                            <p>
                                Have super-important accounts? Star them to make sure you get to connect with them easily.
                            </p>
                        </div>
                    </div>
                    <div class="card w-96 bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">Adjustable</h2>
                            <p>
                                    Add as many people as you want. You also can update them on the go.
                                    Doesn't want to see someone's contact? Just Delete them from the list and your life anytime.
                            </p>
                        </div>
                    </div>
                    <div class="card w-96 bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">Adjustable</h2>
                            <p>
                                    Add as many people as you want. You also can update them on the go.
                                    Doesn't want to see someone's contact? Just Delete them from the list and your life anytime.
                            </p>
                        </div>
                    </div>
                    <div class="card w-96 bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">Adjustable</h2>
                            <p>
                                    Add as many people as you want. You also can update them on the go.
                                    Doesn't want to see someone's contact? Just Delete them from the list and your life anytime.
                            </p>
                        </div>
                    </div>
                    <div class="card w-96 bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">Adjustable</h2>
                            <p>
                                    Add as many people as you want. You also can update them on the go.
                                    Doesn't want to see someone's contact? Just Delete them from the list and your life anytime.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Us Section */}
            <div className='pt-8'>
                <div class="hero min-h-screen bg-accent-focus">
                    <div class="hero-content flex-col lg:flex-row-reverse mx-5">
                        <div class="text-center lg:text-left ml-5">
                            <h1 class="text-4xl font-bold">Feel free to leave a message</h1>
                            <p class="py-6">Do not hesitate to send us any questions, feedbacks or suggestions. We are
                            here to improve as much as possible and provide world class service.</p>
                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" class="input input-bordered" />
                                </div>
                                <label class="label">
                                    <span class="label-text">Any Message</span>
                                </label>
                                <textarea class="textarea textarea-bordered" placeholder="message"></textarea>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary bg-gradient-to-r from-neutral to-accent text-white border-none normal-case rounded-3xl">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;