/**
 * Created by Afro on 5/10/2017.
 */
(function () {
    'use strict';

    var currencies = {
        'afghani': '؋',
        'baht': '฿',
        'balboa': 'B/.',
        'bolivar': 'Bs',
        'bolíviano': '$b',
        'cedi': '¢',
        'colon': '$',
        'cordoba': 'C$',
        'euro': '€',
        'denar': 'ден',
        'dinar': 'Дин.',
        'dollar': '$',
        'dong': '₫',
        'forint': 'Ft',
        'franc': 'CHF',
        'guarani': 'Gs',
        'guilder': 'ƒ',
        'hryvnia': '₴',
        'kip': '₭',
        'koruna': 'Kč',
        'krona': 'kr',
        'krone': 'kr',
        'kuna': 'kn',
        'lek': 'Lek',
        'lempira': 'L',
        'leu': 'lei',
        'lev': 'лв',
        'lira': '₺',
        'manat': 'ман',
        'marka': 'KM',
        'metical': 'MT',
        'naira': '₦',
        'peso': '$U',
        'pound': '£',
        'pula': 'P',
        'quetzal': 'Q',
        'rand': 'R',
        'real': 'R$',
        'renminbi': '¥',
        'rial': '﷼',
        'riel': '៛',
        'ringgit': 'RM',
        'riyal': '﷼',
        'ruble': '₽',
        'rupee': '₨',
        'rupiah': 'Rp',
        'shekel': '₪',
        'shilling': 'S',
        'sol': 'S/.',
        'som': 'лв',
        'tenge': 'лв',
        'tughrik': '₮',
        'won': '₩',
        'yen': '¥',
        'zloty': 'zł'
    };

    angular
        .module('ngCurrencyName', [])

        .filter('currencyName', function ($filter, $locale) {
            var numberFilter = $filter('number'),
                formats = $locale.NUMBER_FORMATS,
                pattern = formats.PATTERNS[1];

            return function (amount, symbolName, decimalPoints, suffix) {
                if (!Number(amount)) {
                    amount = 0
                }
                if (angular.isUndefined(decimalPoints) || !Number(decimalPoints)) {
                    decimalPoints = 2
                }
                if (angular.isUndefined(symbolName)) {
                    var symbol = formats.CURRENCY_SYM;
                }
                else if (currencies[symbolName] === undefined) {
                    console.error('The symbol name you requested is not available');
                    symbol = '';
                }
                else {
                    symbol = currencies[symbolName];
                }

                amount = Math.abs(amount);

                var number = numberFilter(amount, decimalPoints);

                suffix = suffix === undefined ? false : suffix;

                if (suffix) {
                    number = number + symbol;
                    return number
                }
                else {
                    number = symbol + number;
                    return number
                }
            }
        });
})();

