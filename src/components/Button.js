import { isValidElement } from "react";

const Button = ({title, addClass}) => {
    const className = 'border-solid border border-sky-600 py-2 px-4 rounded-lg bg-white';
    const classNameMerge = className + ' ' + (addClass ? addClass : '')

    const renderTitle = () => {
        // title이 React 요소인지 확인
        if (isValidElement(title)) {
            return title; // 유효한 React 요소인 경우
        }

        // title이 함수인지 확인 (컴포넌트인지 체크)
        if (typeof title === 'function') {
            const TitleComponent = title;
            return <TitleComponent />;
        }

        // 일반 문자열인 경우
        return title;
    };

    return (
        <button className={classNameMerge}>
            {renderTitle()}
        </button>
    )
}

export default Button;