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
        content: '',
        image: imgUrl('user_profil_marvin.jpg'),
        imageAlign: 'top',
        title: 'Marvin Heimbrodt',
      },
      {
        content: 'Please feel free to contribute! <br />Checkout the insctructions at github.',
        title: 'Contribute',
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
            <p>This project is maintained by .</p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = about;
