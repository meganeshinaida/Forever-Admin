import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { motion, useAnimation } from "framer-motion";
import { assets } from '../assets/assets';
const Login = ({ setToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('asset')
  // const [imageSrc, setImageSrc] = useState(assets.Banner);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();


  const onSubmitHandler = async (e) => {
    e.preventDefault()
   try {
        const response = await axios.post( `${backendUrl}/auth/login/`, {
            email: email,
            password: password,
        });
        console.log(response.data);
    localStorage.setItem("token", response.data.access);
    setToken(response.data.access);
    toast.success("Login successful!");
    } catch (error) {
        console.error("Login failed:", error.response.data);
    }
  }
  

    useEffect(() => {
    const handleResize = () => {
      const mobileCheck = window.innerWidth <= 768;
      setIsMobile(mobileCheck);
      // setImageSrc(mobileCheck ? "/assets/images/BannerMobile.png" : "/assets/images/Banner.svg");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Animation d'entrée
    controls.start({
      opacity: 1,
      transition: { duration: 1.5 }
    });

    return () => window.removeEventListener("resize", handleResize);
  }, [controls]);

  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={controls}
      style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '70vh' : '100vh',
        overflow: 'hidden',
        // backgroundColor: '#FF8C00',
      }}
    className="min-h-screen flex items-center justify-center w-full ">

        <motion.img 
        src={assets.Banner} 
        alt="Bannière Hero"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 2,
          ease: "easeOut"
        }}
        className='relative'
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      /> 
      <div className='bg-transparent backdrop-blur-2xl shadow-md rounded-lg px-8 py-6 max-w-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-2xl font-bold mb-4 text-white'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler} >
          <div className='mb-3 min-w-72'>
            <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none bg-transparent placeholder-gray-200' type="email" placeholder="Your@email.com" />
          </div>
          <div className='mb-3 min-w-72'>
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none bg-transparent placeholder-gray-200' type='password' />
          </div>
          <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type='submit'>Login</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Login
