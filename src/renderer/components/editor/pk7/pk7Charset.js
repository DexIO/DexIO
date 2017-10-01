editor.service('pk7Charset', function () {

    this.encodeString = function (value, length) {
        var bytes = [];
        var i;
        var charCode;
        for (i = 0; i < length; i += 1) {
            charCode = value.charCodeAt(i);
            bytes.push(charCode & 0xFF);
            bytes.push((charCode & 0xFF00) >>> 8);
        }
        bytes.length = length;
        return bytes;
    };

    this.decodeString = function (data) {
        var str = '';
        var i;
        var charCode;
        var symbol;
        for (i = 0; i < data.length; i += 2) {
            charCode = (data[i + 1] << 8);
            charCode |= data[i];
            if (charCode === 65535) {
                break;
            }
            symbol = String.fromCharCode(charCode);
            str += symbol;
        }
        return str;
    };

});