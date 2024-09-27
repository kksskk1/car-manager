import Header from './Header';
import Footer from './Footer';

const Content = ({ children }) => {
    return (
        <div className="w-full min-h-screen p-4 flex flex-col">
            <Header />
            <main className="grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Content;