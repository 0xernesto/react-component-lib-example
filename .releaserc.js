module.exports = {
	branches: "main",
	repositoryUrl:
		"https://x-access-token:${GH_TOKEN}@github.com/0xernesto/react-widget-example.git",
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		[
			"@semantic-release/git",
			{
				message:
					"chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
			},
		],
		"@semantic-release/npm",
		"@semantic-release/github",
	],
};
