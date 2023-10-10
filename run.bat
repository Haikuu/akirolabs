@ECHO OFF
cd ./generator
START /B .\gradlew.bat bootRun
cd ../validator
START /B .\gradlew.bat bootRun
cd ../frontend
START /B npm run up
