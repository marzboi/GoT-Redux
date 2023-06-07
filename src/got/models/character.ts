export interface Character {
  id: number;
  name: string;
  family: string;
  age: number;
  alive: boolean;
  warcry: string;
}

export interface Swordsman extends Character {
  weapon: string;
  dexterity: number;
  type: "swordsman";
}

export interface King extends Character {
  reignyears: number;
  type: "king";
}

export interface Kingshand extends Character {
  supports: King | Swordsman;
  type: "kingshand";
}

export interface Squire extends Character {
  supports: Swordsman;
  pelotismo: string;
  type: "squire";
}

export type AllCharacters = Swordsman | King | Kingshand | Squire;
