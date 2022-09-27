export interface CategoryTypes {
    _id: string;
    name: string,
    __v: number
}
export interface GameItemTypes {
    _id: string;
    tatus: string;
    name: string;
    thumbnail: string;
    category: CategoryTypes
}

export interface banksTypes {
    _id: string,
    name: string,
    bankName: string,
    noRekening: string
}
export interface PaymentTypes {
    _id: string,
    type: string,
    status: string,
    banks: banksTypes[]

}

export interface NominalTypes {
    _id: string,
    coinQuantity: number,
    coinName: string,
    price: number
}

export interface loginTypes {
    email: string,
    password: string
}

export interface UserTypes {
    avatar: string,
    email: string,
    id: string,
    name: string,
    username: string
}

export interface JwtPayloadTypes {
    player: UserTypes,
    iat: number
}

export interface CheckoutTypes {
    vouchers: string;
    nominal: string;
    payment: string;
    bank: string;
    name: string;
    accountUser: string;
}

export interface HistoryVoucherTopupTypes {
    gameName: string,
    category: string,
    coinQuantity: string,
    coinName: string,
    price: number,
    thumbnail: string
}
export interface HistoryPamentTypes {
    bankName: string,
    name: string,
    type: string,
    noRekening: string
}
export interface HistoryTransactionTypes {
    _id: string,
    status: string,
    historyVoucherTopup: HistoryVoucherTopupTypes,
    value: number,
    accountUser: string,
    tax: number,
    name: string,
    historyPayment: HistoryPamentTypes

}

export interface TopupCategoriesTypes {
    _id: string;
    name: string,
    value: number
}