const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV25KiSBT8l3ptZ+QqaERHLILiBRFEvG3MQwEFFnKzKFTo8N830O7oftiZ7eWpoqDyZGXmObyBLMclmqMaDN5AQfAFUtQuaV0gMADDKgwRAR0QQArBAEDVGe5Hpq97QR685KYgRb6nrDWXNHWa7vZxwfdUTp6r7v4V3DugqLwE+38ADBm/f1sGEx6jVSMv92s823Tt8W7LNtIxNXaee11GYdFTV6dXcG8RISY4i0bFEaWIwGSOagti8j36aLKrEi6pWctPdG/qvVgIbRsxlkcao4hSY3FW7XNift4q36Nvzxak7/jsOdj39tvG6cYcmjhn27j2VzeaKVnMHHm81s54+qRf4ihDwTRAGcW0/rbutaWJTjSTunChLRTmENY21qDRrLr1WmYul6vt9qcs74yYb+quJkZ3gnSFpWrKHDlzLGRVgvzspqmu33RFrjR4d4NzA5++ErfIR1ZO/0d322hsaFWqIa+Grv9C/c1CcXtDgclnknGeB8m+rgyXbYyU+R797lTDgsLxq4031RVec6LTMhwVk9k14K3lPH2RZ7GcY3bkyJ/0Ia3In1iyt94+TGu2GQ61KZovjRtvBizcjAVzjCf55DAuo41wLpmxeew3cb493Mq4seuXo8ydSDVxYhHnBC8hltdj3fGWuoCG0evjRidUTwMwYO8dQFCES0ogxXn22JOZDoDBxUE+QfQhL0jPciPptb1FN4nlUcIyXOFyJ7Oviaa6nR6vejI04qUFL8Ir6ICC5D4qSxRMcElzUi9QWcIIlWDw968OyNCNPo1ry/FsB4SYlNTNqiLJYfDh6sdL6Pt5lVGnzny1XSACBsznNqIUZ1HZ6lhlkPhHfEHqEdISDEKYlOjeAQG6YB+1eIDmcb66ctnKQ4eTlpFDQSRot5SPefb8xPM9iPi+94Pt9eQfgueJP/o9kf3BSYKHhH7gs7APOgC/90x75rcWMrJmzcPuQRJ2zVY6RKEoeH7EahZbPmx4ao8ICsCAkgp1gAf9U1Ws8xPK/oBrkuLMLhiVzER7HjMk248sOKfamuy/4D49BYO3zzml5kGLt58pq/Fm2wMdkD4iiNubc7zU68uszEqcPBDEv8qf11ZIWBQ/M0Rb3HfR2xMBohAnZdu71o5Nzr4+mq6FSip1XbEjRY0U8GnSR9qfaaJnxzwLNpTMJkxItqAnecGLKw31Lpy1srWSmTjj3Lrom+vrv4CAAcCTUDY38hFra5Pdao28iFJ6Pc3CKp9eUdSbHv16q9hknpWjUY/I5EyFKL4elt3TxHT9YDKcL7CdBtyi4LAeN3A95jX7ta32DMvXYhMn4fphheWuTip+WtFRJU6oG+oSWvO9RoyntbQVAvuwUg8Zt3NyZ6aONWNz9cfSOTF4jnbX4c6BSrjAmyvvD8+jUFGeffiYA8n7/MWPDnl7j1aI0WOcZbC16L/M+Zpy5t75gvE+IH+TpKEHTzGsRnrV+LwIxcY4WJr54tp8Rfox4yqSOWSOUJNuiQ/u918dUCSQhjlJ299vFpAcB6ADElhS5bNR1zhFJYVpAQasxIs815N4qQPSWikKh0L60d9AaR+DC8D9H67BvQz7BwAA',
    PREFIXE: process.env.PREFIX || "#",
    OWNER_NAME: process.env.OWNER_NAME || "TENOR25",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "+237698181728",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

