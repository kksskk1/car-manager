export const getOrSetLocalStorageItem = (key, defualtValue) => {
    let item = getLocalStorageItem(key);
    console.log(item);

    if (!item) {
        setLocalStorageItem(key, defualtValue);
    }
    return getLocalStorageItem(key);
}

export const getLocalStorageItem = (key) => {
    let item = localStorage.getItem(key);
    
    if (isValidJSON(item)) {
        return JSON.parse(item);
    } else {
        return item;
    }
}

export const setLocalStorageItem = (key, value) => {
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }

    localStorage.setItem(key, value);
}


function isValidJSON(str) {
    if (typeof str !== 'string') {
        return false; // 문자열이 아닌 경우 false 반환
    }

    try {
        JSON.parse(str); // JSON 파싱 시도
        return true; // 파싱 성공 시 true 반환
    } catch (error) {
        return false; // 파싱 오류 발생 시 false 반환
    }
}