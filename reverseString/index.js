// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'

function reverse(str) {

	let arrayReversed = ""

	for (let i = 0; i < str.length; i++) {
		const char = str[i]

		arrayReversed = char + arrayReversed
		console.log(arrayReversed)
		console.log(arrayReversed)


	}
	return arrayReversed




}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup('bdd');
const { assert } = chai;

describe('String Reversal', () => {
	it('reverse() correctly reverses string', () => {
		assert.equal(reverse('viren'), 'neriv');
		assert.equal(reverse('patil'), 'litap');
	});
});

mocha.run();
