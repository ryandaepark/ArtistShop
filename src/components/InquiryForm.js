import React, { useState } from 'react'
import ReactQuill from 'react-quill/'
import 'react-quill/dist/quill.snow.css'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxl};
text-transform: capitalize;
display: flex;
border-bottom: 2px solid #73AD21;
`

const Container = styled.div`
width: 80%;
margin: 0 auto;
border-radius: 25px;
border: 2px solid #73AD21;
`

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ]
};

const formats = [
'header',
'bold', 'italic', 'underline', 'strike', 'blockquote',
'list', 'bullet', 'indent',
'link', 'image'
];

const CreatePost = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  //String manipulation to get parent page name
  const url = location.pathname;
  const urlParts = url.split('/');
  const postType = urlParts[urlParts.length - 2];

  async function createNewPost(ev) {
    const data = new FormData();
    data.set('name', name);
    data.set('email', email);
    data.set('content', content);
    data.set('type', postType);

    // ev.preventDefault();
    // const response = await fetch('http://localhost:4000/post', {
    //   method:'POST', 
    //   body: data,
    //   credentials: 'include', 
    // });

    // if (response.ok) {
    //   navigate(-1);
    // }
  }

  return (    
    <>
      <Container>
        <form class="h-auto flex flex-col justify-top gap-5 p-10" onSubmit={createNewPost}>
            <Title> Inquiry Form </Title>
            <input 
              type="name" 
              class="border h-8" 
              placeholder={'Name'} 
              value={name} 
              onChange={ev => setName(ev.target.value)}
            />
            <input 
              type="email" 
              class="border h-8" 
              placeholder={'Email'}
              value={email}
              onChange={ev => setEmail(ev.target.value)}
            />

            <ReactQuill 
              modules={modules} 
              formats={formats} 
              value={content} 
              placeholder={'Type your request here'} 
              onChange={newValue => setContent(newValue)}
            />
                        
            <button class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded mt-10 "> 
              Send
            </button>
        </form>
      </Container>
    </>
  )
}

export default CreatePost