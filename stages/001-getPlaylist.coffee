Q = require '../Q'
url = require 'url'
path = require 'path'
got = require 'got'
fs = require 'fs'

module.exports = (params) ->
	res = await got params.url

	if res.statusCode != 200
		throw Error "fetch playlist statusCode #{res.statusCode}"

	file = (''+res.body).split('\n').filter (e) ->
		e.length > 0

	links = []

	for i, k in file
		if i[0] != '#'
			links.push
				link: i,
				index: k

	console.log links

	if links.length > 1
		console.log "removing links"
		links.length = 1

	state.tsaudioURL = links[0].link


	fs.writeFileSync path.resolve(state.tempdir, "playlist.m3u8"), file[...(links[0].index)].concat("audio.m3u8").join('\n')
	console.log("playlist", res.headers["set-cookie"] ? 'null')
	state.cookie = res.headers["set-cookie"][0].split(';')[0]

	setTimeout -> next(state)