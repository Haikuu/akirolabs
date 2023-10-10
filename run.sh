#!/bin/bash
cd ./generator
./gradlew bootRun &
cd ../validator
./gradlew bootRun &
cd ../frontend
npm run up &
