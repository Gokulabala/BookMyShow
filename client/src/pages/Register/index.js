import React from "react"
import {Form, message} from 'antd'
import { Link } from "react-router-dom"
import Button from "../../components/Button"

const Register =()=>{
    return(
        <div className="flex justify-center h-screen items-center bg-primary">
            <div className="card p-3 w-400">
                <h1 className="text-xl mb-1">Welcome to Scaler Shows! Please Register</h1>
                <hr/>
                <Form layout="vertical" className="mt-1" >
                    <Form.Item label='name' name='name' rules={[{required:true, message:"Please enter your name"}]}>
                        <input type="text" />

                    </Form.Item>
                    <Form.Item label='email' name='email' rules={[{required:true, message:"Please enter your email"}]}>
                        <input type="email" />

                    </Form.Item>
                    <Form.Item label='password' name='password' rules={[{required:true, message:"Please enter your password"}]}>
                        <input type="password" />

                    </Form.Item>
                    <div className="flex flex-col mt-2 gap-1" >
                        <Button fullWidth title='REGISTER' type="submit" />
                         <Link to="/Login" className="text-primary">
                            {" "}
                            Already have an account? Login
                         </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Register