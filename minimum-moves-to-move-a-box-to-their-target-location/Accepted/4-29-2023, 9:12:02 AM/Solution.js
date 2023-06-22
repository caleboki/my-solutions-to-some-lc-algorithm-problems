// https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location

/**
 * @param {character[][]} grid
 * @return {number}
 */
// var minPushBox = function(grid) {
// 	const n = grid.length
// 	const m = grid[0].length

// 	const directions = [
// 		[1, 0],
// 		[0, 1],
// 		[-1, 0],
// 		[0, -1],
// 	]

// 	const person = { x: 0, y: 0 }
// 	const box = { x: 0, y: 0 }
// 	const exit = { x: 0, y: 0 }

// 	for (let y = 0; y < n; y++) {
// 		for (let x = 0; x < m; x++) {
// 			if (grid[y][x] === 'S') {
// 				person.x = x
// 				person.y = y
// 			} else if (grid[y][x] === 'B') {
// 				box.x = x
// 				box.y = y
// 			} else if (grid[y][x] === 'T') {
// 				exit.x = x
// 				exit.y = y
// 			}
// 		}
// 	}

// 	const canPersonMoveToLocation = (startX, startY, endX, endY, boxX, boxY) => {
// 		return false

// 	}

// 	const v = []
// 	const q = [[box.x, box.y, person.x, person.y, 0]]

// 	while (q.length) {
// 		const [boxX, boxY, personX, personY, pushCount] = q.shift()

// 		if (boxX === exit.x && boxY === exit.y) return pushCount

// 		const boxKey = boxX + boxY * m
// 		const personKey = personX + personY * m
		

// 	}



//   return -1
    
// };

var minPushBox = function (grid) {
	const n = grid.length;
	const m = grid[0].length;

	const directions = [
		[1, 0],
		[0, 1],
		[-1, 0],
		[0, -1],
	];

	const person = { x: 0, y: 0 };
	const box = { x: 0, y: 0 };
	const exit = { x: 0, y: 0 };

	for (let y = 0; y < n; ++y) {
		for (let x = 0; x < m; ++x) {
			if (grid[y][x] === 'S') {
				person.x = x;
				person.y = y;
			} else if (grid[y][x] === 'B') {
				box.x = x;
				box.y = y;
			} else if (grid[y][x] === 'T') {
				exit.x = x;
				exit.y = y;
			}
		}
	}

	function canPersonMoveToLocation(startX, startY, endX, endY, boxX, boxY) {
		const v = [];
		const q = [[startX, startY]];
		v[startX + startY * m] = 1;
		while (q.length) {
			const [x, y] = q.shift();
			if (x === endX && y === endY) {
				return true;
			}
			for (const [mx, my] of directions) {
				const nx = mx + x;
				const ny = my + y;
				const nkey = nx + ny * m;
				const nextSpot = grid[ny]?.[nx] ?? '#';
				if (!v[nkey] && nextSpot !== '#') {
					v[nkey] = 1;
					if (nx !== boxX || ny !== boxY) {
						q.push([nx, ny]);
					}
				}
			}
		}
		return false;
	}

	const v = [];
	const q = [[box.x, box.y, person.x, person.y, 0]];

	while (q.length) {
		const [boxX, boxY, personX, personY, pushCount] = q.shift();

		if (boxX === exit.x && boxY === exit.y) {
			return pushCount;
		}

		const boxKey = boxX + boxY * m;
		const personKey = personX + personY * m;

		if (v[boxKey] && v[boxKey][personKey]) continue;

		if (!v[boxKey]) v[boxKey] = {};
		v[boxKey][personKey] = 1;

		for (const [moveX, moveY] of directions) {
			const nextBoxX = boxX + moveX;
			const nextBoxY = boxY + moveY;
			const nextSpot = grid[nextBoxY]?.[nextBoxX] ?? '#';
			if (nextSpot !== '#') {
				//check if person can be positioned from the other side of the box
				const targetX = boxX - moveX;
				const targetY = boxY - moveY;
				if (canPersonMoveToLocation(personX, personY, targetX, targetY, boxX, boxY)) {
					q.push([nextBoxX, nextBoxY, targetX, targetY, pushCount + 1]);
				}
			}
		}
	}
	return -1;
};