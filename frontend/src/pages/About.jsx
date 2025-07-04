import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='txt-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md: w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita officiis velit explicabo alias accusamus asperiores dolore sapiente voluptas, beatae, eius, vel voluptates consectetur accusantium. Quasi ducimus ratione molestiae soluta eaque.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex modi perspiciatis sapiente totam sit veritatis assumenda, perferendis dolor excepturi inventore id doloremque nam commodi illum! Expedita fugit ducimus aperiam a?</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aspernatur obcaecati quasi, necessitatibus nisi quidem molestiae totam officiis quia corrupti ad eveniet alias adipisci nam, architecto sit at exercitationem laborum.</p>
            </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance</b>
                <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident neque ut, unde veniam animi eveniet expedita! Quia placeat veniam fuga minima illum architecto aut facilis deleniti perspiciatis accusantium, error eius.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience</b>
                <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident neque ut, unde veniam animi eveniet expedita! Quia placeat veniam fuga minima illum architecto aut facilis deleniti perspiciatis accusantium, error eius.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quis! Beatae similique earum dolor esse voluptate quos veritatis. Doloremque voluptatum odit aut accusantium numquam iusto dolorum commodi. Aut, adipisci porro.</p>
            </div>
      </div>
      <NewsLetterBox/>
    </div>
    
  )
}

export default About
