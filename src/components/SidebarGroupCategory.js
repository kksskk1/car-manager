import useSidebarStore from '../stores/useSidebarStore';

const SidebarGroupCategory = ({ categoryIndex, categoryItem }) => {    
    const title = categoryItem.title;
    const options = categoryItem.options;
    const { selectedColor, isSelectedCategory, selectedCategory, isOpenedGroupIndex, setIsOpenedGroupIndex } = useSidebarStore();

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
                    return <li key={optionItem.id} onClick={() => {selectedCategory(categoryIndex, optionIndex)}} className={liClassName}>{optionItem.title}</li>;
                })}
            </ul>
        </div>
    )
}

export default SidebarGroupCategory;