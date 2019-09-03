const crypto = require('crypto')
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
module.exports = {
    calculateAverage: function (arr) {
        var sum = 0
            count=0
        for(var key in arr){
            count++
            sum+= arr[key] 
        }
        return sum/count
    },

    assignTag: function(average){
       if(average < 6)
            return "Danger : élève en naufrage !"
       else if(average >= 6 && average < 12)
            return "Attention : élève en apnée !"
       else if(average >= 12 && average < 14)
            return "Bravo : élève à flot !"
       else
            return "Félicitations : élève  au sec !"
    },

    encrypt: function(text) {
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    },

    decrypt: function (text) {
        let iv = Buffer.from(text.iv, 'hex');
        let encryptedText = Buffer.from(text.encryptedData, 'hex');
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }
}