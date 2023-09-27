export interface Iproducts{
    products:IProduct[];
}
export interface IProduct{
    id:number,
    title:string,
    description:string,
    price:number,
    discountPercentage:number,
    rating:number,
    stock:number,
    brand:string,
    category:string,
    images:any[]
}