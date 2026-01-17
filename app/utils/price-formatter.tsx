const priceFormatter = (price: number) => {
    const newFormat = Intl.NumberFormat('id-ID', {
        currency: 'IDR',
        style: 'currency',
        maximumSignificantDigits: 3
    }).format(price)
    return newFormat;
}
export default priceFormatter;