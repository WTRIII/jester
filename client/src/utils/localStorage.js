export const getSavedJestIds = () => {
  const savedJestIds = localStorage.getItem('saved_jests')
    ? JSON.parse(localStorage.getItem('saved_jests'))
    : [];

  return savedJestIds;
};

export const saveJestIds = (jestIdArr) => {
  if (jestIdArr.length) {
    localStorage.setItem('saved_jests', JSON.stringify(jestIdArr));
  } else {
    localStorage.removeItem('saved_jests');
  }
};

export const removeJestId = (jestId) => {
  const savedJestIds = localStorage.getItem('saved_jests')
    ? JSON.parse(localStorage.getItem('saved_jests'))
    : null;

  if (!savedJestIds) {
    return false;
  }

  const updatedSavedJestIds = savedJestIds?.filter((savedJestId) => savedJestId !== jestId);
  localStorage.setItem('saved_jests', JSON.stringify(updatedSavedJestIds));

  return true;
};
