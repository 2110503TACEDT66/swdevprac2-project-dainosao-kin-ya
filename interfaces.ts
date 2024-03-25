export interface ReservationItem {
    hotelId: string,
    revDate: string,
    nightNum: number,
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