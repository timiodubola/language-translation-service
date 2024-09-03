# Language Translation Service

The service provides an endpoint hosted locally that processes translation requests. It validates and cleans the input text, ensuring it is in English before translating it into the target language.

## System Design Components
<img width="1101" alt="Screenshot 2024-09-03 at 9 48 08 PM" src="https://github.com/user-attachments/assets/75bdf8b8-7217-4d02-b884-77a9132f7179">

The translation service was written in Nodejs.
I used the [SpellChecker](https://www.npmjs.com/package/spellchecker) and [isWord](https://www.npmjs.com/package/is-word) libraries for spell checking and word validation. For the translation service, I utilized a local instance of [LibreTranslate](https://github.com/LibreTranslate/LibreTranslate).

<br>
<br>
<img width="1564" alt="Screenshot 2024-09-03 at 9 32 21 PM" src="https://github.com/user-attachments/assets/83620c70-7d9d-4994-97c0-dba1617f970a">
Screenshot of virtual envrioment of LibreTranslate created running locally on (http://127.0.0.1:5000)

<br>
<br>
 
## Install and Run
You can run the transaltion service server by completing the process below.
- Make sure you have Node.js (v14 or higher) and Python (v3.8 or higher) installed on your system.
  
- Set up the LibreTranslate server by following the instructions (https://github.com/LibreTranslate/LibreTranslate)
  
- Create a .env file in your project directory . Add the following line to set the translation service.
  
```
TRANSLATION_SERVICE_ENV=http://127.0.0.1:5000
```

After setting the above up, you can simply run your application.

   ```
   npm install
   npm start
   ```

Then open a web browser to http://localhost:3000
<br>
<br>

## Screenshot of results 

Excel sheet results 

<img width="483" alt="Screenshot 2024-09-03 at 10 04 38 PM" src="https://github.com/user-attachments/assets/cfe7cfbf-fae8-47b5-8bf6-83d441284bee">
<img width="483" alt="Screenshot 2024-09-03 at 10 04 47 PM" src="https://github.com/user-attachments/assets/5d5fec33-7c72-43d3-a493-0145aaeef94d">
<img width="483" alt="Screenshot 2024-09-03 at 10 04 51 PM" src="https://github.com/user-attachments/assets/a55239f7-6101-4df5-828e-ff4fb09896c9">


