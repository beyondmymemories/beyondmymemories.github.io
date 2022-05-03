var Monsters1 = {
    Goblin: {
        type: 'melee',
        weapon: Attacks1.Weapons.Shortsword,
        health: 12,
        ac: 15,
        hitNode: '//Goblin Hit//',
        missNode: '//Goblin Miss//',
        stats:{
            str: -1,
            dex: 2,
            con: 0,
            int: 0,
            wis: -1,
            chr: -1
        }
    },
    Hobgoblin: {
        type: 'melee',
        weapon: Attacks1.Weapons.Maul,
        health: 24,
        ac: 18,
        hitNode: '//Hobgoblin Hit//',
        missNode: '//Hobgoblin Miss//',
        stats: {
            str: 2,
            dex: 1,
            con: 2,
            int: -2,
            wis: -1,
            chr: 0
        }
    },
    Minotaur: {
        type: 'melee',
        weapon: Attacks1.Weapons.Greataxe,
        health: 50,
        ac: 16,
        hitNode: '//Minotaur Hit//',
        missNode: '//Minotaur Miss//',
        stats: {
            str: 4,
            dex: 2,
            con: 4,
            int: -2,
            wis: -2,
            chr: 0
        }
    }
}
