import { HiOutlineBellAlert } from "react-icons/hi2";
import { CiMenuBurger } from "react-icons/ci";
import defaultProfile from './images/default_profile.png';
import { useState } from "react";
import { ResponsiveLine } from '@nivo/line'


const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 100, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'month',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'fuel',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        colors={{ scheme: 'dark2' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)


function App() {

    const [isOpenSideMenu, setIsOpenSideMenu] = useState(true);
    const [openList, setOpenList] = useState([]);

    // 사이드메뉴 전체 열기 닫기
    const toggleSideMenu = () => {
        setIsOpenSideMenu(isOpenSideMenu => !isOpenSideMenu);
    }

    // 그룹 메뉴 열기 닫기
    const toggleSideGroupMenu = (groupNumber) => {
        if (isOpenSideGroupMenu(groupNumber)) {
            openList.splice(openList.indexOf(groupNumber), 1);
            setOpenList([...openList]);
        } else {
            setOpenList((openList) => [...openList, groupNumber]);
        }
    }

    // 그룹 메뉴 열림 닫힘 여부
    const isOpenSideGroupMenu = (groupNumber) => {
        return openList.indexOf(groupNumber) > -1;
    }

    // 차트 임시 데이터
    const datatmp = [
        {
            "id": "2024년",
            "color": "hsl(151, 70%, 50%)",
            "data": [
                {
                    "x": "1월",
                    "y": 10.3
                },
                {
                    "x": "2월",
                    "y": 9.3
                },
                {
                    "x": "3월",
                    "y": 11.3
                },
                {
                    "x": "4월",
                    "y": 15.3
                },
                {
                    "x": "5월",
                    "y": 16.3
                },
                {
                    "x": "6월",
                    "y": 14.3
                },
                {
                    "x": "7월",
                    "y": 18.3
                }, {
                    "x": "8월",
                    "y": 17.3
                }, {
                    "x": "9월",
                    "y": 17.8
                }, {
                    "x": "10월",
                    "y": 17.6
                }, {
                    "x": "11월",
                    "y": 12.3
                }, {
                    "x": "12월",
                    "y": 8.3
                },
            ]
        },
        {
            "id": "2023년",
            "color": "hsl(10, 70%, 50%)",
            "data": [
                {
                    "x": "1월",
                    "y": 11.3
                },
                {
                    "x": "2월",
                    "y": 10.3
                },
                {
                    "x": "3월",
                    "y": 12.3
                },
                {
                    "x": "4월",
                    "y": 16.3
                },
                {
                    "x": "5월",
                    "y": 17.3
                },
                {
                    "x": "6월",
                    "y": 15.3
                },
                {
                    "x": "7월",
                    "y": 19.3
                }, {
                    "x": "8월",
                    "y": 18.3
                }, {
                    "x": "9월",
                    "y": 18.8
                }, {
                    "x": "10월",
                    "y": 18.6
                }, {
                    "x": "11월",
                    "y": 13.3
                }, {
                    "x": "12월",
                    "y": 9.3
                },
            ]
        }
    ];

    return (
        <div className="w-full flex bg-gray-100">
            <aside className={'w-80 h-screen py-4 pl-4 text-white ' + (isOpenSideMenu ? '' : 'hidden')}>
                <div className="bg-gray-600 pl-4 pr-px rounded-lg h-full flex flex-col">
                    <div className="pb-8 pt-4 pr-4 flex items-center">
                        <img className="rounded-full" src={defaultProfile} width="40" height="40" />
                        <span className="ml-4">123가4567</span>
                    </div>

                    <div className="pb-4 pr-4 flex flex-col overflow-y-auto">
                        {/* 그룹 카테고리 */}
                        <div>
                            <div onClick={() => toggleSideGroupMenu(1)} className="mt-1.5 p-4 rounded-lg flex justify-between">
                                <div>그룹1</div>
                                <div>{isOpenSideGroupMenu(1) ? '▲' : '▼'}</div>
                            </div>
                            <ul className={isOpenSideGroupMenu(1) ? '' : 'hidden'}>
                                <li className="mt-1 p-2 bg-sky-600 rounded-lg">카테고리1</li>
                                <li className="mt-1 p-2 rounded-lg">카테고리1</li>
                                <li className="mt-1 p-2 rounded-lg">카테고리1</li>
                                <li className="mt-1 p-2 rounded-lg">카테고리1</li>
                            </ul>
                        </div>

                        <div>
                            <div onClick={() => toggleSideGroupMenu(2)} className="mt-1.5 p-4 rounded-lg flex justify-between">
                                <div>그룹2</div>
                                <div>{isOpenSideGroupMenu(2) ? '▲' : '▼'}</div>
                            </div>
                            <ul className={isOpenSideGroupMenu(2) ? '' : 'hidden'}>
                                <li className="mt-1 p-2 bg-sky-600 rounded-lg">카테고리2</li>
                                <li className="mt-1 p-2 rounded-lg">카테고리2</li>
                                <li className="mt-1 p-2 rounded-lg">카테고리2</li>
                                <li className="mt-1 p-2 rounded-lg">카테고리2</li>
                            </ul>
                        </div>

                        {/* 일반 카테고리 */}
                        <ul>
                            <li className="mt-1.5 p-4 bg-sky-600 rounded-lg">대시보드</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                            <li className="mt-1.5 p-4 rounded-lg">카테고리1</li>
                        </ul>
                    </div>
                </div>
            </aside>

            <div className="w-full min-h-screen p-4 flex flex-col">
                <header className="flex justify-between px-4">
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
                </header>

                <main className="grow">
                    <div className="text-lg pl-4 pt-8 font-bold">대시보드</div>
                    <div className="flex flex-wrap">
                        <div className="min-w-[450px] w-1/2 h-[450px]">
                            <MyResponsiveLine data={datatmp} />
                        </div>
                        <div className="min-w-[450px] w-1/2 h-[450px]">
                            <MyResponsiveLine data={datatmp} />
                        </div>
                    </div>
                </main>

                <footer className="text-xs">
                    Copyright 2014. (KSK) all rights reserved.
                </footer>
            </div>
        </div>
    );
}

export default App;