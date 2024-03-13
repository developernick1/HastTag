import './styles/Home.css'
import Image from 'next/image'
import UserOne from './Images/UserOne.jpg'


function TestimonialCard() {

    return (
        <div className='TestimonialCardWrapperWrapper' >
            <Image src={UserOne} width={150} height={150} style={{ borderRadius: 10000 }} alt="Picture of the camera" />
            <h5 className='NameStyling' >Name, Place</h5>
            <p className='NameStyling' >Great to use this Platform</p>
        </div>
    )
}

export default TestimonialCard

