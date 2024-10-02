import { create } from 'zustand';

const useSidebarStore = create((set, get) => ({
    // 카테고리 색상 클래스
    selectedColor: 'bg-sky-600',

    // 카테고리 선택 정보
    selectedInfo: {
        selectedIndex: 0,
        selectedGroupOptionIndex: 0,
        selectedTitle: '',
    },

    setSelectedInfo: ({ selectedIndex, selectedGroupOptionIndex, selectedTitle }) => {
        set({
            selectedInfo: {
                selectedIndex: selectedIndex,
                selectedGroupOptionIndex: selectedGroupOptionIndex,
                selectedTitle: selectedTitle,
            }
        });
    },

    // 그룹 카테고리 열림, 닫힘 여부 
    isOpenedGroupIndex: null,
    setIsOpenedGroupIndex: (index) => { 
        if(index === get().isOpenedGroupIndex) {
            index = null;
        }
        set({ isOpenedGroupIndex: index }); 
    },

    // 선택한 카테고리인지 체크
    isSelectedCategory: (index, optionIndex) => {
        const selectedInfo = get().selectedInfo;
        if (selectedInfo.selectedIndex == index
            && selectedInfo.selectedGroupOptionIndex == optionIndex) {
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