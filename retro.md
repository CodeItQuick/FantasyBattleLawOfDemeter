March 8th, 2024
Observations
1. Bogged down by "syntax stuff" - typescript?
2. ZOMBIES
3. Learned reduce - and to avoid using it
4. Characterization tests for legacy code - don't project own opinions, just how does it currently work (have visibility)


Learnings:
1. Key smell "middleman" -> Single method calling a single other method, should that be there?

March 1st, 2024

Observations:

Learnings:
1. To re-run tests use shortcut (command + R)
2. using .each -> using theories: 
3. Refactoring is not just for production code -> refactor tests as well
4. Don't write any control statements in tests (blanket rule meant to be broken)
5. Parameterized testing not used yet (alien to us)
6. Skip intermediary steps of tests
7. ZOMBIES -> another learning
8. Outside->In vs Inside->Outside: Where should TDD start? Using mocks or not: Typically start in the middle
9. Thin Vertical Slices
10. Start from UX layer not DB layer
11. Red/Green/Refactor -> Minimum production code to make the test pass
12. Triangulation
13. Happy to see the green repeatedly