import {Equipment} from "../src/Equipment";
import {BasicItem} from "../src/BasicItem";
import {Inventory} from "../src/Inventory";

describe('Inventory', () => {

    // TODO: test is not finished!
    // ZOMBIES
    // Zero
    // One
    // Many
    // Boundaries
    // Interfaces
    // Exceptions
    // Simple Tests
    // Red -> Green -> Refactor
    describe('calculatesEquipmentDamage', () => {
        it('should return total equipment damage', () => {
            const equipment = new Equipment(
                new BasicItem('', 0, 0),
                new BasicItem('', 0, 0),
                new BasicItem('', 0, 0),
                new BasicItem('', 0, 0),
                new BasicItem('', 0, 0));

            const inventory = new Inventory(equipment);

            const damage = inventory.calculatesEquipmentDamage();

            expect(damage).toBe(0);
        })
        it('should return total equipment damage when given base damage of 7', () => {
            const equipment = new Equipment(
                new BasicItem('', 7, 0),
                new BasicItem('', 0, 0),
                new BasicItem('', 0, 0),
                new BasicItem('', 0, 0),
                new BasicItem('', 0, 0));

            const inventory = new Inventory(equipment);

            const damage = inventory.calculatesEquipmentDamage();

            expect(damage).toBe(7);
        })
    });
});