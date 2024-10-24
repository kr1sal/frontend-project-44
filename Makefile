# MakeFile
install: # Установить зависимости
	npm ci

brain-game: # Запустить brain-games.js
	node bin/brain-games.js

publish: # Publish is publish
	npm publish --dry-run

lint: # Eslint
	npx eslint .
