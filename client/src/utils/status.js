export const getStatus = (code) => {
    switch (code) {
        case 'inProgress':
            return 'Запись создана'
        case 'awaitPayment':
            return 'Ожидает оплаты'
        case 'complete':
            return 'Прием окончен'
        default:
            return 'Отклонено'
    }
}