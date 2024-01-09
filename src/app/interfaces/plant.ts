export interface plantResponse {
  count: number
  next: string
  previous: any
  results: Result[]
}

export interface Result {
  address: string
  country: string
  division: string
  id: number
  name: string
}

export interface Plant {
  address: string
  city: string
  country: string
  default_language: string
  description: string
  division: string
  id: number
  manager: string
  name: string
  phone: string
}
