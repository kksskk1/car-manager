import Header from './Header';
import Footer from './Footer';
import useSidebarStore from '../stores/useSidebarStore';

const Content = ({ children }) => {
    const { selectedInfo } = useSidebarStore();
    const selectedTitle = selectedInfo.selectedTitle;

    return (
        <div className="w-full min-h-screen p-4 flex flex-col">
            <Header />
            <main className="grow">
                <div className="text-lg pl-4 pt-8 font-bold">{selectedTitle}</div>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Content;