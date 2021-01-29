/*
 * DAY 7
 *
 * Rules that specify the required contents for 9 bag types:
 *  - light red bags contain 1 bright white bag, 2 muted yellow bags.
 *  - dark orange bags contain 3 bright white bags, 4 muted yellow bags.
 *  - bright white bags contain 1 shiny gold bag.
 *  - muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
 *  - shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
 *  - dark olive bags contain 3 faded blue bags, 4 dotted black bags.
 *  - vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
 *  - faded blue bags contain no other bags.
 *  - dotted black bags contain no other bags.
 *
 * You have a shiny gold bag. If you wanted to carry it in at least one other bag, how many
 * different bag colors would be valid for the outermost bag?
 * So, in this example, the number of bag colors that can eventually contain at least one shiny
 * gold bag is 4.
 *
 * How many bag colors can eventually contain at least one shiny gold bag?
 */

import rules from './data.js';

const rulesArr = rules.split(/\n/);

let outermostBags = [];
rulesArr.forEach(rule => {
  outermostBags.push(rule.split(' ')[0] + ' ' + rule.split(' ')[1]);
});

let innerBags = [];
rulesArr.forEach(rule => {
  innerBags.push(rule.slice(rule.indexOf('contain') + 8));
});

// Store possible colors starting with the color target
let target = ['shiny gold'];
let index = 0;

while (index !== target.length) {
  let color = target[index];
  innerBags.filter((rule, i) => {
    if (rule.includes(color)) {
      target.push(outermostBags[i]);
    }
  });
  index++;
}

target.shift();

// Remove duplicate elements
let result = new Set(target);

console.log(
  'Part I. There are ' +
    result.size +
    ' bag colors that can eventually contain at least one shiny gold bag'
);

/*
 * DAY 7 (II)
 *
 *
 */

/*part 2 : 
A recursive function that will calculate the number of inner bags that are requierd within a single "shiny gold bag". In this function a color value is given as input and we traverse until we find a color which does not contain any inner bags. The count value is calculated and returned after the recursion
function findInnerBags(input, color) {
  If the outer color does not have any inner bag , return 0
  if (input[color] === 0) {
    return 0;
  } else {
    If it has , then iterate and pick out the color, keep traversing the list by finding out the inner bags within it
    let count = 0;
    //calculating count value - inner bags count
    for (let innerColor in input[color]) {
      count =
        count +
        input[color][innerColor] +
        input[color][innerColor] * findInnerBags(input, innerColor);
    }

    return count;
  }
}*/
