
import React from 'react';
import { useForm } from "react-hook-form";
import wildlife from "../../assets/wildlife.svg";



function LoginForm(){

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = ( data:any) => console.log(data);


    return(
            <div className="flex wrapper w-loginWidth h-loginHeight mx-auto my-16">
                
                <div className="w-1/2 bg-loginOrange rounded-l-lg overflow-hidden">
                    <img src={wildlife}></img>
                </div>
                
                <div className="w-1/2 bg-loginBG rounded-r-lg" >
                    <h2 className="text-loginHeader text-4xl text-center font-bold mt-10 mb-3">Login</h2>

                    <form action="" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group flex flex-col ml-auto mr-auto mb-3 mt-2">
                            <label htmlFor="email" className="text-blue mb-2">Email Address:</label>
                            
                            <input 
                            {...register("email", { 
                                required: 'Email is required', 
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter a valid email',
                                }, 
                            })} 
                            type="email" 
                            name="username" 
                            className="bg-white border border-solid border-blue rounded w-96 h-inputHeight text-blue py-2 px-2" 
                            required
                            />

                            {errors.email?.type === 'required' && <span className=" text-red-500"> This field is required</span>}
                            {errors.email?.type === 'pattern' && <span className="text-red-500"> Invalid email</span>}

                        </div>

                        <div className="form-group flex flex-col ml-auto mr-auto mb-3 mt-1">

                            <label 
                                htmlFor="password" 
                                className="text-blue mb-2">Password: </label>
                                
                            <input 
                                {...register("password", { 
                                    required: true 
                                    })} 
                                type="password" 
                                name="password" 
                                className="bg-white border border-solid border-blue rounded w-96 h-inputHeight text-blue py-2 px-2"
                                required
                                />

                            {errors.password?.type === 'required' && <span className=" text-red-500"> This field is required</span>}
                        
                        </div>

                        
                        {/* <input type="submit" value="Login" className="bg-blue px-2 py-2 w-28 font-medium rounded" /> */}
                        <button type="submit" className="bg-blue mt-4 mb-3 px-2 py-2 w-72 font-medium rounded drop-shadow-dropBlue ml-auto mr-auto">Login</button>
                    </form>

                    <p className="text-blue drop text-center mt-2 mb-3">Forgot Password? <strong>Reset here.</strong></p>

                </div>
            </div>
    )
}

export default LoginForm;
