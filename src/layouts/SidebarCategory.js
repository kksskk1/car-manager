import useSidebarStore from '../stores/useSidebarStore';
import { Link } from 'react-router-dom';

const SidebarCategory = ({ categoryItem }) => {
    const title = categoryItem.title;
    const categoryIndex = categoryItem.id;
    const { selectedColor, isSelectedCategory, setSelectedInfo } = useSidebarStore();
    const className = 'mt-1.5 p-4 rounded-lg ' + (isSelectedCategory(categoryIndex, null) ? selectedColor : '');

    const selectedInfo = {
        selectedIndex: categoryIndex,
        selectedIndexGroupOptionIndex: null,
        selectedTitle: title,
    }

    return (
        <Link to={categoryItem.link}><div onClick={() => { setSelectedInfo(selectedInfo) }} className={className}>{title}</div></Link>
    )
}

export default SidebarCategory;