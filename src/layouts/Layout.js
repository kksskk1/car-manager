import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import useSidebarStore from "../stores/useSidebarStore";

const Layout = (props) => {
    const {isOpenSidebar} = useSidebarStore();

    return (
        <div className="w-full flex bg-gray-100">
            <aside className={'w-80 h-screen py-4 pl-4 text-white ' + (isOpenSidebar ? '' : 'hidden')}>
                <Sidebar />
            </aside>
            <div className="w-full min-h-screen p-4 flex flex-col">
                <header className="flex justify-between px-4">
                    <Header />/
                </header>
                <main className="grow">
                    {props.children}
                </main>
                <footer className="text-xs">
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default Layout;