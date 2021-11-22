module.exports = {
  "branches": [
    {name: 'master'}, // `channel` is undefined so the default distribution channel will be used
    {name: 'next', channel: 'channel-next'}, // `channel` is built with the template `channel-${name}`
  ],
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