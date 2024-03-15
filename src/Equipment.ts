import {Item} from './Item';

enum equipmentSlot {
  leftHand = 'leftHand',
  rightHand = "rightHand",
  head = "head",
  feet = "feet",
  chest = "chest"
};

export class Equipment {

    private _items: {
      [equipmentSlot.leftHand] : Item | undefined,
      [equipmentSlot.rightHand] : Item | undefined,
      [equipmentSlot.head] : Item | undefined,
      [equipmentSlot.feet] : Item | undefined,
      [equipmentSlot.chest] : Item | undefined
    } = {
      [equipmentSlot.leftHand] : undefined,
      [equipmentSlot.rightHand] : undefined,
      [equipmentSlot.head] : undefined,
      [equipmentSlot.feet] : undefined,
      [equipmentSlot.chest] : undefined
    }

    public constructor(_leftHand: Item,
                       _rightHand: Item,
                       _head: Item,
                       _feet: Item,
                       _chest: Item) {
        this._items[equipmentSlot.leftHand] = _leftHand;
        this._items[equipmentSlot.rightHand] = _rightHand;
        this._items[equipmentSlot.head] = _head;
        this._items[equipmentSlot.feet] = _feet;
        this._items[equipmentSlot.chest] = _chest;
    }

    public get leftHand(): Item {
        return <Item>this._items[equipmentSlot.leftHand];
    }

    public get rightHand(): Item {
        return <Item>this._items[equipmentSlot.rightHand];
    }

    public get head(): Item {
        return <Item>this._items[equipmentSlot.head];
    }

    public get feet(): Item {
        return <Item>this._items[equipmentSlot.feet]
    }

    public get chest(): Item {
        return <Item>this._items[equipmentSlot.chest]
    }

    calculateEquipmentDamage(): number {
        return Object.values(this._items)
            .map(curr => curr?.baseDamage || 0)
            .reduce((acc, curr) => acc + curr, 0)
    }
}
