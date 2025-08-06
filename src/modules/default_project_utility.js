export function titleCase(string) {
    const newString = string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    return newString;
};

export function lowerCase(string) {
    return string.toLowerCase();
};

export function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export function formatDateForInput(dueDate) {
    return dueDate.toISOString().split('T')[0];
};

export function trim(string) {
    return string.trim();
};

export function easyFormatDate(date) {
    const [year, month, day] = date.split('-');
    return `${month}/${day}/${year}`;
};

export function reverseDate(date) {
    if (date) {
        const year = date.getFullYear();
        let day;
        let month;
        
        if (date.getMonth() < 10) {
            month = `0${date.getMonth() + 1}`;
        } else {
            month = date.getMonth() + 1;
        }

        if (date.getDate() < 10) {
            day = `0${date.getDate()}`;
        } else {
            day = date.getDate();
        }
        
        return`${year}-${month}-${day}`;
    }
    
};