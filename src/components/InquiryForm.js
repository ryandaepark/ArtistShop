import React, { useRef, useState} from 'react'
import 'react-quill/dist/quill.snow.css'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxl};
text-transform: capitalize;
display: flex;
`

const Container = styled.div`
width: 70%;
margin: 0 auto;
border-radius: 10px;
display: flex-column;
align-items: center;
justify-content: center;
text-align: center;
box-shadow: 0 0 50px 5px #1976D2;
`

const ConfirmationPost = styled.div`
text-align: center;
font-size: ${(props) => props.theme.fontxl};
width: 70%;
margin: 0 auto;
padding-top: 1rem;
`

const CreatePost = () => {
  const form = useRef();
  const [emailed, setEmailed] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
      console.log(result.text);
      setEmailed(!emailed);
    }, (error) => {
      console.log(error.text);
    });
  };


  return (    
    <>
      <Container>
        {emailed && (
          <>
            <form ref={form} class="h-auto flex flex-col justify-top gap-5 p-10" onSubmit={sendEmail}>
            <Title> Inquiry Form </Title>
            <input 
              type="text" 
              name="user_name" 
              placeholder={'Name'} 
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            />
            <input 
              type="email" 
              name="user_email" 
              placeholder={'Email'}
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            />
            <textarea 
              name="message" 
              placeholder={'Type what type of commision work you would like and a description of the character you would like.'} 
              rows="8"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input 
              type="submit" 
              value="Send" 
              class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded mt-2"
            />
          </form>          
        </>
      )}
      {!emailed && (
        <>
          <ConfirmationPost> Thank you for your request! I will get back to you as soon as possible. </ConfirmationPost>
          <button 
            class="m-3 p-2.5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick = {() => setEmailed(!emailed)}
          > 
            Click here to resubmit commision request.
          </button>
        </>
      )}

      </Container>
    </>
  )
}

export default CreatePost