# SIMPLE HTTP SERVICE
Example of http service with starting arguments / parameters from (shell) CLI:
```
--config '{"object":true}'
--port 12345
--id some_text_or_id
```
`node` start:
```
node index.js --config '{}' --port 12345 --id some_text
```

`npm` start:
```
npm start -- --config '{}' --port 12345 --id some_text
```
