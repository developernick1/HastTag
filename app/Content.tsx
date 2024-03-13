'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import './styles/Home.css'
// import { useClient } from 'next/clients';
import FeatureOne from './Images/FeatureFour.png'
import FeatureTwo from './Images/FeatureTwo.png'
import FeatureThree from './Images/FeatureThree.png'
import Image from 'next/image'
import TestimonialCard from './TestimonailCard'
import { JasonGetAPI } from './api/index'
import axios from 'axios';



function Content() {
    const [Data, setData] = useState({})


    //FOR BETTER UNDERSTANDING 
    //  const APICall = () => {
    //     return axios({
    //         method: 'GET',
    //         url: `https://jsonplaceholder.typicode.com/todos/1`,
    //     })
    //         .then((res) => { return  setData(res?.data) })
    //         .catch((err) => { throw err })
    //  }

    //     useEffect(() => {
    //         APICall()
    //     }, [])

    useEffect(() => {

        JasonGetAPI().then((res) => {
            console.log(res?.data, 'RESPONSE')
            setData(res?.data)
        }).catch(err => { return err; });

    }, [])


    return (
        <div className='contentWrapper' >
            <div className='CTASection' >
                <h1 className='headingStyle' >Get your best customize paragraph without plagiarism</h1>
                <input type="text" name="name" className='inputMain' placeholder='Enter Yourtitle to get Paragraph on the Topic' />
            </div>

            <h3>{Data?.title}</h3>


            <div className='FeatureStyling' >
                <div className='FeatureStlingMain' >
                    <div className='CellWrapper' >
                        <Image src={FeatureOne} width={200} height={150} alt="Picture of the camera" />
                        <h5 className='featureHeadingTextStyle' >Best Growth with Uniqueness</h5>
                        <p className='featureTextStyle' >Here Is your first Para</p>
                    </div>
                    <div className='CellWrapper' >
                        <Image src={FeatureTwo} width={170} height={150} alt="Picture of the camera" />
                        <h5 className='featureHeadingTextStyle' >Verified No plagiarism</h5>
                        <p className='featureTextStyle' >Here Is your Second Para</p>
                    </div>
                    <div className='CellWrapper' >
                        <Image src={FeatureThree} width={170} height={150} alt="Picture of the camera" />
                        <h5 className='featureHeadingTextStyle' >More Engagement</h5>
                        <p className='featureTextStyle' >Here Is your Third Para</p>
                    </div>
                </div>
                <div className='TestCardWrapper' >
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
            </div>
        </div>
    )
}

export default Content;

