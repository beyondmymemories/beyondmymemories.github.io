var Attacks1 = {
    Weapons: {
        'Greataxe': {
            type: 'heavy',
            damage: 12,
            amount: 1,
            buy: 50,
            sell: 5
        },
        'Maul': {
            type: 'heavy',
            damage: 6,
            amount: 2,
            buy: 35,
            sell: 3.5
        },
        'Dagger': {
            type: 'finesse',
            damage: 4,
            amount: 1,
            buy: 20,
            sell: 2
        },
        'Goodaxe': {
            type: 'heavy',
            damage: 8,
            amount: 1,
            buy: 20,
            sell: 2
        },
        'Shortsword': {
            type: 'finesse',
            damage: 6,
            amount: 1,
            buy: 20,
            sell: 2
        },
        'Shortbow': {
            type: 'light',
            damage: 6,
            amount: 1,
            buy: 20,
            sell: 2
        },
        'Rapier': {
            type: 'finesse',
            damage: 8,
            amount: 1,
            buy: 25,
            sell: 2
        }
    },

    Spells: {
        'Fireball': {
            type: 'fire',
            damage: 6,
            amount: 8
        },
        'Firebolt': {
            type: 'fire',
            damage: 8,
            amount: 1
        },
        'Vicious Mockery': {
            type: 'psychic',
            damage: 4,
            amount: 1
        },
        'Healing Word': {
            type: 'heal',
            heal: 4,
            amount: 1
        }
    }
}

const wizAttacks = new Array(Attacks1.Spells.Fireball, Attacks1.Weapons.Dagger);
const wizBonus = new Array(Attacks1.Spells.Firebolt, Attacks1.Weapons.Dagger);

const bardAttacks = new Array(Attacks1.Spells.'Vicious Mockery', Attacks1.Spells.Firebolt, Attacks1.Weapons.Rapier);
const bardBonus = new Array(
