module.exports = (type, length) => {
    let result = null;
	switch (type) {
		case 'id':
			let num = Math.random() * (999999 - 100000) + 100000;
			result = Math.round(num);
			break;

		case 'str':
			let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
			for (let i = 0; i < length; i++) {
				result += chars.charAt(Math.floor(Math.random() * chars.length));
			}
			break;
	}
	return result;
}