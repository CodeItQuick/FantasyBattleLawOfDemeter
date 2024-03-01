import {Equipment} from "../src/Equipment";
import {BasicItem} from "../src/BasicItem";
import {Inventory} from "../src/Inventory";

describe('Equipment', () => {

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
    describe.each([
        { equipmentSlot: 'left hand', baseDamage: [3, 0, 0, 0, 0], expectedTotalDamage: 3 },
        { equipmentSlot: 'right hand', baseDamage: [0, 5, 0, 0, 0], expectedTotalDamage: 5 },
        { equipmentSlot: 'head', baseDamage: [0, 0, 13, 0, 0], expectedTotalDamage: 13 },
        { equipmentSlot: 'feet', baseDamage: [0, 0, 0, 21, 0], expectedTotalDamage: 21 },
        { equipmentSlot: 'chest', baseDamage: [0, 0, 0, 0, 17], expectedTotalDamage: 17 },
        { equipmentSlot: 'chest', baseDamage: [3, 7, 5, 13, 17], expectedTotalDamage: 45 },
    ])('leftHandBaseDamage', ({ equipmentSlot, baseDamage, expectedTotalDamage}) => {
        it(`should return base damage for ${equipmentSlot}`, () => {
            const equipment = new Equipment(
                new BasicItem('', baseDamage[0], 0),
                new BasicItem('', baseDamage[1], 0),
                new BasicItem('', baseDamage[2], 0),
                new BasicItem('', baseDamage[3], 0),
                new BasicItem('', baseDamage[4], 0));

            const damage = equipment.calculateEquipmentDamage();

            expect(damage).toBe(expectedTotalDamage);
        })
    });
});