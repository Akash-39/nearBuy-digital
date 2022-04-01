import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
 


// all available config props
const config ={
  floating: true,
  enableSmoothScroll:true,
  botAvatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bot_awake.svg/480px-Bot_awake.svg.png"
};

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'serif',
  headerBgColor: 'blue',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  botFontColor: '#fff',
  userBubbleColor: '#FFE384',
  userFontColor: '#4a4a4a',
  
  
};

const steps = [
  {
    id: 'intro',
    message: 'Hey There 😄😄!! How can I help you?😇',
     trigger:2
  },
  {
    id: '2',
   
    options: [
      { value: 1, label: 'Help Me find something good 😋', trigger: 'sg' },
      { value: 2, label: 'NAh!😒 Just looking around', trigger: 'persueade' },
      { value: 3, label: 'Others 🧐', trigger: 'others-1' },
    ],
  },
  {
    id: 'sg',
    message: ' Whick type of laptops do you prefer? 🤔',
    trigger: 'sg2',
  },
  {
    id: 'sg2',
   
    options: [
      { value: 1, label: 'Gaming 💥', trigger: 'Shoenen' },
      { value: 2, label: 'Normal😵', trigger: 'funny' },
      { value: 3, label: 'Macbook 😲', trigger: 'surprise' },
    ],
  },
  {
    id: 'surprise',
    component: (
      <div  style={{color:"black"}} className="div-text"> How about <a style ={{color:"red"}} href="/product/616a72dd04019c3b8867f3be" >  Apple MacBook pro M1</a> </div>
    ),
    trigger: 'wnm2',
  },
  {
    id: 'Shoenen',
    component: (
      <div  style={{color:"black"}} className="div-text"> My recommendations are <a style ={{color:"red"}} href="/product/616a6af0ced2540db4190441" >  ASUS TUF Gaming Laptop</a> or <a style ={{color:"red"}} href="/product/616a6beeced2540db4190453">MSI GF65 Thin Core i7</a>. </div>
    ),
    trigger: 'wnm'
  },

  {
    id: 'funny',
    component: (
      <div  style={{color:"black"}} className="div-text"> My recommendations are <a style ={{color:"red"}} href="/product/616a65f8ced2540db41903ec" >  HP pavilion Ryzen-5</a> or <a style ={{color:"red"}} href="/product/616a693bced2540db419041d">Lenovo Legion 5 Core i7</a>. </div>
    ),
    trigger: 'wnm2'
  },
  {
    id: 'wnm2',
    message: 'Do you need more recommendations? 😉',
    trigger: 'c22',
  },
  {
    id: 'c22',
    options: [
      { value: 1, label: 'Yeah I would prefer more option 😄', trigger: 'funny2' },
      { value: 2, label: 'No. Thanks!😃 ', trigger:'Arigato' },
    ],
  },
  {
    id: 'funny2',
    component: (
      <div> My recommendations are <a style ={{color:"red"}} href="/product/616a699fced2540db4190426">Lenovo Ideapad</a> or <a style ={{color:"red"}} href="/product/616a6815ced2540db419040b">HP 14s Core i5 </a> </div>
    ),
    trigger: 'wnm'
  },
  {
    id: 'wnm',
    message: 'Do you need more recommendations? 😉',
    trigger: 'c22',
  },
  {
    id: 'c2',
    options: [
      { value: 1, label: 'Yeah I would prefer more option 🙃', trigger: 'Shoenen2' },
      { value: 2, label: 'No. Thanks! 😅 ', trigger:'Arigato' },
    ],
  },
  {
    id: 'Arigato',
    message: 'I see🙄 you are a man of culture of culture as well😅 ',
    
    trigger: 'Arigato-2',
  },
  {
    id: 'Arigato-2',
    component: (
      <div>Welcome</div>
    ),
    
    end :true,
  },
  {
    id: 'Shoenen2',
    component: (
      <div> I recommend you <a style ={{color:"red"}} href="/product/616a66f5ced2540db41903f9">Hp pavilion 10-gen i5</a>  </div>
    ),
    trigger: 'wnm'
  },
  {
    id: 'persueade',
    message: 'OK, Have fun ​😁​​😁​ ',
  },
  // {
  //   id: 'p2',
  //   options: [
  //     { value: 1, label: 'No 😬!!', trigger: 'opm' },
  //     { value: 2, label: 'Yeah I love that anime 😋 ', trigger: 'step-2' },
  //   ],
  // },
  // {
  //   id: 'step-2',
  //   message: 'I can sugeest you more animes like that 😋',
  //   trigger: 'step-3',
  // },
  // {
  //   id: 'step-3',
  //   options: [
  //     { value: 1, label: 'Yeah. Please do 😅', trigger: 'Dbzs' },
  //     { value: 2, label: 'I wanna try something new 😑', trigger: 'food' },
  //   ],
  // },
  // {
  //   id: 'Dbzs',
  //   component: (
  //     <div> Here is one. How the protagnist get god-like powers "Dragon Ball Z Super". PS we have it om Blu-Ray   <a href="/product/6085a666438e33313815dd74">Have a look</a> </div>
  //   ),
  //   asMessage: true,
  //   end: true,
  // },
  // {
    // id: 'food',
  //   component: (
  //     <div> How about anime on FOOD "Food Wars!". PS we have it om Blu-Ray   <a href="/product/6085b289c2c5ae17c4aefd66">Have a look</a> </div>
  //   ),
  //   asMessage: true,
  //   end: true,
  // },
  // {
  //   id: 'opm',
  //   component: (
  //     <div> His name is Saitama.He is from "ONE PUNCH MAN". PS we have it om Blu-Ray   <a href="/product/6085a472438e33313815dd72">Have a look</a> </div>
  //   ),
  //   asMessage: true,
  //   end: true,
  // },
  {
    id: 'my orders',
    component: (
      <div> PLease click here  <a href="/profile">Have a look</a> </div>
    ),
    asMessage: true,
    end: true,
  },
  {
    id: 'others-1',
    options: [
      { value: 1, label: 'Edit Profile ✏️', trigger: 'edit profile' },
      { value: 2, label: 'Track My Order 🚚', trigger: 'track order' },
      { value: 3, label: 'About Us 🍦', trigger: 'payment' },
      
    ],
  },
  {
    id: 'payment',
    message: 'You can follow our FB, Insta for more info 👀',
    end:true,
  },
  {
    id: 'track order',
    message: 'All the detail will be sent to you 📝',
    end:true,
  },
  {
    id: 'edit profile',
    component: (
      <div> If Signed In PLease click here  <a href="/profile">Have a look</a> </div>
    ),
    asMessage: true,
    end:true,
  },
];
class Chat extends Component {
   

  render() {
    return (
      <ThemeProvider theme={theme}>
      <ChatBot
      headerTitle="I'm Cera 🤖"
      
      steps={steps} 
      {...config}
    />
    </ThemeProvider>
    );
  }
       
}
export default Chat;