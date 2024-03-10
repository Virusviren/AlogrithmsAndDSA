// --- Directions
// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.
// --- Examples
// chunk(["a", "b", "c", "d"], 2) --> [[ "a", "b"], ["c", "d"]]
// chunk([0, 1, 2, 3, 4, 5], 4) -->  [[0, 1, 2, 3], [4, 5]]

function chunk(array, size) {

  let arrayChunk = []
  let finalArray = []

  for (let i = 0; i < array.length; i++) {
    arrayChunk.push(array[i])
    console.log(first)
    if (i === array.length - 1 || arrayChunk.length % size === 0) {
      finalArray.push(arrayChunk)
      arrayChunk = []
    }


  }



  return finalArray
}




function chunk(array, size) {
  let res = [];

  // Loop through each element of the input array
  for (let i = 0; i < array.length; i++) {
    const item = array[i]; // Get the current element

    // Get the last chunk in the result array
    const last = res[res.length - 1];

    // Check if the last chunk doesn't exist or if its length is equal to the specified size
    if (!last || last.length === size) {
      res.push([item]); // If true, create a new chunk with the current element
    } else {
      last.push(item); // If false, add the current element to the last chunk
    }
  }

  return res; // Return the result array containing chunks of the input array
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

mocha.setup("bdd");
const { assert } = chai;

describe("Array Chunking", () => {
  it("chunk() works", () => {
    let arr = ["a", "b", "c", "d"];
    let chunked = chunk(arr, 2);
    assert.deepEqual(chunked, [["a", "b"], ["c", "d"]]);

    arr = [0, 1, 2, 3, 4, 5];
    chunked = chunk(arr, 4);
    assert.deepEqual(chunked, [[0, 1, 2, 3], [4, 5]]);
  });
});

mocha.run();
