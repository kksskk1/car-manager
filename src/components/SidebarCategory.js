import useSidebarStore from '../stores/useSidebarStore';

const SidebarCategory = ({ categoryIndex, categoryItem }) => {
    const title = categoryItem.title;
    const {selectedColor, isSelectedCategory, selectedCategory} = useSidebarStore();
    const className = 'mt-1.5 p-4 rounded-lg ' + (isSelectedCategory(categoryIndex, null) ? selectedColor : '');

    return (
        <ul>
            <li onClick={() => {selectedCategory(categoryIndex, null)}} className={className}>{title}</li>
        </ul>
    )
}

export default SidebarCategory;