import useSidebarStore from "../stores/useSidebarStore";
import Profile from '../components/Profile';
import SidebarGroupCategory from '../components/SidebarGroupCategory';
import SidebarCategory from '../components/SidebarCategory';

const Sidebar = () => {
    const { isOpenSidebar } = useSidebarStore();
    const className = 'w-80 h-screen py-4 pl-4 text-white ' + (isOpenSidebar ? '' : 'hidden');
    const category = [
        { 'id': 1, 'type': 'group', 'title': '그룹1', 'options': [{ 'id': 1, 'title': '카테고리1' }, { 'id': 2, 'title': '카테고리2' }] },
        { 'id': 2, 'type': 'group', 'title': '그룹2', 'options': [{ 'id': 1, 'title': '카테고리1' }, { 'id': 2, 'title': '카테고리2' }] },
        { 'id': 3, 'type': 'default', 'title': '대시보드' },
        { 'id': 4, 'type': 'default', 'title': '카테고리2' },
        { 'id': 5, 'type': 'default', 'title': '카테고리3' },
        { 'id': 6, 'type': 'default', 'title': '카테고리4' },
    ];

    return (
        <aside className={className}>
            <div className="bg-gray-600 pl-4 pr-px rounded-lg h-full flex flex-col">
                <div className='pb-8 pt-4'>
                    <Profile />
                </div>

                <div className="pb-4 pr-4 flex flex-col overflow-y-auto">
                    {category.map((categoryItem, categoryIndex) => {
                        let categoryComponent = null;
                        switch (categoryItem.type) {
                            case 'group':
                                categoryComponent = <SidebarGroupCategory key={categoryItem.id} categoryIndex={categoryIndex} categoryItem={categoryItem} />;
                                break;

                            case 'default':
                                categoryComponent = <SidebarCategory key={categoryItem.id} categoryIndex={categoryIndex} categoryItem={categoryItem} />;
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