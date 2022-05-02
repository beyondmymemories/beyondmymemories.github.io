var Attacks1 = {
    Weapons: {
        Greataxe: {
            name: 'Greataxe',
            type: 'heavy',
            damage: 12,
            amount: 1,
            buy: 50,
            sell: 5
        },
        Maul: {
            name: 'Maul',
            type: 'heavy',
            damage: 6,
            amount: 2,
            buy: 35,
            sell: 3.5
        },
        Dagger: {
            name: 'Dagger',
            type: 'finesse',
            damage: 4,
            amount: 1,
            buy: 20,
            sell: 2
        },
        Goodaxe: {
            name: 'Goodaxe',
            type: 'heavy',
            damage: 8,
            amount: 1,
            buy: 20,
            sell: 2
        },
        Shortsword: {
            name: 'Shortsword',
            type: 'finesse',
            damage: 6,
            amount: 1,
            buy: 20,
            sell: 2
        },
        Rapier: {
            name: 'Rapier',
            type: 'finesse',
            damage: 8,
            amount: 1,
            buy: 25,
            sell: 2
        }
    },

    Spells: {
        Fireball: {
            name: 'Fireball',
            type: 'fire',
            damage: 6,
            amount: 8
        },
        Firebolt: {
            name: 'Firebolt',
            type: 'fire',
            damage: 8,
            amount: 1
        },
        ViciousMockery: {
            name: 'Vicious Mockery',
            type: 'psychic',
            damage: 4,
            amount: 1
        },
        HealingWord: {
            name: 'Healing Word',
            type: 'heal',
            heal: 4,
            amount: 1
        }
    }
}

var wizAttacks = new Array(Attacks1.Spells.Fireball, Attacks1.Weapons.Dagger);
var wizBonus = new Array(Attacks1.Spells.Firebolt, Attacks1.Weapons.Dagger);

var bardAttacks = new Array(Attacks1.Spells.ViciousMockery, Attacks1.Spells.Firebolt, Attacks1.Weapons.Rapier);
var bardBonus = new Array(Attacks1.Spells.HealingWord, Attacks1.Weapons.Dagger);

var barbAttacks = new Array(Attacks1.Weapons.Greataxe)
var barbBonus = new Array(Attacks1.Weapons.Greataxe)

var rogueAttacks = new Array(Attacks1.Weapons.Dagger)
var rogueBonus = new Array(Attacks1.Weapons.Dagger)
