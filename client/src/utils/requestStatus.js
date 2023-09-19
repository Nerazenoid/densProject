export const getRequestStatus = (code) => {
    switch (code) {
        case 'inProgress':
            return 'Заявка отправлена'
        case 'callback':
            return 'Просили перезвонить'
        case 'complete':
            return 'Записались на прием'
        default:
            return 'Отказались'
    }
}