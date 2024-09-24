import { create } from 'zustand';

const useSidebarStore = create((set) => ({
    // 사이드바 오픈 상태
    isOpenSidebar: true,
    setIsOpenSidebar: (bool) => set({ isOpenSidebar: bool }),

    // 열려있는 그룹 카테고리 넘버 목록
    groupCategoryOpenList: [],
    pushGroupCategoryOpenList: (groupNumber) =>
        set((prev) => ({
            groupCategoryOpenList: [...prev.groupCategoryOpenList, groupNumber],
        })),
    popGroupCategoryOpenList: (groupNumber) =>
        set((prev) => {
            prev.groupCategoryOpenList.splice(prev.groupCategoryOpenList.indexOf(groupNumber), 1);
            return { groupCategoryOpenList: [...prev.groupCategoryOpenList] };
        }),
}));

export default useSidebarStore;