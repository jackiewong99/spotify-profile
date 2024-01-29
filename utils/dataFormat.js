export const formatFollowersCount = count => {
  const followers = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return followers;
};

// Format song duration from ms to "00 min : 00 sec"
export const formatDuration = millis => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

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
