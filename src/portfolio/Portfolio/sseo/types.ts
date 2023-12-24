export enum Player {
  One = 'ONE',
  Two = 'TWO',
  Three = 'THREE',
  Four = 'FOUR',
}

export enum BallType {
  Solid = 'SOLID',
  Stripe = 'STRIPE',
  Even = 'EVEN',
  Odd = 'ODD',
}

export type BallStatus = 'table' | 'queued' | 'sunk'

export type Balls = Record<number, BallStatus>

export type Roles = {
  [key in Player]: BallType[]
}

export enum BallTypeCombo {
  SolidEven = 'SOLID_EVEN',
  SolidOdd = 'SOLID_ODD',
  StripeEven = 'STRIPE_EVEN',
  StripeOdd = 'STRIPE_ODD',
}

export interface Shot {
  player: Player
  balls: number[]
  roles: Roles
  rankings: { [key in Player]?: number }
  lost: boolean
}

export interface GameState {
  names: { [key in Player]: string }
  balls: Balls
  shots: Shot[]
  roles: Roles
  rankings: { [key in Player]?: number }
}
