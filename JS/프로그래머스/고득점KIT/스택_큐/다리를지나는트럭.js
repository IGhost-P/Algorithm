/**
 *
 * // 자료 구조
 * 1. 다리를 지난 트럭은 스택
 * 2. 다리를 지나고 있는 트럭은 큐
 * 3. 대기 트럭은 큐
 *
 * // 기능
 * 1. 다리에 진입을 하기 위해선 다리에 진입할 수 있는지 확인해야함
 * 2. 다리의 길이(트럭이 올라가술 있는 수)를 초과하면 안됨, 그만큼 시간이 지나야함
 *
 * // 생각해둬야 할것
 * 1. 다리를 지나는 트럭은 1초에 1만큼 움직이는데 이것을 일일히 구현할 필요가 있을까? -> 하지만 다리가 길어질 경우 첫번째 트럭이 다 지나고 나서 두번째부터 들어올수있는 트럭이 생길수 있다.
 */

function solution(bridge_length, weight, truck_weights) {
	const bridgeTruck = Array(bridge_length).fill(0); // 다리를 지나고 있는 트럭 (큐)
	const waitTruck = [...truck_weights]; // 대기 트럭 (큐)
	const arriveTruck = []; // 다리를 지난 트럭 (스택)
	let bridge_weight = 0; // 현재 다리에 있는 트럭의 무게
	let time = 0; // 경과 시간

	while (arriveTruck.length !== truck_weights.length) {
		moveTrucks(); // 트럭들을 한 칸씩 이동
		if (canEnterBridge()) {
			// 다리에 진입 가능한 트럭이 있다면 진입
			const truck = waitTruck.shift();
			bridgeTruck.push(truck);
			bridge_weight += truck;
		} else {
			bridgeTruck.push(0); // 다리에 진입할 수 없으면 0을 추가하여 트럭의 이동을 유지
		}
		time++;
	}

	return time;

	// functions

	/**
	 * 다리를 지나고 있는 트럭들을 한 칸씩 이동
	 */
	function moveTrucks() {
		const bridgeTruckTop = bridgeTruck.shift();
		if (bridgeTruckTop !== 0) {
			// 다리를 지나간 트럭은 스택에 추가
			arriveTruck.push(bridgeTruckTop);
			bridge_weight -= bridgeTruckTop;
		}
	}

	/**
	 * 다리에 진입 가능한 트럭이 있는지 확인
	 */
	function canEnterBridge() {
		const nextTruck = waitTruck[0]; // 다음 대기 트럭
		return nextTruck && bridge_weight + nextTruck <= weight; // 다리에 진입 가능한지 확인
	}
}
