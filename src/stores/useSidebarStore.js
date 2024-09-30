import { create } from 'zustand';

const useSidebarStore = create((set, get) => ({
    // 카테고리 색상 클래스
    selectedColor: 'bg-sky-600',

    // 그룹 카테고리 
    isOpenedGroupIndex: null,
    setIsOpenedGroupIndex: (index) => {
        if(get().isOpenedGroupIndex == index) {
            index = null;
        }
        set({ isOpenedGroupIndex: index })
    },

    // 선택한 카테고리 인덱스
    isSelectedIndex: 0, // default 카테고리
    isSelectedGroupOptionIndex: null, // group option 카테고리
    selectedCategory: (index, optionIndex) => {
        set({
            isSelectedIndex: index,
            isSelectedGroupOptionIndex: optionIndex
        });
    },

    // 선택한 카테고리인지 체크
    isSelectedCategory: (index, optionIndex) => {
        if (get().isSelectedIndex == index
            && get().isSelectedGroupOptionIndex == optionIndex) {
            return true;
        } else {
            return false;
        }
    },

    // 사이드바 오픈 상태
    isOpenSidebar: true,
    setIsOpenSidebar: (bool) => set({ isOpenSidebar: bool }),
}));

export default useSidebarStore;