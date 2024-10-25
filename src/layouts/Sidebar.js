import useSidebarStore from "../stores/useSidebarStore";
import Profile from '../components/Profile';
import SidebarGroupCategory from './SidebarGroupCategory';
import SidebarCategory from './SidebarCategory';
import { getOrSetLocalStorageItem } from '../utils/localStorageUtils' 

const Sidebar = () => {
    const { isOpenSidebar } = useSidebarStore();
    const className = 'w-80 h-screen py-4 pl-4 text-white ' + (isOpenSidebar ? '' : 'hidden');
    const category = getOrSetLocalStorageItem('category', [
        { 'id': 1, 'type': 'default', 'title': '대시보드', 'link': '/' },
        {
            'id': 2, 'type': 'group', 'title': '관리',
            'options': [
                { 'id': 1, 'title': '관리1', 'link': '/fuel' },
                { 'id': 2, 'title': '관리2', 'link': '/maintain' },
                { 'id': 3, 'title': '관리3', 'link': '/repair' }
            ]
        },
    ]);

    return (
        <aside className={className}>
            <div className="bg-gray-600 pl-4 pr-px rounded-lg h-full flex flex-col">
                <div className='pb-8 pt-4'>
                    <Profile />
                </div>

                <div className="pb-4 pr-4 flex flex-col overflow-y-auto">
                    {category.map((categoryItem) => {
                        let categoryComponent = null;
                        switch (categoryItem.type) {
                            case 'group':
                                categoryComponent = <SidebarGroupCategory key={categoryItem.id} categoryItem={categoryItem} />;
                                break;

                            case 'default':
                                categoryComponent = <SidebarCategory key={categoryItem.id} categoryItem={categoryItem} />;
                                break;
                        }
                        return categoryComponent;
                    })}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;