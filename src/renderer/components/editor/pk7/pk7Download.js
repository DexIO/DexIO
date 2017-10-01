editor.service('pk7Download', ['pk7IO', function (pk7IO) {

    this.download = function (pokemon) {
        var bytes = pk7IO.toBytes(pokemon);
        var blob = new Blob([bytes], {type: "application/octet-stream"});
        saveAs(blob, "pokemon.pk7");
    };

}]);