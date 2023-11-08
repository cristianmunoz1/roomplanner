import Footer from '../components/footer/FooterComponent';
import Header from '../components/header/HeaderComponent';
import SignUpComponent from '../components/sing-up/SignUpComponent';

const signup = () => {
    return (
        <div>

            <main className=''>

                
                <Header title="ROOMPLANNER" />
                <SignUpComponent />
                <Footer
                    title="Roomplanner"
                    description="Hotel Cinco estrellas, Medellin, Antioquia "
                />
            </main>
        </div>

    );
};

export default signup;