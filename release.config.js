module.exports = {
  tagFormat: 'v${version}',
  "branches": [
    {name: 'master'}, // `channel` is undefined so the default distribution channel will be used
    // {name: 'pre/rc', channel: 'pre/rc', prerelease: 'rc'}, // `prerelease` is built with the template `${name.replace(/^pre\\//g, "")}`
    {name: 'beta', channel: 'beta', prerelease: 'beta'}, // `prerelease` is set to `beta` as it is the value of `name`
  ],
  "plugins": [
    '@semantic-release/commit-analyzer', 
    '@semantic-release/release-notes-generator', 
    ["@semantic-release/npm", {
      "npmPublish": false,
    }],
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "docs/CHANGELOG.md"
      }
    ],
    '@semantic-release/github',
    ['@semantic-release/git', {
      "assets": [],
      "message": "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
    }]
  ]
}