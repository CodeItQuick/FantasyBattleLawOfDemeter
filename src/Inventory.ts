import { Equipment } from './Equipment';

export class Inventory {
    private _equipment: Equipment;

    public constructor(_equipment: Equipment) {
        this._equipment = _equipment;
    }

    public get equipment(): Equipment {
        return this._equipment;
    }

    calculatesEquipmentDamage() {
        return this._equipment.calculateEquipmentDamage();
    }
}
