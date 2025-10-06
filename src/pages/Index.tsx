
import React, { useRef } from "react";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Offerings from '@/components/Offerings';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';

const Index = () => {
    const servicesRef = useRef<HTMLDivElement>(null);

    return (
        <div className="bg-tech-dark min-h-screen">
            <Navbar/>
            <Hero scrollToServices={() => {
                servicesRef.current?.scrollIntoView({behavior: "smooth"});
            }}/>
            <div ref={servicesRef}>
                <Offerings/>
            </div>

            <WhyChooseUs/>
                <Footer/>
            </div>
            );
            };

export default Index;
