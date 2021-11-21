module.exports = {
  "branches": ["master", {name: 'beta', prerelease: true}],
  "plugins": [
    '@semantic-release/commit-analyzer', 
    '@semantic-release/release-notes-generator', 
    ["@semantic-release/npm", {
      "npmPublish": false,
    }],
    '@semantic-release/github',
    ['@semantic-release/git', {
      // "assets": ["dist/**/*.{js,css}", "docs", "package.json"],
      "message": "chore(release): ${nextRelease.version}"
    }]
  ]
}