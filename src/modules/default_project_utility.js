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

export function formatDateForInput(dueDate) {
    return dueDate.toISOString().split('T')[0];
};

export function trim(string) {
    return string.trim();
};

export function easyFormatDate(date) {
    const [year, month, day] = date.split('-');
    return `${month}/${day}/${year}`;
}