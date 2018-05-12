
const attrType = {
	'.': 'className',
	'#': 'id'
};

/**
 * Remove the css style classes and ids then replace them with tagbuildr attribute strings to use later on
 * @private
 * @param {string} str
 * @return {string} reformatted tagString
 */
function handleClassesAndId(str) {
	return str.replace(/(.*?)([\.|#].[^|]*)(.*)/, function (fullStr, tag, classAndIds, end) {
		if (classAndIds[0] === '|') {
			return fullStr;
		}
		const clsIdArr = classAndIds.split(/(\..[^\.|#]*)/).filter(Boolean);
		const returnArr = [];
		let i = clsIdArr.length;
		while (i--) {
			returnArr.push(`|${attrType[clsIdArr[i][0]]}=${clsIdArr[i].substr(1)}`);
		}

		return tag + returnArr.join('') + end;
	});
}

export default handleClassesAndId;