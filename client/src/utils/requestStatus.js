export const getRequestStatus = (code) => {
    switch (code) {
        case 'inProgress':
            return 'Заявка отправлена'
        case 'callback':
            return 'Не дозвонились'
        case 'complete':
            return 'Записались на прием'
        default:
            return 'Отказались'
    }
}