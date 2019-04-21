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
  return siteConfig.baseUrl + this.props.config.docsUrl + (language ? language + '/' : '') + doc;
}

function imgUrl(img) {
    return siteConfig.baseUrl + 'img/' + img;
}

class about extends React.Component {
  render() {
    let language = this.props.language || '';
    const supportLinks = [
      {
        content: 'admindojo is a prove of concept of a game style, interactive Linux tutorial for junior sysadmins.  <br />' +
                  'It utilizes third-party tools to provide a free, real-world training enviroment for everyboy.<br >' +
        '<br >' +
        '<br >' +
        'The teaching enviroment consists of the following tools:' +
        '<br >' +
        '<ul>' +
          '<li><a href="https://www.inspec.io/">InSpec by Chef</a> - Compliance testing framework - License: Apache License 2.0</li>' +
          '<li><a href="https://www.vagrantup.com/">Vagrant by HashiCorp</a> (Easy-to-use workflow to build VM environments- License: MIT</li>' +
          '<li><a href="https://www.virtualbox.org/">Virtualbox by Oracle</a> - Powerful virtualization for enterprise as well as home use - License: GPLv2</li>' +
        '</ul>' +

        '<i>admindojo does not own, sell and distribute these tools and is not associated or connected with any of these tools\/companies.</i><br >' +

        '<br ><br > ' +

        'admindojo is a hobby project <a href="https://github.com/6uhrmittag">by marvin heimbrodt</a>.' +
        '<br >' +

        'Feeback is highly appreciated!' +
        '<br >' +
        'Create an <a href="https://github.com/admindojo/admindojo-training/issues/new" target="_blank">GitHub Issue</a> or send a mail: feedback@admindojo.org' +
        '<br ><br ><br >',
        title: 'about admindojo',
      },

    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
        <GridBlock contents={supportLinks} layout="threeColumn" />

        </Container>
      </div>



    );
  }
}

module.exports = about;
