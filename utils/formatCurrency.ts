export function formatCurrency(nominal: number): string {
    return new Intl.NumberFormat('ID', { style: 'currency', currency: 'IDR' }).format(nominal)
}