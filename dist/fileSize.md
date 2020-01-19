文件:main.js,大小:size() {
		if(typeof this._cachedSize !== "undefined") return this._cachedSize;
		if(typeof this._cachedSource !== "undefined") {
			if(Buffer.from.length === 1) return new Buffer(this._cachedSource).length;
			return this._cachedSize = Buffer.byteLength(this._cachedSource);
		}
		return this._cachedSize = this._source.size();
	}
