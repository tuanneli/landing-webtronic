import Head from 'next/head'
import {Inter} from '@next/font/google'
import styles from '../styles/Home.module.scss'
import FrontendDeveloper from "../components/main/FrontendDeveloper/FrontendDeveloper";
import AboutUs from "../components/main/AboutUs/AboutUs";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import ContactUs from "../components/main/ContactUs/ContactUs";
import FrequentlyAskedQuestions from "../components/main/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import ProgrammingTechnologies from "../components/main/ProgrammingTechnologies/ProgrammingTechnologies";
import Steps from "../components/main/Steps/Steps";
import Review from "../components/main/Review/Review";
import Gallery from "../components/main/Gallery/Gallery";
import Image from "next/image";
import bg from '../assets/images/bg.svg'
import bg_image from '../assets/images/bg-image.png';
import ToTop from "../components/additional/ToTop";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className={styles.header}>
                <Navbar/>
            </header>

            <main className={styles.main}>
                <Image className={styles.background_image} src={bg} alt={'background'}/>
                <Image className={styles.bg_image} src={bg_image} alt={"bg-image"}/>
                <FrontendDeveloper/>
                <AboutUs/>
                <ProgrammingTechnologies/>
                <Steps/>
                <FrequentlyAskedQuestions/>
                <Review/>
                <Gallery/>
                <ContactUs/>
                <ToTop/>
            </main>

            <footer className={styles.footer}>
                <Footer/>
            </footer>
        </>
    )
}
