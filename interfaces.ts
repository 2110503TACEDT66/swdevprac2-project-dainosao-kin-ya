export interface ReservationItem {
    carId: string,
    carModel: string,
    numOfDays: number,
    pickupDate: string,
    pickupLocation: string,
    returnDate: string,
    returnLocation: string
}

export interface Hotel {
    name: String,
    address: String,
    district: String,
    province: String,
    postalcode: String,
    tel: String,
    region: String,
    picture: String
}