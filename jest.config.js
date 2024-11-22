export default {
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    testEnvironment: "jest-environment-node",
    "jest": {
        "collectCoverage": true,
        "coverageDirectory": "coverage",
        "collectCoverageFrom": [
            "src/ceil.js",
            "src/divide.js",
            "src/filter.js",
            "src/isEmpty.js",
            "src/map.js",
            "src/toNumber.js"
        ],
        "testMatch": ["**/__tests__/jest/*.test.js"]
    }
};
