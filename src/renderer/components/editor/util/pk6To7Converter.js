editor.service('pk6To7Converter', ['pk6Data', 'pk7Data',
        function (pk6Data, pk7Data) {

    this.pk6To7 = function (pk6) {
        var pk7 = clone(pk6);
        delete pk6.caught.encounterType;

        pk7.format = 'pk7';
        pk7.ribbons.alolaChampion = false;
        pk7.ribbons.royalChampion = false;
        pk7.ribbons.treeGreat = false;
        pk7.ribbons.treeMaster = false;
        pk7.genetics.hyperTrainedHP = false;
        pk7.genetics.hyperTrainedAttack = false;
        pk7.genetics.hyperTrainedDefense = false;
        pk7.genetics.hyperTrainedSpeed = false;
        pk7.genetics.hyperTrainedSpecialAttack = false;
        pk7.genetics.hyperTrainedSpecialDefense = false;
        
        return pk7;
    };

    this.pk7To6 = function (pk7) {
        var pk6 = clone(pk7);
        delete pk6.ribbons.alolaChampion;
        delete pk6.ribbons.royalChampion;
        delete pk6.ribbons.treeGreat;
        delete pk6.ribbons.treeMaster;
        delete pk6.genetics.hyperTrainedHP;
        delete pk6.genetics.hyperTrainedAttack;
        delete pk6.genetics.hyperTrainedDefense;
        delete pk6.genetics.hyperTrainedSpeed;
        delete pk6.genetics.hyperTrainedSpecialAttack;
        delete pk6.genetics.hyperTrainedSpecialDefense;

        pk6.format = 'pk6';
        pk6.caught.encounterType = 0;

        return pk6;
    };

    var clone = function (json) {
        return JSON.parse(JSON.stringify(json));
    };

}]);