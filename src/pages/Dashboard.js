import LineChart from '../components/LineChart'

const Dashboard = () => {
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
        <>
            <div className="text-lg pl-4 pt-8 font-bold">대시보드</div>
            <div className="flex flex-wrap">
                <div className="min-w-[450px] w-1/2 h-[450px]">
                    <LineChart data={datatmp} />
                </div>
                <div className="min-w-[450px] w-1/2 h-[450px]">
                    <LineChart data={datatmp} />
                </div>
            </div>
        </>
    )
}

export default Dashboard;