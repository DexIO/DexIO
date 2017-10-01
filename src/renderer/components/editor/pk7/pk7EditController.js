editor.controller('pk7EditController', ['$scope', 'pk7Data', 'pk7Download', 'pk6To7Converter',
        function ($scope, pk7Data, pk7Download, pk6To7Converter) {

    $scope.download = pk7Download.download;
    $scope.clear = function () {
        $scope.pokemon = {
            format: 'pk7',
            core: {
                attackEV: 0,
                beauty: 0,
                cool: 0,
                cute: 0,
                defenseEV: 0,
                experience: 0,
                feel: 0,
                heldItem: 0,
                hpEV: 0,
                nickname: '',
                smart: 0,
                specialAttackEV: 0,
                specialDefenseEV: 0,
                pokedexNumber: 1,
                speedEV: 0,
                tough: 0,
                egg: false,
                nicknamed: false
            },
            attacks: {
                currentPP1: 0,
                currentPP2: 0,
                currentPP3: 0,
                currentPP4: 0,
                moveIndex1: 0,
                moveIndex2: 0,
                moveIndex3: 0,
                moveIndex4: 0,
                ppUps1: 0,
                ppUps2: 0,
                ppUps3: 0,
                ppUps4: 0,
                relearnedMove1: 0,
                relearnedMove2: 0,
                relearnedMove3: 0,
                relearnedMove4: 0
            },
            caught: {
                trainerName: '',
                trainerID: 0,
                secretId: 0,
                eggYear: 0,
                eggMonth: 0,
                eggDay: 0,
                metYear: 0,
                metMonth: 0,
                metDay: 0,
                eggLocation: 0,
                metLocation: 0,
                pokeball: 0,
                caughtLevel: 0,
                caughtTrainerFemale: false,
                caughtGame: 0,
                caughtCountry: 0,
                caughtRegion: 0,
                caught3DSRegion: 0,
                caughtLanguage: 0
            },
            genetics: {
                encryptionKey: 0,
                ability: 0,
                abilityNumber: 0,
                personalityValue: 0,
                nature: 0,
                fateful: false,
                female: false,
                genderless: false,
                alternateForme1: false,
                alternateForme2: false,
                alternateForme3: false,
                alternateForme4: false,
                alternateForme5: false,
                circleMark: false,
                triangleMark: false,
                squareMark: false,
                heartMark: false,
                diamondMark: false,
                starMark: false,
                pokerusDuration: 0,
                pokerusStrain: 0,
                hpIV: 0,
                attackIV: 0,
                defenseIV: 0,
                speedIV: 0,
                specialAttackIV: 0,
                specialDefenseIV: 0,
                hyperTrainingHP: false,
                hyperTrainingAttack: false,
                hyperTrainingDefense: false,
                hyperTrainingSpeed: false,
                hyperTrainingSpecialAttack: false,
                hyperTrainingSpecialDefense: false
            },
            ribbons: {
                kalosChamp: false,
                champion: false,
                sinnohChamp: false,
                bestFriends: false,
                training: false,
                skillfulBattler: false,
                expertBattler: false,
                effort: false,
                alert: false,
                shock: false,
                downcast: false,
                careless: false,
                relax: false,
                snooze: false,
                smile: false,
                gorgeous: false,
                royal: false,
                gorgeousRoyal: false,
                artist: false,
                footprint: false,
                record: false,
                legend: false,
                country: false,
                national: false,
                earth: false,
                world: false,
                classic: false,
                premier: false,
                event: false,
                birthday: false,
                special: false,
                souvenir: false,
                wishing: false,
                battleChampion: false,
                regionalChampion: false,
                nationalChampion: false,
                worldChampion: false,
                hoennChampion: false,
                contestStar: false,
                coolMaster: false,
                beautyMaster: false,
                cuteMaster: false,
                smartMaster: false,
                toughMaster: false,
                contestMemory: 0,
                towerMemory: 0,
                alolaChampion: false,
                royalChampion: false,
                treeGreat: false,
                treeMaster: false
            },
            medals: {
                hitsRemaining: 0,
                trainingBag: 0,
                training1: false,
                training2: false,
                spAtkLevel1: false,
                hpLevel1: false,
                atkLevel1: false,
                spDefLevel1: false,
                speedLevel1: false,
                defLevel1: false,
                spAtkLevel2: false,
                hpLevel2: false,
                atkLevel2: false,
                spDefLevel2: false,
                speedLevel2: false,
                defLevel2: false,
                spAtkLevel3: false,
                hpLevel3: false,
                atkLevel3: false,
                spDefLevel3: false,
                speedLevel3: false,
                defLevel3: false,
                troubles: false,
                leafStone: false,
                fireStone: false,
                waterStone: false,
                fleeingGoals: false,
                watchOut: false,
                lightningQuick: false,
                longShots: false,
                scatterbug: false,
                barrage: false,
                hydreigon: false,
                battleForBest: false,
                juttingJaws: false,
                zipped: false,
                stuckStrong: false,
                dazzling: false,
                magikarp: false,
                multipleMega: false,
                secretSuperTraining: false
            },
            history: {
                handlerFriendship: 0,
                handlerAffection: 0,
                handlerMemoryIntensity: 0,
                handlerMemoryLine: 0,
                handlerMemoryFeeling: 0,
                handlerMemoryTextVar: 0,
                handlerName: '',
                handlerFemale: false,
                handlerNotTrainer: false,
                geoRegion1: 0,
                geoCountry1: 0,
                geoRegion2: 0,
                geoCountry2: 0,
                geoRegion3: 0,
                geoCountry3: 0,
                geoRegion4: 0,
                geoCountry4: 0,
                geoRegion5: 0,
                geoCountry5: 0
            },
            memories: {
                fullness: 0,
                enjoyment: 0,
                friendship: 0,
                affection: 0,
                memoryIntensity: 0,
                memoryLine: 0,
                memoryTextVar: 0,
                memoryFeeling: 0
            }
        };

        $scope.memoryLine = {
            value: 0,
            name: '',
            varTextType: 0,
            line: ''
        };
    };

    $scope.selectMemory = function () {
        $scope.memoryLine = pk7Data.memoryTemplateList[$scope.pokemon.memories.memoryLine];
    };

    $scope.selectHandlerMemory = function () {
        $scope.handlerMemoryLine = pk7Data.memoryTemplateList[$scope.pokemon.history.handlerMemoryLine];
    };

    $scope.toPK6 = function () {
        var converted = pk6To7Converter.pk7To6($scope.pokemon);
        window.sessionStorage.setItem('pokemon', JSON.stringify(converted));
        window.location.href = '../' + converted.format + '/edit.html';
    };

    $scope.cancel = function () {
        window.location.href = '../upload.html';
    };

    var stored = window.sessionStorage.getItem('pokemon');
    if (stored) {
        var parsed = JSON.parse(stored);
        if (parsed.format === 'pk7') {
            $scope.pokemon = parsed;
        } else {
            $scope.clear();
        }
    } else {
        $scope.clear();
    }

    $scope.selectedTab = 'core';

    $scope.pokemonList = pk7Data.pokemonList;
    $scope.attackList = pk7Data.attackList;
    $scope.itemList = pk7Data.itemList;
    $scope.languageList = pk7Data.languageList;
    $scope.nintendo3DSRegionList = pk7Data.nintendo3DSRegionList;
    $scope.pokeballList = pk7Data.pokeballList;
    $scope.gameList = pk7Data.gameList;
    $scope.encounterTypeList = pk7Data.encounterTypeList;
    $scope.locationList = pk7Data.locationList;
    $scope.natureList = pk7Data.natureList;
    $scope.abilityList = pk7Data.abilityList;
    $scope.abilityNumberList = pk7Data.abilityNumberList;
    $scope.trainingBagList = pk7Data.trainingBagList;
    $scope.memoryTemplateList = pk7Data.memoryTemplateList;
    $scope.memoryFeelingList = pk7Data.memoryFeelingList;
    $scope.memoryIntensityList = pk7Data.memoryIntensityList;
    $scope.generalLocationList = pk7Data.generalLocationList;
    $scope.characteristicList = pk7Data.characteristicList;
    $scope.countryList = pk7Data.countryList;
}]);
