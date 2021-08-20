export interface Customer {
  id: number;
  name: string;
  email: string;
  gender: string;
  avatar: string;
  color: string
}

export interface Products {
  id: number;
  price: number;
  category: string;
  image: string;
  description: string;
  title: string;
}

export interface Colors {
  color: string
}
