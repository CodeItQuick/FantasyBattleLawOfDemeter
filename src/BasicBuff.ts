import { Buff } from './Buff';

export class BasicBuff implements Buff {

    public constructor(private _soak: number,
                       private _damage: number) {
    }

    public get soakModifier(): number {
        return this._soak;
    }

    // TODO: Remove Not Used
    public get damageModifier(): number {
        return this._damage;
    }
}
