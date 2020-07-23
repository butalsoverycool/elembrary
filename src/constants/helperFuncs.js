// get exact var-type
export const typeCheck = (input) => {
	const full = Object.prototype.toString.call(input);
	const type = full.substring(8, full.length - 1).toLowerCase();

	return type;
};

// print any var-type value as valid id or className, null/undefined/symbol = ''
export const selectorAlias = (input) => {
	const classType = typeCheck(input);
	let res = input;

	if (classType === 'object') res = Object.values(input).join(' ');

	if (classType === 'array') res = input.join(' ');

	if (classType === 'boolean') res = String(input);

	if (classType === 'bigint') res += 'n';

	if (classType === 'symbol') res = '';
	return res;
};
