editor.service('pk7IO', ['littleEndian', 'pk7Charset', function (littleEndian, pk7Charset) {

    this.toBytes = function (pokemon) {
        var out = new littleEndian.out(232);

        var attacks = pokemon.attacks;
        var caught = pokemon.caught;
        var core = pokemon.core;
        var genetics = pokemon.genetics;
        var medals = pokemon.medals;
        var history = pokemon.history;
        var memories = pokemon.memories;
        var ribbons = pokemon.ribbons;

        out.writeLong(genetics.encryptionKey);
        out.writeLong(0); // The checksum is fixed later.
        out.writeShort(core.pokedexNumber);
        out.writeShort(core.heldItem);
        out.writeShort(caught.trainerID);
        out.writeShort(caught.secretId);
        out.writeLong(core.experience);
        out.writeByte(genetics.ability);
        out.writeByte(genetics.abilityNumber);
        out.writeByte(medals.hitsRemaining);
        out.writeByte(medals.trainingBag);
        out.writeLong(genetics.personalityValue);
        out.writeByte(genetics.nature);
        out.writeBit(genetics.fateful);
        out.writeBit(genetics.female);
        out.writeBit(genetics.genderless);
        out.writeBit(genetics.alternateForme1);
        out.writeBit(genetics.alternateForme2);
        out.writeBit(genetics.alternateForme3);
        out.writeBit(genetics.alternateForme4);
        out.writeBit(genetics.alternateForme5);
        out.writeByte(core.hpEV);
        out.writeByte(core.attackEV);
        out.writeByte(core.defenseEV);
        out.writeByte(core.speedEV);
        out.writeByte(core.specialAttackEV);
        out.writeByte(core.specialDefenseEV);
        out.writeByte(core.cool);
        out.writeByte(core.beauty);
        out.writeByte(core.cute);
        out.writeByte(core.smart);
        out.writeByte(core.tough);
        out.writeByte(core.feel);
        out.writeBit(genetics.circleMark);
        out.writeBit(genetics.triangleMark);
        out.writeBit(genetics.squareMark);
        out.writeBit(genetics.heartMark);
        out.writeBit(genetics.starMark);
        out.writeBit(genetics.diamondMark);
        out.writeBit(false); // Unused bit
        out.writeBit(false); // Unused bit
        out.writeBits(genetics.pokerusDuration, 4);
        out.writeBits(genetics.pokerusStrain, 4);
        writeMedals(out, medals);
        out.writeBit(ribbons.kalosChamp);
        out.writeBit(ribbons.champion);
        out.writeBit(ribbons.sinnohChamp);
        out.writeBit(ribbons.bestFriends);
        out.writeBit(ribbons.training);
        out.writeBit(ribbons.skillfulBattler);
        out.writeBit(ribbons.expertBattler);
        out.writeBit(ribbons.effort);
        out.writeBit(ribbons.alert);
        out.writeBit(ribbons.shock);
        out.writeBit(ribbons.downcast);
        out.writeBit(ribbons.careless);
        out.writeBit(ribbons.relax);
        out.writeBit(ribbons.snooze);
        out.writeBit(ribbons.smile);
        out.writeBit(ribbons.gorgeous);
        out.writeBit(ribbons.royal);
        out.writeBit(ribbons.gorgeousRoyal);
        out.writeBit(ribbons.artist);
        out.writeBit(ribbons.footprint);
        out.writeBit(ribbons.record);
        out.writeBit(ribbons.legend);
        out.writeBit(ribbons.country);
        out.writeBit(ribbons.national);
        out.writeBit(ribbons.earth);
        out.writeBit(ribbons.world);
        out.writeBit(ribbons.classic);
        out.writeBit(ribbons.premier);
        out.writeBit(ribbons.event);
        out.writeBit(ribbons.birthday);
        out.writeBit(ribbons.special);
        out.writeBit(ribbons.souvenir);
        out.writeBit(ribbons.wishing);
        out.writeBit(ribbons.battleChampion);
        out.writeBit(ribbons.regionalChampion);
        out.writeBit(ribbons.nationalChampion);
        out.writeBit(ribbons.worldChampion);
        out.writeBit(false); // Unused bit
        out.writeBit(false); // Unused bit
        out.writeBit(ribbons.hoennChampion);
        out.writeBit(ribbons.contestStar);
        out.writeBit(ribbons.coolMaster);
        out.writeBit(ribbons.beautyMaster);
        out.writeBit(ribbons.cuteMaster);
        out.writeBit(ribbons.smartMaster);
        out.writeBit(ribbons.toughMaster);
        out.writeBit(ribbons.alolaChampion);
        out.writeBit(ribbons.royalChampion);
        out.writeBit(ribbons.treeGreat);
        out.writeBit(ribbons.treeMaster);
        out.writeBit(false); // Unused bit
        out.writeBit(false); // Unused bit
        out.writeBit(false); // Unused bit
        out.writeBit(false); // Unused bit
        out.writeBit(false); // Unused bit
        out.writeBit(false); // Unused bit
        out.writeByte(0);
        out.writeByte(ribbons.contestMemory);
        out.writeByte(ribbons.towerMemory);
        out.writeBit(medals.juttingJaws);
        out.writeBit(medals.zipped);
        out.writeBit(medals.stuckStrong);
        out.writeBit(medals.dazzling);
        out.writeBit(medals.magikarp);
        out.writeBit(medals.multipleMega);
        out.writeBit(false); // Unused bit
        out.writeBit(false); // Unused bit
        out.writeLong(0);
        out.writeByte(0);
        out.writeString(core.nickname, 24, pk7Charset);
        out.writeShort(0); // Null terminator
        out.writeShort(attacks.moveIndex1);
        out.writeShort(attacks.moveIndex2);
        out.writeShort(attacks.moveIndex3);
        out.writeShort(attacks.moveIndex4);
        out.writeByte(attacks.currentPP1);
        out.writeByte(attacks.currentPP2);
        out.writeByte(attacks.currentPP3);
        out.writeByte(attacks.currentPP4);
        out.writeByte(attacks.ppUps1);
        out.writeByte(attacks.ppUps2);
        out.writeByte(attacks.ppUps3);
        out.writeByte(attacks.ppUps4);
        out.writeShort(attacks.relearnedMove1);
        out.writeShort(attacks.relearnedMove2);
        out.writeShort(attacks.relearnedMove3);
        out.writeShort(attacks.relearnedMove4);
        out.writeBoolean(medals.secretSuperTraining);
        out.writeByte(0); // 0x73
        out.writeBits(genetics.hpIV, 5);
        out.writeBits(genetics.attackIV, 5);
        out.writeBits(genetics.defenseIV, 5);
        out.writeBits(genetics.speedIV, 5);
        out.writeBits(genetics.specialAttackIV, 5);
        out.writeBits(genetics.specialDefenseIV, 5);
        out.writeBit(core.egg);
        out.writeBit(core.nicknamed);
        out.writeString(history.handlerName, 24, pk7Charset);
        out.writeShort(0); // Null terminator
        out.writeBoolean(history.handlerFemale);
        out.writeBoolean(history.handlerNotTrainer);
        out.writeByte(history.geoRegion1);
        out.writeByte(history.geoCountry1);
        out.writeByte(history.geoRegion2);
        out.writeByte(history.geoCountry2);
        out.writeByte(history.geoRegion3);
        out.writeByte(history.geoCountry3);
        out.writeByte(history.geoRegion4);
        out.writeByte(history.geoCountry4);
        out.writeByte(history.geoRegion5);
        out.writeByte(history.geoCountry5);
        out.writeLong(0); // Unused
        out.writeByte(history.handlerFriendship);
        out.writeByte(history.handlerAffection);
        out.writeByte(history.handlerMemoryIntensity);
        out.writeByte(history.handlerMemoryLine);
        out.writeByte(history.handlerMemoryFeeling);
        out.writeByte(0); // 0xA7 Unused
        out.writeShort(history.handlerMemoryTextVar);
        out.writeLong(0); // Unused
        out.writeByte(memories.fullness);
        out.writeByte(memories.enjoyment);
        out.writeString(caught.trainerName, 24, pk7Charset);
        out.writeShort(0); // Null terminator
        out.writeByte(memories.friendship);
        out.writeByte(memories.affection);
        out.writeByte(memories.memoryIntensity);
        out.writeByte(memories.memoryLine);
        out.writeShort(memories.memoryTextVar);
        out.writeByte(memories.memoryFeeling);
        out.writeByte(caught.eggYear);
        out.writeByte(caught.eggMonth);
        out.writeByte(caught.eggDay);
        out.writeByte(caught.metYear);
        out.writeByte(caught.metMonth);
        out.writeByte(caught.metDay);
        out.writeByte(0); // 0xD7 Unknown / Unused
        out.writeShort(caught.eggLocation);
        out.writeShort(caught.metLocation);
        out.writeByte(caught.pokeball);
        out.writeBits(caught.caughtLevel, 7);
        out.writeBit(caught.caughtTrainerFemale);
        out.writeBit(genetics.hyperTrainedHP);
        out.writeBit(genetics.hyperTrainedAttack);
        out.writeBit(genetics.hyperTrainedDefense);
        out.writeBit(genetics.hyperTrainedSpeed);
        out.writeBit(genetics.hyperTrainedSpecialAttack);
        out.writeBit(genetics.hyperTrainedSpecialDefense);
        out.writeBit(false); // Unused bit
        out.writeBit(false); // Unused bit
        out.writeByte(caught.caughtGame);
        out.writeByte(caught.caughtCountry);
        out.writeByte(caught.caughtRegion);
        out.writeByte(caught.caught3DSRegion);
        out.writeByte(caught.caughtLanguage);
        out.writeLong(0); // Unused

        fixChecksum(out);

        return out.bytes;
    };

    var fixChecksum = function (out) {
        var checksum = 0;
        var i;
        var word;
        for (i = 8; i < 232; i += 2) {
            word = out.bytes[i] + (out.bytes[i + 1] << 8);
            checksum += word;
            checksum &= 0xFFFF;
        }
        out.index = 6;
        out.writeShort(checksum);
    };

    var writeMedals = function (out, medals) {
        out.writeBit(medals.training1);
        out.writeBit(medals.training2);
        out.writeBit(medals.spAtkLevel1);
        out.writeBit(medals.hpLevel1);
        out.writeBit(medals.atkLevel1);
        out.writeBit(medals.spDefLevel1);
        out.writeBit(medals.speedLevel1);
        out.writeBit(medals.defLevel1);
        out.writeBit(medals.spAtkLevel2);
        out.writeBit(medals.hpLevel2);
        out.writeBit(medals.atkLevel2);
        out.writeBit(medals.spDefLevel2);
        out.writeBit(medals.speedLevel2);
        out.writeBit(medals.defLevel2);
        out.writeBit(medals.spAtkLevel3);
        out.writeBit(medals.hpLevel3);
        out.writeBit(medals.atkLevel3);
        out.writeBit(medals.spDefLevel3);
        out.writeBit(medals.speedLevel3);
        out.writeBit(medals.defLevel3);
        out.writeBit(medals.troubles);
        out.writeBit(medals.leafStone);
        out.writeBit(medals.fireStone);
        out.writeBit(medals.waterStone);
        out.writeBit(medals.fleeingGoals);
        out.writeBit(medals.watchOut);
        out.writeBit(medals.lightningQuick);
        out.writeBit(medals.longShots);
        out.writeBit(medals.scatterbug);
        out.writeBit(medals.barrage);
        out.writeBit(medals.hydreigon);
        out.writeBit(medals.battleForBest);
    };

    this.fromBytes = function (bytes) {
        var input = new littleEndian.in(bytes);

        var core = {};
        var attacks = {};
        var caught = {};
        var genetics = {};
        var ribbons = {};
        var medals = {};
        var history = {};
        var memories = {};

        genetics.encryptionKey = input.readLong();
        input.skip(4);
        core.pokedexNumber = input.readShort();
        core.heldItem = input.readShort();
        caught.trainerID = input.readShort();
        caught.secretId = input.readShort();
        core.experience = input.readLong();
        genetics.ability = input.readByte();
        genetics.abilityNumber = input.readByte();
        medals.hitsRemaing = input.readByte();
        medals.traingBag = input.readByte();
        genetics.personalityValue = input.readLong();
        genetics.nature = input.readByte();
        genetics.fateful = input.readBit();
        genetics.female = input.readBit();
        genetics.genderless = input.readBit();
        genetics.alternateForme1 = input.readBit();
        genetics.alternateForme2 = input.readBit();
        genetics.alternateForme3 = input.readBit();
        genetics.alternateForme4 = input.readBit();
        genetics.alternateForme5 = input.readBit();
        core.hpEV = input.readByte();
        core.attackEV = input.readByte();
        core.defenseEV = input.readByte();
        core.speedEV = input.readByte();
        core.specialAttackEV = input.readByte();
        core.specialDefenseEV = input.readByte();
        core.cool = input.readByte();
        core.beauty = input.readByte();
        core.cute = input.readByte();
        core.smart = input.readByte();
        core.tough = input.readByte();
        core.feel = input.readByte();
        genetics.circleMark = input.readBit();
        genetics.triangleMark = input.readBit();
        genetics.squareMark = input.readBit();
        genetics.heartMark = input.readBit();
        genetics.starMark = input.readBit();
        genetics.diamondMark = input.readBit();
        input.readBit(); // Unused bit
        input.readBit(); // Unused bit
        genetics.pokerusDuration = input.readBits(4);
        genetics.pokerusStrain = input.readBits(4);
        readMedals(input, medals);
        readRibbons(input, ribbons);
        readDistMedals(input, medals);
        input.skip(0x3F - 0x3B + 1);
        core.nickname = input.readString(24, pk7Charset);
        input.skip(2); // Null terminator
        attacks.moveIndex1 = input.readShort();
        attacks.moveIndex2 = input.readShort();
        attacks.moveIndex3 = input.readShort();
        attacks.moveIndex4 = input.readShort();
        attacks.currentPP1 = input.readByte();
        attacks.currentPP2 = input.readByte();
        attacks.currentPP3 = input.readByte();
        attacks.currentPP4 = input.readByte();
        attacks.ppUps1 = input.readByte();
        attacks.ppUps2 = input.readByte();
        attacks.ppUps3 = input.readByte();
        attacks.ppUps4 = input.readByte();
        attacks.relearnedMove1 = input.readShort();
        attacks.relearnedMove2 = input.readShort();
        attacks.relearnedMove3 = input.readShort();
        attacks.relearnedMove4 = input.readShort();
        medals.secretSuperTraing = input.readBoolean();
        input.skip(1); // 0x73
        genetics.hpIV = input.readBits(5);
        genetics.attackIV = input.readBits(5);
        genetics.defenseIV = input.readBits(5);
        genetics.speedIV = input.readBits(5);
        genetics.specialAttackIV = input.readBits(5);
        genetics.specialDefenseIV = input.readBits(5);
        core.egg = input.readBit();
        core.nicknamed = input.readBit();
        history.handlerName = input.readString(24, pk7Charset);
        input.skip(2); // Null terminator
        history.handlerFemale = input.readBoolean();
        history.handlerNotTrainer = input.readBoolean();
        history.geoRegion1 = input.readByte();
        history.geoCountry1 = input.readByte();
        history.geoRegion2 = input.readByte();
        history.geoCountry2 = input.readByte();
        history.geoRegion3 = input.readByte();
        history.geoCountry3 = input.readByte();
        history.geoRegion4 = input.readByte();
        history.geoCountry4 = input.readByte();
        history.geoRegion5 = input.readByte();
        history.geoCountry5 = input.readByte();
        input.skip(0xA1 - 0x9E + 1); // Unused
        history.handlerFriendship = input.readByte();
        history.handlerAffection = input.readByte();
        history.handlerMemoryIntensity = input.readByte();
        history.handlerMemoryLine = input.readByte();
        history.handlerMemoryFeeling = input.readByte();
        input.skip(1); // 0xA7 Unused
        history.handlerMemoryTextVar = input.readShort();
        input.skip(0xAD - 0xAA + 1); // Unused
        memories.fullness = input.readByte();
        memories.enjoyment = input.readByte();
        caught.trainerName = input.readString(24, pk7Charset);
        input.skip(2); // Null terminator
        memories.friendship = input.readByte();
        memories.affection = input.readByte();
        memories.memoryIntensity = input.readByte();
        memories.memoryLine = input.readByte();
        memories.memoryTextVar = input.readShort();
        memories.memoryFeeling = input.readByte();
        caught.eggYear = input.readByte();
        caught.eggMonth = input.readByte();
        caught.eggDay = input.readByte();
        caught.metYear = input.readByte();
        caught.metMonth = input.readByte();
        caught.metDay = input.readByte();
        input.skip(1); // 0xD7 Unknown / Unused
        caught.eggLocation = input.readShort();
        caught.metLocation = input.readShort();
        caught.pokeball = input.readByte();
        caught.caughtLevel = input.readBits(7);
        caught.caughtTrainerFemale = input.readBit();
        genetics.hyperTrainedHP = input.readBit();
        genetics.hyperTrainedAttack = input.readBit();
        genetics.hyperTrainedDefense = input.readBit();
        genetics.hyperTrainedSpeed = input.readBit();
        genetics.hyperTrainedSpecialAttack = input.readBit();
        genetics.hyperTrainedSpecialDefense = input.readBit();
        input.readBit();
        input.readBit();
        caught.caughtGame = input.readByte();
        caught.caughtCountry = input.readByte();
        caught.caughtRegion = input.readByte();
        caught.caught3DSRegion = input.readByte();
        caught.caughtLanguage = input.readByte();
        input.skip(4);

        var pokemon = {
            format: 'pk7',
            core: core,
            attacks: attacks,
            caught: caught,
            genetics: genetics,
            ribbons: ribbons,
            medals: medals,
            history: history,
            memories: memories
        };

        return pokemon;
    };

    var readDistMedals = function (input, medals) {
        medals.juttingJaws = input.readBit();
        medals.zipped = input.readBit();
        medals.stuckStrong = input.readBit();
        medals.dazzling = input.readBit();
        medals.magikarp = input.readBit();
        medals.multipleMega = input.readBit();
        input.readBit(); // Unused bit
        input.readBit(); // Unused bit
    };

    var readMedals = function (input, medals) {
        medals.training1 = input.readBit();
        medals.training2 = input.readBit();
        medals.spAtkLevel1 = input.readBit();
        medals.hpLevel1 = input.readBit();
        medals.atkLevel1 = input.readBit();
        medals.spDefLevel1 = input.readBit();
        medals.speedLevel1 = input.readBit();
        medals.defLevel1 = input.readBit();
        medals.spAtkLevel2 = input.readBit();
        medals.hpLevel2 = input.readBit();
        medals.atkLevel2 = input.readBit();
        medals.spDefLevel2 = input.readBit();
        medals.speedLevel2 = input.readBit();
        medals.defLevel2 = input.readBit();
        medals.spAtkLevel3 = input.readBit();
        medals.hpLevel3 = input.readBit();
        medals.atkLevel3 = input.readBit();
        medals.spDefLevel3 = input.readBit();
        medals.speedLevel3 = input.readBit();
        medals.defLevel3 = input.readBit();
        medals.troubles = input.readBit();
        medals.leafStone = input.readBit();
        medals.fireStone = input.readBit();
        medals.waterStone = input.readBit();
        medals.fleeingGoals = input.readBit();
        medals.watchOut = input.readBit();
        medals.lightningQuick = input.readBit();
        medals.longShots = input.readBit();
        medals.scatterbug = input.readBit();
        medals.barrage = input.readBit();
        medals.hydreigon = input.readBit();
        medals.battleForBest = input.readBit();
    };

    var readRibbons = function (input, ribbons) {
        ribbons.kalosChamp = input.readBit();
        ribbons.champion = input.readBit();
        ribbons.sinnohChamp = input.readBit();
        ribbons.bestFriends = input.readBit();
        ribbons.training = input.readBit();
        ribbons.skillfulBattler = input.readBit();
        ribbons.expertBattler = input.readBit();
        ribbons.effort = input.readBit();
        ribbons.alert = input.readBit();
        ribbons.shock = input.readBit();
        ribbons.downcast = input.readBit();
        ribbons.careless = input.readBit();
        ribbons.relax = input.readBit();
        ribbons.snooze = input.readBit();
        ribbons.smile = input.readBit();
        ribbons.gorgeous = input.readBit();
        ribbons.royal = input.readBit();
        ribbons.gorgeousRoyal = input.readBit();
        ribbons.artist = input.readBit();
        ribbons.footprint = input.readBit();
        ribbons.record = input.readBit();
        ribbons.legend = input.readBit();
        ribbons.country = input.readBit();
        ribbons.national = input.readBit();
        ribbons.earth = input.readBit();
        ribbons.world = input.readBit();
        ribbons.classic = input.readBit();
        ribbons.premier = input.readBit();
        ribbons.event = input.readBit();
        ribbons.birthday = input.readBit();
        ribbons.special = input.readBit();
        ribbons.souvenir = input.readBit();
        ribbons.wishing = input.readBit();
        ribbons.battleChampion = input.readBit();
        ribbons.regionalChampion = input.readBit();
        ribbons.nationalChampion = input.readBit();
        ribbons.worldChampion = input.readBit();
        input.readBit(); // Unused
        input.readBit(); // Unused
        ribbons.hoennChampion = input.readBit();
        ribbons.contestStar = input.readBit();
        ribbons.coolMaster = input.readBit();
        ribbons.beautyMaster = input.readBit();
        ribbons.cuteMaster = input.readBit();
        ribbons.smartMaster = input.readBit();
        ribbons.toughMaster = input.readBit();
        ribbons.alolaChampion = input.readBit();
        ribbons.royalChampion = input.readBit();
        ribbons.treeGreat = input.readBit();
        ribbons.treeMaster = input.readBit();
        input.readBit(); // Unused
        input.readBit(); // Unused
        input.readBit(); // Unused
        input.readBit(); // Unused
        input.readBit(); // Unused
        input.readBit(); // Unused
        input.skip(0x37 - 0x37 + 1);
        ribbons.contestMemory = input.readByte();
        ribbons.towerMemory = input.readByte();
    };

}]);