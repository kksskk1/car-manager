import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(true);

    // 사이드메뉴 전체 열기 닫기
    const toggleSideMenu = () => {
        setIsOpenSideMenu(isOpenSideMenu => !isOpenSideMenu);
    }

    return (
        <>
            <div>
                {/* 사이드바 열림/접힘 */}
                <span onClick={toggleSideMenu}><CiMenuBurger className="size-8" /></span>
            </div>
            <div className="flex items-center">
                {/* 비로그인 */}
                <span className="border-solid border border-sky-600 py-2 px-4 rounded-lg bg-white">로그인</span>
                <span className="border-solid border border-sky-600 py-2 px-4 rounded-lg ml-4 bg-white">회원가입</span>

                {/* 로그인 */}
                {/* <HiOutlineBellAlert className="size-8 ml-4" />
                        <div className="bg-white border-solid border border-sky-600 py-2 px-4 flex items-center rounded-lg ml-4">
                            <img className="rounded-full" src={defaultProfile} width="40" height="40" />
                            <span className="ml-4">123가4567</span>
                        </div> */}
            </div>
        </>
    )
}

export default Header;