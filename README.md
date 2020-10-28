# pokemon-move-converter-for-astral
I've been developing a pokemon tabletop campaign for astraltabletop.com. One of the biggest things slowing me down has been writing in Pokemon moves as astral actions, so I felt some jquery could save me some time.

My pokemon tabletop system is intended to simplify Pokemon videogame mechanics into something manageable by humans, but to make it really good I needed a visual medium and some further simplification via Astral virtual tabletop. Astral uses customizable character sheets that consist primarily of 2 main elements: Stats and Actions. Stats act as variables and must be equal to a number though they can be derivative of other stats. The one exception to this is the Name stat. An Action's Message essentially a print functions, but they support die rolls, some low level math & logic functions, and a bit of mark-up. They also have title and sheet display fields that accept the same code and have customizable colors. Here's charge beam as an example.

Sheet Display: Charge Beam - SpA
Action Title: {name} uses Charge Beam

Message:
  `Type:Electric`
  5 Pow - 9 Ac - 10pp
  ___
  ```
  The user attacks with an electric charge. The user may use any remaining electricity to raise its Sp. Atk Stat (7/10).
  ```
  >To hit: {(!(2d6)+9+Acc)} - Evasion vs 12
  >Damage(STAB): {floor(1.5 * (SpAtk+!(1d4)+1))} vs Sp.Def
  >Raise Sp.Atk 1 stage?: !!(1d10>3)
  >Crit? + !!(1d4+1)


I'm figuring this will constist of an HTML form with an attached jquery and basic 

