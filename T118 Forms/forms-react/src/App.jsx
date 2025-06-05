import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();


  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    await delay(2) // newtork delay stimulating
    console.log(data)
  }
  

  return (
    <>
    {isSubmitting && <div>Ruko Zara Sabr karo....</div>}  
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username", {required: {value: true, message: "This field is required"}, minLength: {value:3, message: "Username should be atleast 3 words"}, maxLength: {value:12, message: "Username should not exceed 12 words"}})} type='text' placeholder='username' />
          {errors.username && <div className='username-validation'>{errors.username.message}</div>}
          <br />
          <input {...register("password", {required: {value:true, message: "This field is required"}})} type='password' placeholder='password' />
          {errors.password && <div className='password-validation'>{errors.password.message}</div>}
          <input type='submit' value="Submit" disabled={isSubmitting}/>
        </form>
      </div>
    </>
  )
}

export default App
