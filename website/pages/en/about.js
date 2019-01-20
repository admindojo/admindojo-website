/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function imgUrl(img) {
    return siteConfig.baseUrl + 'img/' + img;
}

class about extends React.Component {
  render() {
    let language = this.props.language || '';
    const supportLinks = [
      {
        content: 'admindojo a prove of concept of a game style, interactive Linux tutorial for sysadmins.  <br />' +
        'It\'s in a very early stage but the listed lessons are fully functional - give it a try!   <br ><br >' +
        'Feedback is highly appreciated! <a href="https://github.com/admindojo/admindojo/issues/new"> Please create an issue at GitHub</a><br ><br > ' +
        'admindojo is a personal project <a href="https://github.com/6uhrmittag">by marvin heimbrodt</a>' +
        '',
        title: 'About',
      },
      {
        content: ' ',
        title: ' ',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h2></h2>
            </header>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = about;
