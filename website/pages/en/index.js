/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + this.props.config.docsUrl + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('dojo.svg')} />
        <div className="inner">
          <ProjectTitle />
           <PromoSection>
            <Button href={`${siteConfig.baseUrl}getting-started`} >Start training</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);




const Screenshot = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <video controls muted >
         <source src="img/admindojo-intro.mp4" type="video/mp4" />
    </video>

  </div>
);const Discord = props => (
  <div
    className="productShowcaseSection paddingBottom paddingTop"
    style={{textAlign: 'center'}}>
   <iframe src="https://discordapp.com/widget?id=543324067936206858&theme=dark" width="350" height="500"
        allowTransparency="true" frameBorder="0"></iframe>

  </div>
);

const Featurelist = props => (
  <div
          className="productShowcaseSection paddingBottom"

      style={{textAlign: 'center'}}>
      <p>
      train real-world Linux administration tasks in preconfigured VirtualMachines
      </p>
  </div>

);

const ProjectDescription = props => (
  <div
          className="productShowcaseSection paddingBottom"

      style={{textAlign: 'center'}}>
      Train <b>real-world scenarios in real environments</b> using industry standard tools.
  </div>

);

const Features = props => (
  <Block layout="fourColumn" background="light">
    {[
      {
        content: 'This is the content of my feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature One',
      },
      {
        content: 'The content of my second feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature Two',
      },
    ]}
  </Block>
);

const Missions = props => (
  <Block layout="fourColumn" background="light">
    {[
      {
        content: '<a href="' + siteConfig.baseUrl + 'webserver-apache-ub18-basic-1' + '">Serve a static website with Apache</a> <br />Apache hardening(coming soon)',
        image: imgUrl('frontpage/browser.png'),
        imageAlign: 'top',
        title: 'Apache trainings',
      },
      {
        content: '<a href="' + siteConfig.baseUrl + 'storage-raid-create-lvl1-ub18' +'">Create a level 1 raid from empty disks</a> <br />Resize partitions(coming soon)',
        image: imgUrl('frontpage/terminal.png'),
        imageAlign: 'top',
        title: 'Sysadmin trainings',
      },
    ]}
  </Block>
);

 const TryOut = props => (
   <Block id="try">
     {[
       {
         content: 'Talk about trying this out',
         image: imgUrl('docusaurus.svg'),
         imageAlign: 'left',
         title: 'Try it Out',
       },
     ]}
   </Block>
 );

 const Description = props => (
   <Block background="dark">
     {[
       {
         content: 'This is another description of how this project is useful',
         image: imgUrl('docusaurus.svg'),
         imageAlign: 'right',
         title: 'Description',
       },
     ]}
   </Block>
 );

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="">
          <Featurelist/>

          <Screenshot />
          <Missions />
        </div>
      </div>
    );
  }
}

module.exports = Index;
