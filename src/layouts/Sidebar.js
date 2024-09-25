import defaultProfile from '../images/default_profile.png';
import useSidebarStore from '../stores/useSidebarStore';
import Profile from '../components/Profile';

const Sidebar = () => {
    const {groupCategoryOpenList, pushGroupCategoryOpenList, popGroupCategoryOpenList} = useSidebarStore();

    // 그룹 메뉴 열림 닫힘 여부
    const isOpenSideGroupMenu = (groupNumber) => {
        return groupCategoryOpenList.indexOf(groupNumber) > -1;
    }

    // 그룹 메뉴 열기 닫기
    const toggleGroupCategory = (groupNumber) => {
        if (isOpenSideGroupMenu(groupNumber)) {
            popGroupCategoryOpenList(groupNumber);
        } else {
            pushGroupCategoryOpenList(groupNumber);
        }
    }

    return (
        <div className="bg-gray-600 pl-4 pr-px rounded-lg h-full flex flex-col">
            <div className='pb-8 pt-4'>
                <Profile />
            </div>
            
            <div className="pb-4 pr-4 flex flex-col overflow-y-auto">
                {/* 그룹 카테고리 */}
                <div>
                    <div onClick={() => toggleGroupCategory(1)} className="mt-1.5 p-4 rounded-lg flex justify-between">
                        <div>그룹1</div>
                        <div>{isOpenSideGroupMenu(1) ? '▲' : '▼'}</div>
                    </div>
                    <ul className={isOpenSideGroupMenu(1) ? '' : 'hidden'}>
                        <li className="mt-1 p-2 bg-sky-600 rounded-lg">카테고리1</li>
                        <li className="mt-1 p-2 rounded-lg">카테고리1</li>
                        <li className="mt-1 p-2 rounded-lg">카테고리1</li>
                        <li className="mt-1 p-2 rounded-lg">카테고리1</li>
                    </ul>
                </div>

                <div>
                    <div onClick={() => toggleGroupCategory(2)} className="mt-1.5 p-4 rounded-lg flex justify-between">
                        <div>그룹2</div>
                        <div>{isOpenSideGroupMenu(2) ? '▲' : '▼'}</div>
                    </div>
                    <ul className={isOpenSideGroupMenu(2) ? '' : 'hidden'}>
                        <li className="mt-1 p-2 bg-sky-600 rounded-lg">카테고리2</li>
                        <li className="mt-1 p-2 rounded-lg">카테고리2</li>
                        <li className="mt-1 p-2 rounded-lg">카테고리2</li>
                        <li className="mt-1 p-2 rounded-lg">카테고리2</li>
                    </ul>
                </div>

                {/* 일반 카테고리 */}
                <ul>
                    <li className="mt-1.5 p-4 bg-sky-600 rounded-lg">대시보드</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                    <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;