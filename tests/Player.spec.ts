import { Inventory } from '../src/Inventory';
import { Stats } from '../src/Stats';
import { SimpleEnemy } from '../src/SimpleEnemy';
import { Player } from '../src/Player';
import { Damage } from '../src/Damage';
import {SimpleArmor} from "../src/SimpleArmor";
import {Buff} from "../src/Buff";
import {BasicBuff} from "../src/BasicBuff";
import {Equipment} from "../src/Equipment";
import {BasicItem} from "../src/BasicItem";
// 'test'
describe('Player', () => {

    // TODO: test is not finished!

    it('calculates damage', () => {
        const inventory = new Inventory(
            new Equipment(
                new BasicItem("Flash Sword of Danger", 10, 1),
                new BasicItem("Shield", 0, 1.4),
                new BasicItem("Helmet", 0, 1.2),
                new BasicItem("Shoes", 0, .1),
                new BasicItem("Chestplate", 0, 1.4)
            ));
        const stats = new Stats(0);
        const enemy = new SimpleEnemy(
            new SimpleArmor(5), 
        [new BasicBuff(1, 1)]);

        const damage: Damage = new Player(inventory, stats)
            .calculateDamage(enemy);
        expect(damage.amount).toBe(41);
    });

    it('calculates damage with sword 10 only damaage', () => {
        const inventory = new Inventory(
            new Equipment(
                new BasicItem("Flash Sword of Danger", 10, 1),
                new BasicItem("Shield", 0, 0),
                new BasicItem("Helmet", 0, 0),
                new BasicItem("Shoes", 0, 0),
                new BasicItem("Chestplate", 0, 0)
            ));
        const stats = new Stats(0);
        const enemy = new SimpleEnemy(
            new SimpleArmor(0),
            [new BasicBuff(0, 0)]);

        const damage: Damage = new Player(inventory, stats)
            .calculateDamage(enemy);
        expect(damage.amount).toBe(10);
    });

    it('calculates damage with sword with 5 simple armor on Simple Enemy', () => {
        const inventory = new Inventory(
            new Equipment(
                new BasicItem("Flash Sword of Danger", 10, 1),
                new BasicItem("Shield", 0, 0),
                new BasicItem("Helmet", 0, 0),
                new BasicItem("Shoes", 0, 0),
                new BasicItem("Chestplate", 0, 0)
            ));
        const stats = new Stats(0);
        const enemy = new SimpleEnemy(
            new SimpleArmor(5),
            [new BasicBuff(0, 0)]);

        const damage: Damage = new Player(inventory, stats)
            .calculateDamage(enemy);
        expect(damage.amount).toBe(5);
    });

    it('calculates damage with sword with 5 simple armor on Simple Enemy, with soak 0', () => {
        const inventory = new Inventory(
            new Equipment(
                new BasicItem("Flash Sword of Danger", 10, 1),
                new BasicItem("Shield", 0, 0),
                new BasicItem("Helmet", 0, 0),
                new BasicItem("Shoes", 0, 0),
                new BasicItem("Chestplate", 0, 0)
            ));
        const stats = new Stats(0);
        const enemy = new SimpleEnemy(
            new SimpleArmor(1),
            [new BasicBuff(4, 0)]);

        const damage: Damage = new Player(inventory, stats)
            .calculateDamage(enemy);
        expect(damage.amount).toBe(5);
    });

    it('calculates damage with sword with 1 shield', () => {
        const inventory = new Inventory(
            new Equipment(
                new BasicItem("Flash Sword of Danger", 10, 1),
                new BasicItem("Shield", 1, 0),
                new BasicItem("Helmet", 0, 0),
                new BasicItem("Shoes", 0, 0),
                new BasicItem("Chestplate", 0, 0)
            ));
        const stats = new Stats(0);
        const enemy = new SimpleEnemy(
            new SimpleArmor(0), []);

        const damage: Damage = new Player(inventory, stats)
            .calculateDamage(enemy);
        expect(damage.amount).toBe(11);
    });

    it('calculates damage with sword with 1 shield', () => {
        const inventory = new Inventory(
            new Equipment(
                new BasicItem("Flash Sword of Danger", 10, 1),
                new BasicItem("Shield", 0, 2),
                new BasicItem("Helmet", 0, 0),
                new BasicItem("Shoes", 0, 0),
                new BasicItem("Chestplate", 0, 0)
            ));
        const stats = new Stats(0);
        const enemy = new SimpleEnemy(
            new SimpleArmor(0), []);

        const damage: Damage = new Player(inventory, stats)
            .calculateDamage(enemy);
        expect(damage.amount).toBe(30);
    });

    it('calculates damage with sword with variations with different items and attributes', () => {
        const inventory = new Inventory(
            new Equipment(
                new BasicItem("Flash Sword of Danger", 10, 1),
                new BasicItem("Shield", 0, 0),
                new BasicItem("Helmet", 1, 0),
                new BasicItem("Shoes", 0, 1),
                new BasicItem("Chestplate", 0, 0)
            ));
        const stats = new Stats(0);
        const enemy = new SimpleEnemy(
            new SimpleArmor(0), []);

        const damage: Damage = new Player(inventory, stats)
            .calculateDamage(enemy);
        expect(damage.amount).toBe(22);
    });
})
