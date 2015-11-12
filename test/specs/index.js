'use strict';

module.exports = {

  'タイトルテスト' : function (browser) {
    browser

      //ブラウザオープン
      .url('http://localhost:9100')
      .pause(100)

      //タイトルが正常かテスト
      .assert.title('20151111勉強会')

      //ブラウザ閉じる
      .end();
  },

  'クリックテスト' : function (browser) {
    browser

      //ブラウザオープン
      .url('http://localhost:9100')

      //#buki要素が作成されるまで待つ
      .waitForElementPresent('#buki', 1000)

      //シュータークリック
      .click('.nav-1__item > a[href="#shooter"]')

      //0.5秒待つ
      .pause(500)

      //要素のCSSプロパティが正常に変わっているかテスト
      .assert.cssProperty("#buki", "position", "relative")
      .assert.cssProperty(".buki-item.all:not(.shooter)", "display", "none")
      .assert.cssProperty(".buki-item.all.shooter", "display", "block")

      //チャージャークリック
      .click('.nav-1__item > a[href="#charger"]')

      //0.5秒待つ
      .pause(500)

      //要素のCSSプロパティが正常に変わっているかテスト
      .assert.cssProperty(".buki-item.all:not(.charger)", "display", "none")
      .assert.cssProperty(".buki-item.all.charger", "display", "block")

      //ブラウザ閉じる
      .end();
  }

};
