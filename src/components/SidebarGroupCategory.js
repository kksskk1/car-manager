import useSidebarStore from '../stores/useSidebarStore';
import { Link } from 'react-router-dom';

const SidebarGroupCategory = ({ categoryItem }) => {
    const title = categoryItem.title;
    const categoryIndex = categoryItem.id;
    const options = categoryItem.options;
    const { selectedColor, isSelectedCategory, setSelectedInfo, isOpenedGroupIndex, setIsOpenedGroupIndex } = useSidebarStore();

    // 그룹 메뉴 열림 닫힘 여부
    const isOpenSideGroupMenu = (index) => {
        return isOpenedGroupIndex == index;
    }

    return (
        <div>
            <div onClick={() => setIsOpenedGroupIndex(categoryIndex)} className="mt-1.5 p-4 rounded-lg flex justify-between">
                <div>{title}</div>
                <div>{isOpenSideGroupMenu(categoryIndex) ? '▲' : '▼'}</div>
            </div>
            <ul className={isOpenSideGroupMenu(categoryIndex) ? '' : 'hidden'}>
                {options.map((optionItem, optionIndex) => {
                    const liClassName = 'mt-1 p-2 rounded-lg ' + (isSelectedCategory(categoryIndex, optionIndex) ? selectedColor : '');
                    const selectedInfo = {
                        selectedIndex: categoryIndex,
                        selectedGroupOptionIndex: optionIndex,
                        selectedTitle: title + ' > ' + optionItem.title,
                    }
                    return <Link to={optionItem.link} key={optionItem.id}><li onClick={() => { setSelectedInfo(selectedInfo) }} className={liClassName}>{optionItem.title}</li></Link>;
                })}
            </ul>
        </div>
    )
}

export default SidebarGroupCategory;