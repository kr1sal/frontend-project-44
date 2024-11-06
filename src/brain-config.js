const difficultyModes = {
  easy: 10,
  normal: 50,
  hard: 100,
  insane: 1000,
};

const getDifficultyModes = () => difficultyModes;

const getDifficultyModesNames = () => Object.keys(difficultyModes);

const getDifficultyMode = (difficultyModeName) => {
  const difficultyMode = {
    name: undefined,
    value: undefined,
  };
  const normalizedDifficultyModeName = difficultyModeName.toLowerCase();
  if (Object.hasOwn(difficultyModes, normalizedDifficultyModeName)) {
    difficultyMode.name = normalizedDifficultyModeName;
    difficultyMode.value = difficultyModes[normalizedDifficultyModeName];
    return difficultyMode;
  }
  return undefined;
};

const getDifficultyModeName = (difficultyMode) => difficultyMode?.name;

const getDifficultyModeValue = (difficultyMode) => difficultyMode?.value;

const defaultDifficultyMode = getDifficultyMode('normal');

const defaultRoundsCount = 3;

const defaultUserName = 'Anon';

export {
  getDifficultyModes, getDifficultyModesNames, getDifficultyMode, getDifficultyModeName,
  getDifficultyModeValue, defaultUserName, defaultDifficultyMode, defaultRoundsCount,
};
