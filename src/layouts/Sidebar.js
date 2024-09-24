import defaultProfile from '../images/default_profile.png';
import { useState } from "react";

const Sidebar = () => {
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(true);
    const [openList, setOpenList] = useState([]);

    // 사이드메뉴 전체 열기 닫기
    const toggleSideMenu = () => {
        setIsOpenSideMenu(isOpenSideMenu => !isOpenSideMenu);
    }

    // 그룹 메뉴 열기 닫기
    const toggleSideGroupMenu = (groupNumber) => {
        if (isOpenSideGroupMenu(groupNumber)) {
            openList.splice(openList.indexOf(groupNumber), 1);
            setOpenList([...openList]);
        } else {
            setOpenList((openList) => [...openList, groupNumber]);
        }
    }

    // 그룹 메뉴 열림 닫힘 여부
    const isOpenSideGroupMenu = (groupNumber) => {
        return openList.indexOf(groupNumber) > -1;
    }

    return (
        <div className="bg-gray-600 pl-4 pr-px rounded-lg h-full flex flex-col">
            <div className="pb-8 pt-4 pr-4 flex items-center">
                <img className="rounded-full" src={defaultProfile} width="40" height="40" />
                <span className="ml-4">123가4567</span>
            </div>

            <div className="pb-4 pr-4 flex flex-col overflow-y-auto">
                {/* 그룹 카테고리 */}
                <div>
                    <div onClick={() => toggleSideGroupMenu(1)} className="mt-1.5 p-4 rounded-lg flex justify-between">
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
                    <div onClick={() => toggleSideGroupMenu(2)} className="mt-1.5 p-4 rounded-lg flex justify-between">
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