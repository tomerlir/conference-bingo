// function to shuffle and build the bingo board options
export const shuffleBingoOptions = (bingoOptions) => {
  for (let i = bingoOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [bingoOptions[i], bingoOptions[j]] = [bingoOptions[j], bingoOptions[i]];
  }

  // Adding free option to central tile
  bingoOptions.splice(12, 0, "Conference Bingo");

  const board = bingoOptions.map((val, index) => ({
    label: val,
    value: index,
    marked: index === 12 ? true : false,
  }));

  return board;
};

export function updateMarked(arr, val) {
  const tempArr = [...arr];
  const index = tempArr.findIndex((obj) => obj.value === val);
  tempArr[index].marked = true;
  return tempArr;
}

// function to choose random question for modal
export const returnRandomQuestion = (questions) => {
  return questions[Math.floor(Math.random() * questions.length)];
};

export function countMarkedLines(arr) {
  let totalLinesMarked = 0;

  // checking if row line fully marked
  for (let i = 0; i <= 24; i += 6) {
    if (!arr[i].marked) break;
    else if (i === 24) totalLinesMarked++;
  }

  for (let i = 4; i <= 20; i += 4) {
    if (!arr[i].marked) break;
    else if (i === 20) totalLinesMarked++;
  }

  // checking if diagonal line fully marked
  for (let i = 0; i <= 20; i += 5) {
    for (let j = i; j <= i + 4; j++) {
      if (!arr[j].marked) break;
      else if (j === i + 4) totalLinesMarked++;
    }
  }

  // checking if column line fully marked
  for (let i = 0; i <= 4; i++) {
    for (let j = i; j <= i + 20; j += 5) {
      if (!arr[j].marked) break;
      else if (j === i + 20) totalLinesMarked++;
    }
  }

  return totalLinesMarked;
}
