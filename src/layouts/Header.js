import Button from "../components/Button";
import Icon from "../components/Icon";
import Profile from "../components/Profile";
import useSidebarStore from "../stores/useSidebarStore";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
    const { isOpenSidebar, setIsOpenSidebar } = useSidebarStore();

    // 사이드메뉴 전체 열기 닫기
    const toggleSidebar = () => {
        setIsOpenSidebar(!isOpenSidebar);
    }

    return (
        <>
            <div>
                {/* 사이드바 열림/접힘 */}
                <span onClick={toggleSidebar}>
                    <Icon icon={CiMenuBurger} size="2rem" />
                </span>
            </div>
            
            <div className="flex items-center">
                {/* 비로그인 */}
                <Button title="로그인" />
                <Button title="회원가입" addClass="ml-4" />

                {/* 로그인 */}
                <Icon icon={HiOutlineBellAlert} size="2rem" addClass="ml-4" />
                <Button title={Profile} addClass="ml-4" />
            </div>
        </>
    )
}

export default Header;