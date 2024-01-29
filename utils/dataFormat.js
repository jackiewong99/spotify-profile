export const getPitchKey = note => {
  let key = '';

  switch (note) {
    case 0:
      key = 'C';
      break;

    case 1:
      key = 'C♯';
      break;

    case 2:
      key = 'D';
      break;

    case 3:
      key = 'D♯';
      break;

    case 4:
      key = 'E';
      break;

    case 5:
      key = 'F';
      break;

    case 6:
      key = 'G♭';
      break;

    case 7:
      key = 'G';
      break;

    case 8:
      key = 'A♭';
      break;

    case 9:
      key = 'A';
      break;

    case 10:
      key = 'B♭';
      break;

    case 11:
      key = 'B';
      break;

    default:
      return -1;
  }

  return key;
};
