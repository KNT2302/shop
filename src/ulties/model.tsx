export interface Product{
  id: number,
  name: string,
  image: string[],
  price:number,
  discount?:number,
  type:string,
  sizes?: string[]
}

export interface CartItem {
  product: Product,
  quantity: number,
  size:string
}
