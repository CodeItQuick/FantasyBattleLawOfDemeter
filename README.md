
// Legacy Something
// New Cool Something
// 1. Populate new cool something
// 2. Slowly point old legacy something at new cool something
// 3. Running tests
// 4. Old legacy something is no longer used - delete it

Law Of Demeter
===============================
See Wikipedia article for general description: https://en.wikipedia.org/wiki/Law_of_Demeter
Probably the reason for this article (Getters and Setters are evil): https://www.infoworld.com/article/2073723/why-getter-and-setter-methods-are-evil.html
Note: the above is not the original highly-influential article on the subject.

Be sure to see the OOP Principle CQS.md (not to be confused with CQRS - they are similar but different concepts) file 
located in this directory for information on how to "solve" the code smell.

Fantasy Battle Refactoring Kata
===============================

This code is part of a larger fantasy battle game. Players in the game will fight monsters using the equipment they are wearing. 
The type of equipment will affect how much damage they do to the monsters. Monsters also vary according to what armour and equipment they are wearing. 
This part of the code is concerned with calculating how much damage the player is doing to a monster when they fight.

The kata is designed to teach you something about the [Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter). 
The 'Player' class perhaps doesn't follow this law very well.

Try to write a test for the method 'calculateDamage' on the Player class, without changing any of the production code. 
Use the description below to help you design a test scenario. Note there are two example test cases to start from. Choose the one you prefer. 
Give yourself a time box of 10 minutes, then reflect on why this method is hard to test.

When you have reflected, you should refactor the 'calculateDamage' method to better follow the Law of Demeter. 
Also add test cases to cover the functionality in the Player class.

When you feel that you are done, depending on how much time you have, you may continue to implement tests until you have good coverage or look through the TODO in the code (Alt+6 in IntelliJ). Reflect on which of these TODO hints will now be easier to address compared with before your refactoring work, then try to implement those features.

Example Data for use in Test cases
----------------------------------

Example equipment:

| Where     | What            | Base Damage | Damage Modifier |
|-----------|-----------------|-------------|-----------------|
| right hand|  flashy sword of danger | 10  | 1.0             |
| right hand|  excalibur              | 20  | 1.5             |
| left hand |  round shield           |  0  | 1.4             |
| feet      |  ten league boots       |  0  | 0.1             |
| head      |  helmet of swiftness    |  0  | 1.2             |
| chest     |  breastplate of steel   |  0  | 1.4             |

At present the only kind of enemy supported is a SimpleEnemy. This kind of target has one Buff with a soakModifier of 1.0 and damage modifier of 1.0. It wears an Armor with a Damage Soak of 5.

CRC Cards
Class,Responsibilities,Collaborators
BasicBuff,Value Object (No Behaviour),
Basic Item,Value Object (No Behaviour),
Damage,Value Object (No Behaviour),
Equipment,"CalculateBaseDamage()
CalculateDamageModifier(strengthModifier: number)","Items, Simple Armor"
Inventory,Know all its equipment pieces,Equipment
Item,"CalculateBaseDamage
Knows its Damage Modifier
Knows how to calculate its total damage",
Player,Can Calculate its Damage to Target,"Inventory, Stats"
Simple Armor,"Knows how much damage it soaks up
Knows its current buffs",
Simple Enemy,"Knows its current health
Knows its current buffs","Simple Armor, Buffs"
Stats,Value Object (No Behaviour),



