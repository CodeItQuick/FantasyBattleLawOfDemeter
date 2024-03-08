import { Item } from './Item';

enum equipmentSlot {
  leftHand = 'leftHand',
  rightHand = "rightHand",
  head = "head",
  feet = "feet",
  chest = "chest"
};

export class Equipment {

    private _items: {
      [equipmentSlot.leftHand] : number,
      [equipmentSlot.rightHand] : number,
      [equipmentSlot.head] : number,
      [equipmentSlot.feet] : number,
      [equipmentSlot.chest] : number
    } = {
      [equipmentSlot.leftHand] : 0,
      [equipmentSlot.rightHand] : 0,
      [equipmentSlot.head] : 0,
      [equipmentSlot.feet] : 0,
      [equipmentSlot.chest] : 0
    }


    // TODO add a ring item that may be equipped
    // that may also add damage modifier
    public constructor(private _leftHand: Item,
                       private _rightHand: Item,
                       private _head: Item,
                       private _feet: Item,
                       private _chest: Item) { }

    public get leftHand(): Item {
        return this._leftHand;
    }

    public get rightHand(): Item {
        return this._rightHand;
    }

    public get head(): Item {
        return this._head;
    }

    public get feet(): Item {
        return this._feet;
    }

    public get chest(): Item {
        return this._chest;
    }

    calculateEquipmentDamage() {
        return this.leftHand.baseDamage +
            this.rightHand.baseDamage +
            this.head.baseDamage +
            this.feet.baseDamage +
            this.chest.baseDamage;
    }
}
