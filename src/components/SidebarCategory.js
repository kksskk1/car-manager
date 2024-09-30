import useSidebarStore from '../stores/useSidebarStore';
import { Link } from 'react-router-dom';

const SidebarCategory = ({ categoryIndex, categoryItem }) => {
    const title = categoryItem.title;
    const {selectedColor, isSelectedCategory, selectedCategory} = useSidebarStore();
    const className = 'mt-1.5 p-4 rounded-lg ' + (isSelectedCategory(categoryIndex, null) ? selectedColor : '');

    return (
        <Link to={categoryItem.link}><div onClick={() => {selectedCategory(categoryIndex, null)}} className={className}>{title}</div></Link>
    )
}

export default SidebarCategory;