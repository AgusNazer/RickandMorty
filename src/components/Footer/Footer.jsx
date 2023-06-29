import {FaLinkedin } from 'react-icons/fa'
import {FaGithub } from 'react-icons/fa'
import styled from 'styled-components';

export const Div = styled.div`

border: 2px solid red:
`;

export const Icons = styled.a`
color: black;
`;

const Footer = () => {
  return (
   <>
    <hr className='lineaHr'/>
    <Div className={' mx-6 pt-3 pb-4'}>
        <div className='flex flex-col justify-center items-center text-center border-t border-gray-300 pt-4 text-gray-600 pt-3'>

            <p>© 2023 Agustin Nazer. All Rights reserved.</p>
            <p>Developed & designed by Agustin Nazer 👨🏽‍💻 </p>

            <div className='flex flex-row justify-center items-center gap-x-2 pt-1'>
                <Icons href='https://github.com/AgusNazer' target='_blank'>
                 <FaGithub/> 
                </Icons>
                <Icons href='https://www.linkedin.com/in/agustínnazer/' target='_blank'>
                <FaLinkedin/>
                    
                </Icons>
            </div>
        </div>
    </Div>
   
</>
    
  )
}

export default Footer