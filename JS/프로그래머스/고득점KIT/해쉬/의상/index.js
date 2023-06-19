// 각 종류에 따른 옷을 분류하고 경우의 수를 return 하면 된다
/**
 *
 * sudo code:
 * 1. 종류별로 의상을 분류 한다
 * 2. 경우의 수를 구한다(종류별로 의상의 개수 + 하나만 입는 경우)
 */

/**
 * categoryClothes
 * 의상을 종류별로 분류한다
 *
 * @param {['clothes', 'category'][]} clothes // 의상 이름, 의상 종류
 * @returns {Map} categorized // 의상 종류, 의상 개수
 */
const categorizedClothes = (clothes) => {
	const categorized = {};
	for (const [cloth, category] of clothes) {
		categorized[category] = (categorized[category] || 0) + 1;
	}
	return categorized;
};

/**
 * getCombination
 * 경우의 수를 구한다
 *
 * @param {Map} categorized // 의상 종류, 의상 개수
 * @returns {number} combination // 경우의 수
 *
 * @example
 */
const getCombination = (categorized) => {
	let combination = 1;
	for (const count of Object.values(categorized)) {
		combination *= count + 1;
	}
	return combination - 1;
};

function solution(clothes) {
	// 1. 종류별로 의상을 분류 한다
	const categorized = categorizedClothes(clothes);
	// 2. 경우의 수를 구한다(종류별로 의상의 개수 + 하나만 입는 경우)
	const answer = getCombination(categorized);
	return answer;
}
