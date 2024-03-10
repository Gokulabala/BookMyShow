import {Form} from "antd"
import Button from "../../components/Button"
import {Link} from 'react-router-dom'


const Login = ()=>{
    return(
        <div className="flex justify-center h-screen items-center bg-primary">
            <div className="card p-3 w-400">
                <h1 className="text-xl mb-1">Welcome Again! Please Login</h1>
                <hr/>
                <Form layout="vertical" className="mt-1" >
                    <Form.Item label='email' name='email' rules={[{required:true, message:"Please enter your email"}]}>
                        <input type="email" />

                    </Form.Item>
                    <Form.Item label='password' name='password' rules={[{required:true, message:"Please enter your password"}]}>
                        <input type="password" />

                    </Form.Item>
                    <div className="flex flex-col mt-2 gap-1" >
                        <Button fullWidth title='LOGIN' type="submit" />
                         <Link to="/Login" className="text-primary">
                            {" "}
                            Don't have an account? Register
                         </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login