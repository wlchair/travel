export const complex = (num = 0, decorate = 'item') => {
    return num > 1 ? decorate + 's' : decorate
}