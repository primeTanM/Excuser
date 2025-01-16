var excuses_eng = require('./Excuses_eng');
var excuses_pt_br = require('./Excuses_pt_br');
var excuses_ben = require('./Excuses_ben');
var excuses_hin = require('./Excuses_hindi');
var excuses_french = require('./excuses_french1');
var excuses_tr = require('./excuses_tr');
var excuses_fa = require('./Excuses_fa');

module.exports = {
    getRandom: function getRandom(numberOfExcuses, language) {
        var excuses = GetExcuseByLanguage(language);
        var limit = numberOfExcuses > excuses.length ? excuses.length : numberOfExcuses;
        var out = new Array(limit);
        var excuse;

        for (var i = 0; i < limit; i++) {
            do {
                excuse = excuses[Math.floor(Math.random() * excuses.length)];
            } while (out.indexOf(excuse) > -1);
            out[i] = excuse;
        }
        return out;
    },

    getByID: function getByID(id, language) {
        var excuses = GetExcuseByLanguage(language);
        for (var i = 0; i < excuses.length; i++) {
            if (excuses[i].id == id) {
                return excuses[i];
            }
        }
        return null;
    },

    getByCategory: function getByCategory(category, numberOfExcuses, language) {
        var excuses = GetExcuseByLanguage(language);
        var categoryExcuses = excuses.filter(function (excuse) {
            return excuse.category === category;
        });

        var limit = numberOfExcuses > categoryExcuses.length ? categoryExcuses.length : numberOfExcuses;

        var out = new Array(limit);
        var excuse;

        for (var i = 0; i < limit; i++) {
            do {
                excuse = categoryExcuses[Math.floor(Math.random() * categoryExcuses.length)];
            } while (out.indexOf(excuse) > -1);
            out[i] = excuse;
        }
        return out;
    }
}

function GetExcuseByLanguage(language) {
    if (language && language === 'pt-br')
        return excuses_pt_br;
    else if (language && language === 'ben')
        return excuses_ben;
    else if (language && language === 'hin')
        return excuses_hin;
    else if (language && language ==='fren')
        return excuses_french;
    else if (language && language === 'tr')
        return excuses_tr;
    else if (language && language === 'fa')
        return excuses_fa;
    return excuses_eng;
}
