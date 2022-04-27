var Monsters1 = {
    Goblin: {
        type: 'melee',
        weapon: Attacks1.Weapons.Shortsword,
        health: 12,
        hitNode: '//Goblin Hit//',
        missNode: '//Goblin Miss//',
        stats:{
            str: 1,
            dex: 3,
            con: 1,
            int: -2,
            wis: -1,
            chr: 1
        }
    },
    Hobgoblin: {
        type: 'melee',
        weapon: Attacks1.Weapons.Maul,
        health: 30,
        hitNode: '//Hobgoblin Hit//',
        missNode: '//Hobgoblin Miss//',
        stats: {
            str: 4,
            dex: 1,
            con: 3,
            int: -2,
            wis: -1,
            chr: 0
        }
    },
    Minotaur: {
        type: 'melee',
        weapon: Attacks1.Weapons.Greataxe,
        health: 50,
        hitNode: '//Minotaur Hit//',
        missNode: '//Minotaur Miss//',
        stats: {
            str: 5,
            dex: 2,
            con: 4,
            int: -2,
            wis: -2,
            chr: 0
        }
    }
}
