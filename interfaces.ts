export interface ReservationItem {
    carId: string,
    carModel: string,
    numOfDays: number,
    pickupDate: string,
    pickupLocation: string,
    returnDate: string,
    returnLocation: string
}

export interface HotelJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HotelItem[]
  }

export interface HotelItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    region: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
}