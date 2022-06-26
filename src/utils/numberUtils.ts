const LOCALE = 'pt-BR';
const CURRENCY = 'BRL';

export const formatNumber = (
    value: number | string | null,
    isCurrency: boolean,
) => {
    const numberStyle = isCurrency ? 'currency' : 'decimal';
    const val = Number(value)
    return Intl.NumberFormat(LOCALE, {
        style: numberStyle,
        currency: CURRENCY,
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    }).format(val)
}