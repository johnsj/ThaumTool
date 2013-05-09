function AspectController ($scope) {
  $scope.aspects = [
    {
      name: 'Aer',
      clues: ['Weather', 'Mist', 'Climate'],
      sources:[
        'Wispy Essence x 4'
      ]},
    {
      name: 'Alienis',
      clues: ['Eldritch', 'The End', 'Strange', 'Alien'],
      sources:[
        'Beacon x 6',
        'Ender Pearl x 4',
        'Eye of Ender x 3',
        'Music Disc (far) x 4',
        'Nether Star x 8',
        'Obsidian Totem x 2'
      ]},
    {
      name: 'Animus',
      clues: ['Soul', 'Spirit'],
      sources:[
        'Head/Skull (any) x 4',
        'Ghast Tear x 4',
        'Soul Sand x 1',
        'Wispy Essence x 1'
      ]},
    {
      name: 'Aqua',
      clues: ['Water', 'Fluid'],
      sources:[
        'Awkward Potion x 1',
        'Boat x 4',
        'Brewing Stand x 2',
        'Cactus x 1',
        'Cake x 8',
        'Clay (ball) x 1',
        'Empty Map x 13',
        'Ghast Tear x 4',
        'Lily Pad x 1',
        'Mundane Potion x 1',
        'Music Disc (13) x 4',
        'Paper x 2',
        'Pumpkin Pie x 2',
        'Raw Fish x 1',
        'Reeds x 2',
        'Slime Ball x 2',
        'Sugar x 2',
        'Thick Potion x 1',
        'Water Bottle x 1',
        'Water Bucket x 4',
        'Water Shard x 2'
      ]},
    {
      name: 'Aura',
      clues: ['Air', 'Wind', 'Breath'],
      sources:[
        'Air Shard x 2',
        'Dead Bush x 1',
        'Feather x 2',
        'Grass x 1',
        'Aluminum x 2'
      ]},
    {
      name: 'Bestia',
      clues: ['Animal', 'Beast'],
      sources:[
        'Bed x 2',
        'Book x 2',
        'Leather x 2',
        'Music Disc (cat) x 4',
        'Raw Porkchop x 1',
        'Wool (any) x 1'
      ]},
    {
      name: 'Bestiola',
      clues: ['Spider', 'Web', 'Insects'],
      sources:[
        'Bow x 2',
        'Spider Eye x 2',
        'String x 1',
        'Firefly (block) X 4'
      ]},
    {
      name: 'Carus',
      clues: ['Expensive', 'Precious', 'Valuable'],
      sources:[
        'Diamond x 4',
        'Emerald x 2',
        'Enchantment Table x 6',
        'Gold x 4',
        'Green Sapphire x 4',
        'Lapis Lazuli x 1',
        'Music Disc (any) x 4',
        'Ruby x 4',
        'Sapphire x 4',
        'Smooth Sandstone x 1'
      ]},
    {
      name: 'Cognitio',
      clues: ['Learning', 'Knowledge', 'Inquiry'],
      sources:[
        'Book x 5',
        'Bookshelf x 12',
        'Knowledge Fragment x 16',
        'Paper x 2',
        'Zombie Brain x 4'
      ]},
      {
      name: 'Corpus',
      clues: ['Body', 'Flesh', 'Physique'],
      sources:[
        'Black Wool x 1',
        'Bone Meal x 1',
        'Bones x 2',
        'Cake x 3',
        'Cooked Chicken x 4',
        'Cooked Porkchop x 4',
        'Egg x 4',
        'Raw Beef x 4',
        'Raw Chicken x 4',
        'Raw Porkchop x 4',
        'Rotten Flesh x 4',
        'Steak x 4',
        'Zombie Brain x 2',
        'Player when standing on a Crucible'
      ]},
      {
      name: 'Fabrico',
      clues: ['Create', 'Construct', 'Work'],
      sources:[
        'Anvil x 2',
        'Crafting Table x 4',
        'Music Disc (blocks) x 4',
        'Slightly Damaged Anvil x 1',
        'Steel Ingot x 1',
        'Very Damaged Anvil x 1',
        'Wand of the Apprentice x 2'
      ]},
      {
      name: 'Flos',
      clues: ['Flower', 'Bloom', 'Blossom'],
      sources:[
        'Dandelion Yellow x 2',
        'Flowers x 4',
        'Magenta Dye x 1',
        'Magenta Wool x 1',
        'Orange Dye x 2',
        'Orange Wool x 2',
        'Pink Dye x 1',
        'Pink Wool x 1',
        'Purple Dye x 1',
        'Purple Wool x 1',
        'Red Wool x 2',
        'Rose Red x 2',
        'Yellow Wool x 2'
      ]},
      {
      name: 'Fractus',
      clues: ['Destruction', 'Fragmented', 'Shattered'],
      sources:[
        'Cobblestone x 1',
        'Gunpowder x 4',
        'Red Xychorium x 2',
        'TNT x 16'
      ]},
      {
      name: 'Fungus',
      clues: ['Mushroom', 'Toadstool', 'Fungi'],
      sources:[
        'Brown Mushroom x 4',
        'Mushroom Stew x 3',
        'Mushroom (Block) x 4',
        'Mycelium x 1',
        'Nether Wart x 1',
        'Red Mushroom x 4'
      ]},
      {
      name: 'Gelum',
      clues: ['Cold', 'Ice', 'Frost'],
      sources:[
        'Ice x 3',
        'Snow x 3',
        'Snowball x 1',
        'Water Shard x 2'
      ]},
      {
      name: 'Herba',
      clues: ['Herb', 'Plant', 'Grass'],
      sources:[
        'Cactus x 4',
        'Dead Bush x 1',
        'Saplings x 4',
        'Seeds x 1',
        'Moss Stone x 1',
        'Leaves x 2',
        'Cocoa Beans x 1',
        'Torch x 1'
      ]},
      {
      name: 'Ignis',
      clues: ['Fire', 'Heat', 'Burn'],
      sources:[
        'Blaze Rod x 6',
        'Brick x 1',
        'Charcoal x 2',
        'Coal x 2',
        'Enchantment Table x 6',
        'Fire Shard x 2',
        'Flint and Steel x 4',
        'Furnace x 2',
        'Gunpowder x 4',
        'Music Disc (11) x 4',
        'Nether Wart x 1',
        'Netherrack x 1',
        'Rose x 1',
        'Refractory wax x3 (Forestery)'
      ]},
      {
      name: 'Imperito',
      clues: ['Control', 'Command', 'Dominate'],
      sources:[
        'Blue Xychorium x 2',
        'Bronze Ingot x 1',
        'Lever x 1',
        'Music Disc (strad) x 4',
        'Rubber (IC2) x 2',
        'Saddle x 4',
        'Slime Ball x 4',
        'Tin Ore x 1',
        'Beeswax x 1',
        'Propolis x1'
      ]},
      {
      name: 'Instrumentum',
      clues: ['Instrument', 'Tool', 'Implement'],
      sources:[
        'Anvil x 2',
        'Axe x (depends on material)',
        'Flint x 1',
        'Hoe x (depends on material)',
        'Pickaxe x (depends on material)',
        'Shears x 4',
        'Shovel x (depends on material)',
        'Slightly Damaged Anvil x 2',
        'Very Damaged Anvil x 1'
      ]},
      {
      name: 'Lignum',
      clues: ['Wood', 'Forest', 'Tree'],
      sources:[
        'Bed x 3',
        'Charcoal x 2',
        'Chest x 3',
        'Crafting Table x 3',
        'Greatwood Log x 7',
        'Jukebox x 3',
        'Lever x 1',
        'Log (any type) x 8',
        'Piston x 3',
        'Redstone Repeater x 2',
        'Saplings x 2',
        'Sign x 1',
        'Stick x 1',
        'Sticky Piston x 3',
        'Tripwire Hook x 1',
        'Note Block x 3',
        'Wooden Bowl x 1',
        'Wooden Button x 1',
        'Wooden Door x 3',
        'Wooden Fence x 1',
        'Wooden Fence Gate x 5',
        'Wooden Planks (any type) x 2',
        'Wooden Pressure Plate x 3',
        'Wooden Slab (any type) x 1',
        'Wooden Stairs (any type) x 2',
        'Wooden Tools x (depends on tool)'
      ]},
      {
      name: 'Lux',
      clues: ['Light', 'Brightness', 'Day'],
      sources:[
        'Flower (Yellow) x 1',
        'Glowstone x 10',
        'Glowstone Dust x 3',
        'Jack o Lantern x 1',
        'Light Xychorium x 2',
        'Redstone Lamp x 8',
        'Torch x 2',
        'Ultimate Hybrid Solar Panel x 372'
      ]},
      {
      name: 'Machina',
      clues: ['Mechanism', 'Machine', 'Device'],
      sources:[
        'Button (any) x 1',
        'Fence Gate x 1',
        'Iron Door x 2',
        'Minecart x 2',
        'Nikolite (RedPower 2) x 2',
        'Redstone x 2',
        'Redstone Repeater x 8',
        'Redstone Torch x 4',
        'Wooden Door x 1',
        'Pressure Plate (any) x 1'
      ]},
      {
      name: 'Malum',
      clues: ['Evil', 'The Nether', 'Malice'],
      sources:[
        'Creeper Head x 4',
        'Ghast Tear x 4',
        'Music Disc (stal) x 4',
        'Skeleton Skull x 4',
        'Wither Skeleton Skull x 4',
        'Zombie Brain x 2',
        'Zombie Head x 4'
      ]},
      {
      name: 'Messis',
      clues: ['Crops', 'Harvest'],
      sources:[
        'Apple x 2',
        'Cake x 8',
        'Carrot x 2',
        'Golden Apple x 2',
        'Potato x 2',
        'Sugar Canes x 2',
        'Pumpkin x 8',
        'Wheat x 2',
        'Fertilizer x 1'
      ]},
      {
      name: 'Metallum',
      clues: ['Metal', 'Mine', 'Ore'],
      sources:[
        'Anvil x 26',
        'Cinnabar Ore x 3',
        'Clay (block) x 2',
        'Copper/Tin/Silver/Bronze/Lead Dust x 5',
        'Copper/Tin/Silver/Bronze/Lead Ingot x 6',
        'Copper/Tin/Silver Ore x 5',
        'Iron/Gold Dust x 7',
        'Iron/Gold Ingot x 8',
        'Iron/Gold Ore x 6',
        'Nugget (any) x 1',
        'Quicksilver x 4',
        'Xychoridite x 4',
        'Refined Uranium x 6',
        'Slightly Damaged Anvil x 6',
        'Shears x 13',
        'Very Damaged Anvil x 26',
        'Ultimate Hybrid Solar Panel x 165'
      ]},
      {
      name: 'Mortuus',
      clues: ['Death', 'Decay', 'Undead'],
      sources:[
        'Bone Meal x 2',
        'Bones x 6',
        'Ghast Tear x 4',
        'Gray Dye x 1',
        'Light Blue Dye x 1',
        'Light Gray Wool x 1',
        'Lime Dye x 1',
        'Potion of Harming (I) x3',
        'Potion of Harming (II) x6',
        'Rotten Flesh x 4',
        'Wither Skeleton Skull x 8',
        'Zombie Brain x 2'
      ]},
      {
      name: 'Motus',
      clues: ['Motion', 'Movement', 'Speed'],
      sources:[
        'Air Shard x 2',
        'Boat x 4',
        'Doors x 1',
        'Fence Gate x 1',
        'Minecart x 4',
        'Music Disc (mellohi) x 4',
        'Nagastone x 4',
        'Piston x 4',
        'Potion of Speed (I) x 3',
        'Potion of Speed (II) x 6',
        'Quicksilver x1',
        'Rubber x 2',
        'Rubberwood x1',
        'Trapdoor x 1'
      ]},
      {
      name: 'Mutatio',
      clues: ['Flux', 'Chaos'],
      sources:[
        'Magma Cream x 2',
        'Mossy Cobblestone x 1',
        'Nether Wart x 1',
        'Slimeball x 2',
        'Wispy Essence x 1'
      ]},
      {
      name: 'Obscurus',
      clues: ['Unknown', 'Obscured'],
      sources:[
      ]},
      {
      name: 'Pannus',
      clues: ['Cloth', 'Fabric', 'Garment', 'Thread'],
      sources:[
        'Bed x 17',
        'Bow x 5',
        'Leather x 1',
        'Non-white Wool x 6',
        'String x 2',
        'White Wool x 7'
      ]},
      {
      name: 'Permutatio',
      clues: ['Exchange', 'Change', 'Barter'],
      sources:[
        'Copper Ore x 1',
        'Egg x 4',
        'Emerald x 4',
        'Flax Seeds x 1',
        'Melon Seeds x 1',
        'Music Disc (mall) x 4',
        'Pumpkin Seeds x 1',
        'Seeds x 1',
        'Silver Ore x 1',
        'Honey Drop x 2',
      ]},
      {
      name: 'Potentia',
      clues: ['Power', 'Energy', 'Strength'],
      sources:[
        'Charcoal x 2',
        'Coal x 2',
        'Cocoa Beans x 1',
        'Nikolite (RedPower 2) x 2',
        'Quartz Crystal x 1',
        'Redstone x 2',
        'Redstone Repeater x 5',
        'Refined Uranium x 6',
        'Ultimate Hybrid Solar Panel x 165',
        'Apatite x 2'
      ]},
      {
      name: 'Praecantatio',
      clues: ['Magic', 'Sorcery'],
      sources:[
        'Air / Earth / Fire / Water / Dull Shard x 2',
        'Any Enchanted Item (Depends On Level) x 2-8(?)',
        'Any Potion (I) x 2',
        'Any Potion (II) x 4',
        'Arcane Stone Block x 2',
        'Arcane Wood Block x 1',
        'Arcane Worktable x 2',
        'Beacon x 8',
        'Blaze Rod x 2',
        'Chiseled Sandstone x 1',
        'Emerald x 4',
        'Enchantment Table x 8',
        'Ender Pearl x 4',
        'Golden Carrot x 2',
        'Greatwood Log x 1',
        'Music Disc (ward) x 4',
        'Nether Star x 8',
        'Silverwood Log x 2',
        'Vis Shard x 6',
        'Magic wax x 2 (Thaumic bees)'
      ]},
      {
      name: 'Purus',
      clues: ['Pure', 'Clean', 'Stainless'],
      sources:[
        'Beacon x 6',
        'Diamond x 4',
        'Nether Star x 8',
        'Silverwood Leaves x 1',
        'Silverwood Log x 2',
        'Refined Iron x 1'
      ]},
      {
      name: 'Sano',
      clues: ['Heal', 'Repair', 'Make Sound'],
      sources:[
        'Cake x 8',
        'Golden Apple (Block) x 8',
        'Golden Apple (Nugget) x 4',
        'Milk Bucket x 2',
        'Potion of Health (I) x 3',
        'Potion of Health (II) x 6',
        'Potion of Regeneration (I) x 3',
        'Potion of Regeneration (II) x 6',
        'Ambrosia x 4 (Forestery)'
      ]},
      {
      name: 'Saxum',
      clues: ['Stone', 'Rock'],
      sources:[
        'Beacon x 12',
        'Cobblestone x 1',
        'Enchanting Table x 16',
        'End Stone x 1',
        'Gravel x 1',
        'Nether Brick x 2',
        'Netherrack x 1',
        'Obsidian x 5',
        'Redstone Repeater x 5',
        'Silver Ore x 2',
        'Stone x 2',
        'Moss Stone'
      ]},
      {
      name: 'Solum',
      clues: ['Earth', 'Soil', 'Ground', 'Foundation'],
      sources:[
        'Brick x 2',
        'Bricks (Block) x 6',
        'Clay (ball) x2',
        'Dirt x 2',
        'End Stone x 1',
        'Gravel x 1',
        'Music Disc (chirp) x 4',
        'Mycelium x 2',
        'Netherrack x 1',
        'Sand x 2',
        'Soul Sand x 1'
      ]},
      {
      name: 'Sonus',
      clues: ['Sound', 'Noise', 'Din'],
      sources:[
        'Jukebox x 8',
        'Music Disc (any) x 12',
        'Noteblock x 4',
        'Cicada x 4'
      ]},
      {
      name: 'Telum',
      clues: ['Arrow', 'Sword', 'Weapon'],
      sources:[
        'Arrow x 1',
        'Bow x 6',
        'Cactus x 1',
        'Potion of Strength (I) x 3',
        'Potion of Strength (II) x 6',
        'Sword x (depends on material) x 4-10'
      ]},
      {
      name: 'Tenebris',
      clues: ['Dark', 'Night', 'Blindness'],
      sources:[
        'Black Wool x 1',
        'Dark Xychorium x 2',
        'End Stone x 1',
        'Ink Sac x 1',
        'Obsidian x 1',
      ]},
      {
      name: 'Tutamen',
      clues: ['Defense', 'Protection', 'Security'],
      sources:[
        'Armor x (depends on material) 3-9',
        'Enchanted Book of (any) Protection (depends On Level) x 2-6',
        'Leather x 1',
        'Potion of Fire Resistance x 1',
      ]},
      {
      name: 'Vacuos',
      clues: ['Empty', 'Void', 'Insubstantial'],
      sources:[
        'Bowl x 1',
        'Bucket x 1',
        'Chest x 4',
        'Flower Pot x 1',
        'Glass Phial / Bottle x 1',
        'Lead Ingot x 2'
      ]},
      {
      name: 'Venenum',
      clues: ['Poison', 'Drug', 'Impure'],
      sources:[
        'Poisonous Potato x 2',
        'Potion of Poison (I) x 3',
        'Potion of Poison (II) x 6',
        'Quicksilver x 1',
        'Refined Uranium x 4',
        'Spider Eye x 2',
        'Ultimate Hybrid Solar Panel x 100'
      ]},
      {
      name: 'Victus',
      clues: ['Life force', 'Food', 'Sustenance'],
      sources:[
        'Apple x 2',
        'Bread x 5',
        'Cake x 10',
        'Copper Dust / Ingot x 2',
        'Green Xychorium x 2',
        'Melon x 1',
        'Porkchop x 4',
        'Steak x 4',
        'Sulfur x 2',
        'Wheat x 2'
      ]},
      {
      name: 'Vinculum',
      clues: ['Bind', 'Imprison', 'Trap'],
      sources:[
        'Amber x 4',
        'Cobweb x 2',
        'Potion of Slowness x 3',
        'Soul Sand x 1',
        'String x 1'
      ]},
      {
      name: 'Visum',
      clues: ['Sight', 'Vision', 'Appearance'],
      sources:[
        'Carrot x 2',
        'Cinnabar Ore x 3',
        'Glowstone Dust x 1',
        'Potion of Night Vision x 3',
        'Quicksilver x 4',
        'Spider Eye x 2',
        'Ultimate Hybrid Solar Panel x 112'
      ]},
      {
      name: 'Vitreus',
      clues: ['Glass', 'Crystal', 'Gem', 'Transparent'],
      sources:[
        'Beacon x 8',
        'Diamond x 12',
        'Emerald x 10',
        'Enchanting Table x 19',
        'Ender Pearl x 4',
        'Glass x 2',
        'Glass Bottle x 2',
        'Glass Pane x 1',
        'Glass Phial x 1',
        'Ice x 1',
        'Quartz Crystal x 4',
        'Xychorium (all) x 2',
        'Apatite x 2'
      ]},
      {
      name: 'Volito',
      clues: ['Flight', 'Leap'],
      sources:[
        'Bee Drone (Any) x 2',
        'Bee Princess (Any) x 2',
        'Bee Queen (Any) x 4',
        'Feather x 2',
        'Projectile Protection',
        'Raven\'s Feather x 2'
      ]}
  ];
};

var thaumApp = angular.module('thaumApp',[]);