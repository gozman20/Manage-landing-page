import React from 'react'
import {CiTwitter,CiYoutube} from 'react-icons/ci'
import {AiOutlineFacebook} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

export default function Main() {
  return (
    <>

    <div>
      <section>
        <div class='container mb-20  mx-auto flex flex-col-reverse px-2  mt-10 space-y-6 md:space-y-0 md:space-x-4   md:flex-row'>
            {/* item 1 */}
            <div class='container mb-20  mt-10  md:items-start items-center flex flex-col  pt-16 space-y-12 md:w-1/2 '>

            <h1 class='max-w-md font-bold text-4xl md:text-6xl text-center md:text-left '>
                Bring everyone together to build better product 
             </h1>
             <p class=' max-w-sm text-sm text-darkgray text-darkGrayishBlue text-center md:text-left'>
             ChatGPT is an artificial intelligence chatbot developed by OpenAI and launched in November 2022. It is built on top of OpenAI's GPT-3.5 and GPT-4 families of large language models and has been fine-tuned using both supervised and reinforcement learning
             </p>
             <div class='text-center md:text-left'>
             <button class='bg-brightRed  hover:bg-brightRedLight text-white p-3  pt-2 px-6 rounded-full'>Get started</button>
             </div>
             
             
            </div>
            {/* item 2 */}
           <div class='md:w-1/2  pt-10 '>
            <img src='https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/illustration-intro.svg'/>
           </div>
        </div>
      </section>
    </div>


<section >
<div class="container flex flex-col px-2 mb-20 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
    {/* whats different */}
<div class=" flex flex-col items-center md:items-start space-y-12 md:w-1/2">
<h2 class="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
</div> 


{/* numberlist  */}
<div class="flex flex-col space-y-8 md:w-1/2 items-center">

{/* list item 1 */}
<item class='md:flex space-x-2'>
<div class='max-w-sm flex space-x-3 md:space-x-0 bg-red-100 md:bg-transparent md:flex-col rounded-full'>
    <div><h4 class='bg-brightRed rounded-full px-2'>01</h4></div>

 <p class='md:hidden'>Track your progress</p>
</div>
       
       
    <div class='space-y-3'>
       <p class='hidden md:block font-bold'>Track your progress</p>
       <p class='max-w-md'>
          Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
        </p>
       </div>
       
 
</item>



{/* item 2 */}
<item2 class='md:flex space-x-2 '>
<div class='max-w-sm  flex space-x-3 md:space-x-0 bg-red-100 md:bg-transparent md:flex-col rounded-full'>
    <div>
        <h4 class='bg-brightRed rounded-full px-2'>
            02
        </h4>
    </div>

 <p class='md:hidden'>This is extremely difficult</p>
</div>
       
       
    <div class='space-y-4'>
       <p class='hidden md:block font-bold'>This is extremely difficult</p>
       <p class='max-w-md'>
          Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
        </p>
       </div>
       
 
</item2>


<item3 class='md:flex space-x-2'>
<div class='max-w-sm flex space-x-3 md:space-x-0 bg-red-100 md:bg-transparent md:flex-col rounded-full'>
    <div><h4 class='bg-brightRed rounded-full px-2'>03</h4></div>

 <p class='md:hidden'>This is extremely difficult</p>
</div>
       
       
    <div class='space-y-4'>
       <p class='hidden md:flex font-bold'>This is extremely difficult</p>
       <p class='max-w-md'>
          Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
        </p>
       </div>
       
 
</item3>

</div>

</div>
</section>



<section>
    <div class='container mx-auto flex flex-col pb-20 md:flex-row md:space-x-8 items-center  '>
        {/* first image */}
    <div class='max-w-sm md:w-1/3 bg-shadow flex flex-col items-center space-y-4 pt-6 pb-6 '>
        <img src='src/images/avatar-ali.png' alt='' class='w-16 -mt-12'/>
        <h4 class='font-bold'>Ali</h4>
        <p class='max-w-sm px-8'>  Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
        </p>
    </div>


    {/* second image */}
    <div class='hidden md:w-1/3 bg-shadow md:flex flex-col items-center space-y-4 pt-6 pb-6 '>
        <img src='src/images/avatar-anisha.png' alt='' class='w-16 -mt-12'/>
        <h4 class='font-bold'>Antisha</h4>
        <p class='max-w-sm px-8'>  Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
        </p>
    </div>


    {/* third imge */}

    <div class='hidden md:w-1/3 bg-shadow md:flex flex-col items-center space-y-4 pt-6 pb-6 '>
        <img src='src/images/avatar-richard.png' alt='' class='w-16 -mt-12'/>
        <h4 class='font-bold'>Richard</h4>
        <p class='max-w-sm px-8'>  Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
        </p>
    </div>

    </div>

    <div class='text-center mb-20'>
             <button class='bg-brightRed  hover:bg-brightRedLight text-white p-3  pt-2 px-6 rounded-full'>Get started</button>
             </div>
</section>

{/* Simplify how yout team works today */}
<section>
    <div class=' flex flex-col space-y-10 md:space-y-0  justify-between items-center bg-brightRed p-24 md:flex-row '>
        <h2 class='font-bold text-4xl text-white max-w-md text-center'>
         Simplify how your team works today
        </h2>
        <div class='text-center'>
             <button class='bg-white border-solid border-2  hover:bg-brightRedLight text-brightRed p-3  pt-2 px-6 rounded-full'>Get started</button>
             </div>
        
    </div>

</section>


{/* Footer section */}
<section class=' bg-slate-900'>
<div class='container m-auto flex flex-col-reverse items-center space-y-12 md:flex-row md:space-y-0 md:space-x-20 py-10 '> 
 {/* Logo and social link container */}
 <div class="flex flex-col-reverse items-center md:space-y-12 md:flex-col  md:items-start">
 <div class="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>

    <div class='w-32 mx-auto '>
<img src='src/images/orange.jfif' />
</div>
    
    <div class='flex'>
       
      < AiOutlineFacebook size={42} class='bg-white'/>
      <CiYoutube size={42} class='bg-white'/>
      < CiTwitter size={42} class='bg-white'/>
      <FaPinterestP size={42} class='bg-white'/>
      <BsInstagram size={42} class='bg-white'/>
    </div>
    </div>

{/* item 2 */}
<div2 class='flex space-x-5 w-1/3 '>
<div class='flex flex-col text-white'>
    
           <a href="#" class="hover:text-brightRed">Home</a>
            <a href="#" class="hover:text-brightRed">Pricing</a>
            <a href="#" class="hover:text-brightRed">Products</a>
            <a href="#" class="hover:text-brightRed">About</a>  
    
</div>


<div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Careers</a>
            <a href="#" class="hover:text-brightRed">Community</a>
            <a href="#" class="hover:text-brightRed">Privacy Policy</a>
</div>
</div2>

{/* form input */}
<div class="flex flex-col space-y-10 ">
          <form>
            <div class="flex space-x-3">
              <input
                type="text"
                class="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div class="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>



</div>
   

</section>

</>
  )
}
