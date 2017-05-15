# Angular Currency Name
Formats an input using the shortname of any of the world currencies provided. 

## Description
An angular filter that formats an input using the shortname of any of the world currencies provided, then suffixes or prefixes the input with the symbol. 
When no currency symbol is provided, default symbol for current locale is used.
Formats input as currency (e.g ₦12,3445, 12,450.00₦)

## Usage

### In HTML Template Binding
    {{ currency_expression | currencyName:shortName[:decimalPoints[:suffixSymbol]] }}

### In Controller
    $filter('currency')(amount, shortName[, decimalPoints[, suffixSymbol]])

#### Paramaters

Param         | Type    | Details
:-----------  | :------ | :------
amount        | number  | Input to filter.
shortName     | string  | Short name of currency to be displayed. e.g 'naira', 'euro', 'dollar' Falls back to [ng.$locale](https://code.angularjs.org/1.2.1/docs/api/ng.$locale).
decimalPoints | number  | Number of decimal places to round the number to. Falls back to [ng.$locale](https://code.angularjs.org/1.2.1/docs/api/ng.$locale)
suffixSymbol  | boolean or string | If set to true the currency symbol will be placed after the amount.

#### Returns

String: Formatted number.

### Use cases in controllers

    // With all parameters
    expect(currency(1234.4239, 'naira', 1, true)).toEqual('1,234.4₦');

    // Parameters without suffix
    expect(currency(1234.4239, 'pound', 2)).toEqual('€1,234.42');

    // With missing fraction size
    expect(currency(1234.4239, 'dollar', true)).toEqual('1,234.42$');

    // With fraction size only
    expect(currency(1234.4239, 'baht', 3)).toEqual('฿1,234.424');

    // Only with symbol
    expect(currency(1234.4239, 'naira')).toEqual('₦1,234.42');

### Example

#### HTML Template Binding

    <span ng-bind="price | currencyName:'pound':true"></span> <!-- 1234.42€ -->
    <span ng-bind="price | currency:'naira': 3"></span> <!-- ₦1234.423-->

#### JavaScript

    angular.module('app', ['ngCurrencyName']).
        controller('Ctrl', function ( $scope, $filter ) {
            var currency = $filter('currencyName');
            $scope.price = currency(1234.4239, 'pound', 0, true); // 1234€
            $scope.price = currency(1234.4239, 'dollar', 2, false); // $1234.42
        });


## Install

### Via bower

    bower install --save angular-currency-name
### Via NPM

    npm i --save angular-currency-name

Include `src/angular-currency-name.js` or `dist/angular-currency-name.min.js` to your project.

    <script src="/bower_components/angular-currency-name/dist/angular-currency-name.min.js"></script>

Don't forget to add `ngCurrencyName` module to your app's dependecies.

### List of available currencies

Short Name   | Symbol
:----------- | :-----
Afghani      |   ؋
Baht         |   ฿
Balboa       |   B/.
BeliDollar   |   BZ$
Bolivar      |   Bs
Bolíviano    |   $b
Cedi         |   ¢
Colon        |   $
Cordoba      |   C$
Euro         |   €
Denar        |   ден
Dinar        |   Дин
Dollar       |   $
DomPeso      |   RD$
Dong         |   ₫
Forint       |   Ft
Franc        |   CHF
Guarani      |   Gs
Guilder      |   ƒ
Hryvnia      |   ₴
IndiaRupee   |   ₹
Jdollar      |   J$
Kip          |   ₭
Koruna       |   Kč
Krona        |   kr
Krone        |   kr
Kuna         |   kn
Lek          |   Lek
Lempira      |   L
Leu          |   lei
Lev          |   лв
Lira         |   ₺
Manat        |   ман
Marka        |   KM
Metical      |   MT
Naira        |   ₦
NewDollar    |   NT$
Peso         |   $
PhilPeso     |   ₱
Pound        |   £
Pula         |   P
Quetzal      |   Q
Rand         |   R
Real         |   R$
Rial         |   ﷼
Riel         |   ៛
Ringgit      |   RM
Riyal        |   ﷼ 
Ruble        |   ₽
Rupee        |   ₨
Rupiah       |   Rp
Shekel       |   ₪
Shilling     |   S
Sol          |   S/.
Som          |   лв
Tenge        |   лв
TTD          |   TT$
Tughrik      |   ₮
UruPeso      |   $U
Won          |   ₩
Yen          |   ¥
Yuan         |   ¥
ZimDollar    | 	 Z$
Zloty        |   zł

## Pull requests
If I've missed out on any currency or you think I made a mistake in any of the available currencies, please send a pull request. More ideas are welcome.

## License
MIT License


