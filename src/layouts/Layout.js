import Sidebar from './Sidebar';
import Content from './Content';

const Layout = ({ children }) => {
    console.log(children);

    return (
        <div className="w-full flex bg-gray-100">
            <Sidebar />
            <Content>
                {children}
            </Content>
        </div>
    )
}

export default Layout;