
editor.service('littleEndian', function () {

    this.in = function (bytes) {
        this.bytes = bytes;
        this.index = 0;
        this.offset = 0;
        this.buffer = 0;

        this.skip = function (length) {
            this.index += length;
        };

        this.readByte = function () {
            var value = bytes[this.index];
            this.index += 1;
            return value;
        };

        this.readShort = function () {
            var ch1 = this.readByte();
            var ch2 = this.readByte();
            return (ch1 << 0) + (ch2 << 8);
        };

        this.readInt = function () {
            var ch1 = this.readByte();
            var ch2 = this.readByte();
            var ch3 = this.readByte();
            return (ch1 << 0) + (ch2 << 8) + (ch3 << 16);
        };

        this.readLong = function () { // TODO Broken since JS int is 32-bit
            var ch1 = this.readByte();
            var ch2 = this.readByte();
            var ch3 = this.readByte();
            var ch4 = this.readByte();
            return (ch1 << 0) + (ch2 << 8) + (ch3 << 16) + (ch4 << 24);
        };

        this.readBoolean = function () {
            var ch1 = this.readByte();
            return (ch1 !== 0);
        };

        this.readBits = function (numBits) {
            var data;
            while (this.offset < numBits) {
                data = this.readByte();
                this.buffer |= data << this.offset;
                this.offset += 8;
            }
            var value = (this.buffer & (1 << numBits) - 1);
            this.buffer >>= numBits;
            this.offset -= numBits;
            return value;
        };

        this.readBit = function () {
            var ch1 = this.readBits(1);
            return (ch1 !== 0);
        };

        this.readString = function (length, charset) {
            var data = [];
            var i;
            for (i = 0; i < length; i += 1) {
                data[i] = this.readByte();
            }
            return charset.decodeString(data);
        };

    };

    this.out = function (length) {
        this.bytes = new Uint8Array(length);
        this.index = 0;
        this.offset = 0;
        this.buffer = 0;

        this.writeByte = function (value) {
            this.bytes[this.index] = value & 0xff;
            this.index += 1;
        };

        this.writeShort = function (value) {
            this.writeByte(value >>> 0);
            this.writeByte(value >>> 8);
        };

        this.writeInt = function (value) {
            this.writeByte(value >>> 0);
            this.writeByte(value >>> 8);
            this.writeByte(value >>> 16);
        };

        this.writeLong = function (value) { // TODO Broken since JS int is 32-bit
            this.writeByte(value >>> 0);
            this.writeByte(value >>> 8);
            this.writeByte(value >>> 16);
            this.writeByte(value >>> 24);
        };

        this.writeBoolean = function (value) {
            this.writeByte(value
                ? 1
                : 0);
        };

        this.writeBits = function (value, length) {
            this.buffer |= value << this.offset;
            this.offset += length;
            while (this.offset >= 8) {
                this.offset -= 8;
                this.writeByte(this.buffer & 0xff);
                this.buffer >>>= 8;
            }
        };

        this.writeBit = function (value) {
            this.writeBits(value
                ? 1
                : 0, 1);
        };

        this.writeString = function (value, length, charset) {
            var data = charset.encodeString(value, length);
            var i;
            for (i = 0; i < data.length; i += 1) {
                this.writeByte(data[i]);
            }
        };

    };

});